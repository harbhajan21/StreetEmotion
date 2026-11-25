import React, { createContext, useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../data/products';
import { BRAND } from '../data/brand';

export const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

const PROMOS = { POP10: 0.1, STREET10: 0.1, EMOTION10: 0.1, DROP20: 0.2, VIP20: 0.2 };

// State that survives a reload, stored only in this browser.
function useStored(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
  }, [key, value]);
  return [value, setValue];
}

export const formatPrice = (amount) => `₹${Math.round(amount || 0).toLocaleString('en-IN')}`;

export const ShopProvider = ({ children }) => {
  const products = PRODUCTS;
  const [lines, setLines] = useStored('se_bag_v5', []);
  const [wishlist, setWishlist] = useStored('se_wishlist_v5', []);
  const [orders, setOrders] = useStored('se_orders_v5', []);
  const [profile, setProfile] = useStored('se_profile_v5', { name: '', email: '', phone: '', address: '', city: '', state: '', pin: '' });
  const [promo, setPromo] = useState('');
  const [panel, setPanel] = useState(null); // 'bag' | 'search' | 'menu' | 'size'
  const [quickView, setQuickView] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  // Lines store only id, size and quantity; prices always come from the catalogue.
  const cart = lines.flatMap((line) => {
    const product = products.find((p) => p.id === line.id);
    return product ? [{ ...line, product }] : [];
  });
  const count = cart.reduce((n, l) => n + l.quantity, 0);
  const subtotal = cart.reduce((n, l) => n + l.quantity * l.product.price, 0);
  const discount = Math.round(subtotal * (PROMOS[promo] || 0));
  const shipping = subtotal === 0 || subtotal >= BRAND.freeShippingOver ? 0 : BRAND.shippingFee;
  const total = subtotal - discount + shipping;

  const addToCart = (product, size, quantity = 1) => {
    setLines((prev) => {
      const taken = prev.filter((l) => l.id === product.id).reduce((n, l) => n + l.quantity, 0);
      const add = Math.min(quantity, product.stock - taken);
      if (add <= 0) return prev;
      const match = prev.find((l) => l.id === product.id && l.size === size);
      return match
        ? prev.map((l) => (l === match ? { ...l, quantity: l.quantity + add } : l))
        : [...prev, { id: product.id, size, quantity: add }];
    });
    setQuickView(null);
    setPanel('bag');
  };

  const setQuantity = (id, size, quantity) =>
    setLines((prev) => prev.flatMap((l) => {
      if (l.id !== id || l.size !== size) return [l];
      return quantity > 0 ? [{ ...l, quantity }] : [];
    }));

  // True while one more unit of this product is still in stock.
  const canAdd = (id) => {
    const stock = products.find((p) => p.id === id)?.stock || 0;
    return lines.filter((l) => l.id === id).reduce((n, l) => n + l.quantity, 0) < stock;
  };

  const toggleWishlist = (id) => {
    const saved = wishlist.includes(id);
    setWishlist(saved ? wishlist.filter((x) => x !== id) : [...wishlist, id]);
    setToast(saved ? 'Removed from wishlist' : 'Saved to wishlist');
  };

  const applyPromo = (code) => {
    const key = code.trim().toUpperCase();
    if (!PROMOS[key]) return false;
    setPromo(key);
    return true;
  };

  // Demo only: nothing is charged and nothing leaves this browser.
  const placeOrder = (customer) => {
    if (!cart.length) return null;
    const order = {
      id: `SE-${Date.now().toString().slice(-8)}`,
      date: new Date().toISOString(),
      customer,
      items: cart.map((l) => ({ id: l.id, name: l.product.name, color: l.product.color, price: l.product.price, size: l.size, quantity: l.quantity })),
      subtotal, discount, shipping, total, promo,
    };
    setOrders((prev) => [order, ...prev]);
    setLines([]);
    setPromo('');
    return order;
  };

  return (
    <ShopContext.Provider value={{
      products, cart, count, subtotal, discount, shipping, total,
      addToCart, setQuantity, canAdd,
      wishlist, toggleWishlist,
      promo, applyPromo, clearPromo: () => setPromo(''),
      orders, placeOrder, profile, setProfile,
      panel, setPanel, quickView, setQuickView, toast, setToast,
    }}>
      {children}
    </ShopContext.Provider>
  );
};
