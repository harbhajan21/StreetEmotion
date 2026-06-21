import React, { createContext, useState, useEffect } from 'react';
import boysStreetwear from '../assets/boys_streetwear.png';
import girlsStreetwear from '../assets/girls_streetwear.png';

export const ShopContext = createContext();

const INITIAL_PRODUCTS = [
 {
 id: "crest-tee-001",
 name: "CREST T-SHIRT",
 price: 35.00,
 category: "MEN",
 fit: "SLIM FIT",
 style: "T-SHIRTS",
 color: "PURE WHITE",
 image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFLnFDWQ6Qfhm9owCogcpDETPFlRSoHJWKc3a1jGYSmcKdK30CH9Rz8xjKmPIchpGnTUtAa96dXO8dNPvbv52aubaefuX2FF96nyikLIphCXvRUnCFxJTjfTSI2RvGXiaFQLeJ6efgAx5MltXIJwNebBUveTGZEeFrh3MdxGnvlvVwqPjBqEJyVVIplr5d27gZvbsJA4WQM6HJLIxSabTh69FYcFn7aPrcbIaNFW74nxe9ZH0Ic1qDQaERO28WbjDaC6u4RtCvZcs",
 sizes: ["S", "M", "L", "XL", "XXL"],
 description: "Wear your pride. The Crest T-Shirt is a classic everyday staple for any lifter. With a physique-enhancing slim fit and a soft stretch material, it’s built to endure every rep.",
 stock: 150
 },
 {
 id: "vital-seamless-002",
 name: "VITAL SEAMLESS LEGGINGS",
 price: 55.00,
 category: "WOMEN",
 fit: "SLIM FIT",
 style: "LEGGINGS",
 color: "VOID BLACK",
 image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnVYiY-T1egKLH6sl8vwIhkmdPOlzpSJ5FSxgqsFgK5AJfDydpNPVvvsavJPcjZ2Pwyxcv1csjWxgx1aez7RkRE7PdziXhu_2lsonmZ0PaQBGbQWU_YIIgK6M0_t4ldmcPodEO41HQl8Ph8wq6LCfWT8fJz13jj9OCmv-jkQPc4b3fuTuAmir3jnihTV6ym-9vjeXpUFOFimVhZupK185gvfu9cYT-ETDWSVC2F6khZYYK9ei3J12fiiGYD10SnJCiwr1_nSGt5rA",
 sizes: ["XS", "S", "M", "L"],
 description: "Do it all in Vital. With seamless sweat-wicking tech and supportive high-waisted designs, these leggings ensure you can move with complete confidence.",
 stock: 200
 },
 {
 id: "oversized-hoodie-003",
 name: "REST DAY OVERSIZED HOODIE",
 price: 65.00,
 category: "MEN",
 fit: "OVERSIZED",
 style: "HOODIES",
 color: "COLD GREY",
 image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASmC9DXousj1u70FdZuskzUHG55P2fkaVU4ELr7SoZfupj2i2UtzRe2X8onVgzEwaaoZQIDIkqdy_-sx01TBgpZWJ_PTh66YC2ntyMHb9ofPnc049bmLmjl93xNMwB9CmlfDBTaYRBvNDhRkMWRlxnpe3axdo-3h1nDOmaJBRNOxWJRKZLpENpcIC2qWhXsWEu7FANMkXaKX2Ag5wlnG5PCIiJLyi-A-_tCAj4dRXDjmb8UWlQ1rv94c4lxkX4hgEaWlmlatqPUlE",
 sizes: ["M", "L", "XL"],
 description: "Because rest is a crucial part of the process. An ultra-soft, heavy-blend oversized hoodie designed strictly for comfort and recovery.",
 stock: 50
 },
 {
 id: "adapt-sports-bra-004",
 name: "ADAPT SPORTS BRA",
 price: 45.00,
 category: "WOMEN",
 fit: "REGULAR FIT",
 style: "SPORTS BRAS",
 color: "BLUE",
 image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEO9jFAqNe1O72qhDvSyzmWKIvpoPlGrk2Shokle38ol-j5b3QR-E4hTS1ggIrIHFBCuBaV-ESgN0Pke4cDvrHygY65MMO5CdpTwRP8pNgwUDmPVt5tONNYLvwLbpWj_30L6Jtj-HOXUfMFHqqTBjGGMMR9eMsRVGwx9R5AHEamMtLEfH6X6x9FDR-RHWesL8wZY2Yhcgg57qVFsHB4wdOTVR--3zDCZMhpphqG7jkNeDF6-D17fXeAUiFjsl1EYVPRznOEd-iDdk",
 sizes: ["XS", "S", "M", "L"],
 description: "Medium support for maximum effort. The Adapt Sports Bra features sweat-wicking fabric and a secure underband for reliable workouts.",
 stock: 120
 },
 {
 id: "everyday-gym-bag-005",
 name: "EVERYDAY GYM BAG",
 price: 40.00,
 category: "ACCESSORIES",
 fit: "ONE SIZE",
 style: "BAGS",
 color: "VOID BLACK",
 image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7CQkL9ptKLMpU0HUNBb5o8JFSUYSZH0EeyR8eahHFFfhjvgoQLM7nInDEbUnG9aymdX7690fu6t1GL2CwB-ij0DkYkbjZO0wyYZg-ReAHJV5hBGoRg4pWx8cGve-YTNj6Q00HiPHLuMPLPBq2Mo-rJ2JBbtkO66WWKQABjb7E5WkpNmGCbkP9gonGpgvHyVf2rA4tDHTsDjH6Fo3E88o7Pu4qLk_bRHaZWPfz8Wm1knDmzjbfb71h_iwiJmCx-8o9xyPNx-KlBio",
 sizes: ["ONE SIZE"],
 description: "The only bag you need. Features a wet pocket for post-workout gear, multiple zip compartments, and a durable ripstop exterior.",
 stock: 45
 },
 {
 id: "lifting-straps-006",
 name: "PREMIUM LIFTING STRAPS",
 price: 15.00,
 category: "ACCESSORIES",
 fit: "ONE SIZE",
 style: "EQUIPMENT",
 color: "VOID BLACK",
 image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6oXmgXqtNIYhVCe2qlU7t5VcpPTEGEzwRK4hIUp9jCtxwcY8MoJL0eTQNzKw9ovxCWfsbtChfmnvpcx6dnZkQL9XJZ1lu5K8fLLqphgmejgD3bYLIkH7x7p850mieYjquMx1regw0Cbe-sUSzls8TneNWWYnYY_xpKCnOmvt4_n57--ZAoKuMy9h_Sc4nxysQU6RVtvQThRc3dU6itg-IeNgCpf6SZ4KRJ6K3ZpdoJrgrKAWR3P9GFJE4IJpXEpjRJP_BqvgoNwU",
 sizes: ["ONE SIZE"],
 description: "Grip heavier. Pull harder. Heavy-duty lifting straps with neoprene wrist padding to protect against friction.",
 stock: 300
 },
 {
 id: "boys-arrival-007",
 name: "BOYS ARRIVAL TEE",
 price: 25.00,
 category: "BOYS",
 fit: "REGULAR FIT",
 style: "T-SHIRTS",
 color: "COLD GREY",
 image: boysStreetwear,
 sizes: ["S", "M", "L"],
 description: "Start the journey right. A breathable, lightweight tee for the next generation of athletes.",
 stock: 80
 },
 {
 id: "girls-flex-008",
 name: "GIRLS FLEX LEGGINGS",
 price: 30.00,
 category: "GIRLS",
 fit: "SLIM FIT",
 style: "LEGGINGS",
 color: "PINK",
 image: girlsStreetwear,
 sizes: ["S", "M", "L"],
 description: "Stretchy, durable, and comfortable. Designed for endless energy and movement.",
 stock: 95
 }
];

export const ShopProvider = ({ children }) => {
 const [products, setProducts] = useState(INITIAL_PRODUCTS);
 const [theme, setTheme] = useState(() => {
 return localStorage.getItem('se_theme') || 'dark';
 });

 useEffect(() => {
 const root = window.document.documentElement;
 if (theme === 'light') {
 root.classList.add('light');
 } else {
 root.classList.remove('light');
 }
 localStorage.setItem('se_theme', theme);
 }, [theme]);

 const toggleTheme = () => {
 setTheme(prev => prev === 'dark' ? 'light' : 'dark');
 };
 const [cart, setCart] = useState(() => {
 const localData = localStorage.getItem('se_cart');
 return localData ? JSON.parse(localData) : [
 // Preload some items for demonstration in checkout templates
 {
 id: "crest-tee-001",
 name: "CREST T-SHIRT",
 price: 35.00,
 size: "L",
 quantity: 1,
 image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFLnFDWQ6Qfhm9owCogcpDETPFlRSoHJWKc3a1jGYSmcKdK30CH9Rz8xjKmPIchpGnTUtAa96dXO8dNPvbv52aubaefuX2FF96nyikLIphCXvRUnCFxJTjfTSI2RvGXiaFQLeJ6efgAx5MltXIJwNebBUveTGZEeFrh3MdxGnvlvVwqPjBqEJyVVIplr5d27gZvbsJA4WQM6HJLIxSabTh69FYcFn7aPrcbIaNFW74nxe9ZH0Ic1qDQaERO28WbjDaC6u4RtCvZcs",
 color: "PURE WHITE",
 fit: "SLIM FIT",
 style: "T-SHIRTS"
 }
 ];
 });
 
 const [orders, setOrders] = useState(() => {
 const localData = localStorage.getItem('se_orders');
 return localData ? JSON.parse(localData) : [
 {
 id: "SE-8921-X",
 customer: "K. YAMAMOTO",
 productClass: "VOID_HOODIE_GRY",
 total: 280.00,
 status: "SHIPPED",
 date: "2026-06-08"
 },
 {
 id: "SE-8922-P",
 customer: "A. CHEN",
 productClass: "UTILITY_CARGO_01",
 total: 450.00,
 status: "PROCESSING",
 date: "2026-06-08"
 },
 {
 id: "SE-8923-R",
 customer: "J. DOE",
 productClass: "CORE_TEE_WHT",
 total: 85.00,
 status: "RETURNED",
 date: "2026-06-09"
 }
 ];
 });

 const [user, setUser] = useState(() => {
 const localData = localStorage.getItem('se_user');
 return localData ? JSON.parse(localData) : {
 username: "ADMIN_01",
 name: "Alex Carter",
 email: "admin@streetemotion.com",
 address: "10 Brutalist Blvd, Concrete District, NY 10001",
 joined: "2026-01-10",
 avatar: "A"
 };
 });

 const [adminStats, setAdminStats] = useState(() => {
 const localData = localStorage.getItem('se_stats');
 return localData ? JSON.parse(localData) : {
 netSales: 142890.00,
 activeDrops: 4,
 pendingReturns: 12,
 cpu: 42,
 dbLoad: 18,
 latency: 24
 };
 });

 useEffect(() => {
 localStorage.setItem('se_cart', JSON.stringify(cart));
 }, [cart]);

 useEffect(() => {
 localStorage.setItem('se_orders', JSON.stringify(orders));
 }, [orders]);

 useEffect(() => {
 localStorage.setItem('se_user', JSON.stringify(user));
 }, [user]);

 useEffect(() => {
 localStorage.setItem('se_stats', JSON.stringify(adminStats));
 }, [adminStats]);

 // CPU / Latency simulations for admin
 useEffect(() => {
 const interval = setInterval(() => {
 setAdminStats(prev => ({
 ...prev,
 cpu: Math.min(100, Math.max(10, prev.cpu + Math.floor(Math.random() * 9) - 4)),
 dbLoad: Math.min(100, Math.max(5, prev.dbLoad + Math.floor(Math.random() * 5) - 2)),
 latency: Math.min(200, Math.max(15, prev.latency + Math.floor(Math.random() * 7) - 3))
 }));
 }, 4000);
 return () => clearInterval(interval);
 }, []);

 const [toasts, setToasts] = useState([]);
 const [comingSoonOpen, setComingSoonOpen] = useState(false);

 const showToast = (message, type = 'success') => {
 const id = Date.now() + Math.random().toString(36).substring(2, 9);
 setToasts(prev => [...prev, { id, message, type }]);
 setTimeout(() => {
 setToasts(prev => prev.filter(t => t.id !== id));
 }, 3500);
 };

 const addToCart = (product, size) => {
 showToast(`ADDED TO BAG // ${product.name} [${size}]`, 'success');
 setCart(prev => {
 const existing = prev.find(item => item.id === product.id && item.size === size);
 if (existing) {
 return prev.map(item =>
 (item.id === product.id && item.size === size)
 ? { ...item, quantity: item.quantity + 1 }
 : item
 );
 }
 return [...prev, {
 id: product.id,
 name: product.name,
 price: product.price,
 size: size,
 quantity: 1,
 image: product.image,
 color: product.color,
 fit: product.fit,
 style: product.style
 }];
 });
 };

 const updateCartQuantity = (productId, size, change) => {
 setCart(prev => {
 return prev.map(item => {
 if (item.id === productId && item.size === size) {
 const newQty = item.quantity + change;
 if (newQty > 0) {
 return { ...item, quantity: newQty };
 } else {
 showToast(`REMOVED FROM BAG // ${item.name} [${size}]`, 'info');
 return null;
 }
 }
 return item;
 }).filter(Boolean);
 });
 };

 const removeFromCart = (productId, size) => {
 const item = cart.find(i => i.id === productId && i.size === size);
 if (item) {
 showToast(`REMOVED FROM BAG // ${item.name} [${size}]`, 'info');
 }
 setCart(prev => prev.filter(item => !(item.id === productId && item.size === size)));
 };

 const cartTotal = () => {
 return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
 };

 const clearCart = () => {
 setCart([]);
 };

 const placeOrder = (billingInfo) => {
 const total = cartTotal();
 if (total === 0) return null;

 const newOrderId = `SE-${Math.floor(1000 + Math.random() * 9000)}-${['X','P','R','S'][Math.floor(Math.random()*4)]}`;
 const productClasses = cart.map(item => item.name.replace(/\s+/g, '_')).join(', ');

 const newOrder = {
 id: newOrderId,
 customer: billingInfo.name.toUpperCase(),
 productClass: productClasses,
 total: total,
 status: "PROCESSING",
 date: new Date().toISOString().split('T')[0],
 items: [...cart]
 };

 setOrders(prev => [newOrder, ...prev]);
 
 // Update Sales stats
 setAdminStats(prev => ({
 ...prev,
 netSales: prev.netSales + total
 }));

 clearCart();
 showToast(`ORDER PLACED // INVOICE ${newOrderId} GENERATED`, 'success');
 return newOrder;
 };

 return (
 <ShopContext.Provider value={{
 products,
 cart,
 orders,
 user,
 adminStats,
 toasts,
 theme,
 toggleTheme,
 showToast,
 addToCart,
 updateCartQuantity,
 removeFromCart,
 cartTotal,
 placeOrder,
 clearCart,
 setUser,
 comingSoonOpen,
 setComingSoonOpen
 }}>
 {children}
 </ShopContext.Provider>
 );
};
