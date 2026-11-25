import React from 'react';
import { Link } from 'react-router-dom';
import { ProductGrid } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

export default function Wishlist() {
  const { products, wishlist } = useShop();
  const items = products.filter((p) => wishlist.includes(p.id));
  return (
    <div className="page pb-20 pt-8 lg:pt-12">
      <h1 className="t-h1 mb-8">Wishlist</h1>
      {items.length ? <ProductGrid products={items} /> : (
        <>
          <p className="mb-8 text-stone">Tap the heart on anything you like and it will wait here.</p>
          <Link to="/products" className="btn-ink">Shop all</Link>
        </>
      )}
    </div>
  );
}
