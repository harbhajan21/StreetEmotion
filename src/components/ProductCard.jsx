import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus } from 'lucide-react';
import { formatPrice, useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist, setQuickView } = useShop();
  const saved = wishlist.includes(product.id);

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded bg-line">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img src={product.image} alt={`${product.name} in ${product.color}`} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </Link>
        {product.isNew && <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-ink px-2 py-1 text-xs font-semibold text-paper">New</span>}
        <button type="button" className="icon-btn absolute right-1 top-1" onClick={() => toggleWishlist(product.id)} aria-pressed={saved} aria-label={`Save ${product.name}`}>
          <Heart size={20} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button
          type="button"
          onClick={() => setQuickView(product)}
          aria-label={`Quick add ${product.name}`}
          className="absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center gap-2 rounded bg-paper text-sm font-semibold transition-colors hover:bg-ink hover:text-paper sm:w-auto sm:px-4"
        >
          <Plus size={18} /><span className="hidden sm:inline">Quick add</span>
        </button>
      </div>
      <div className="mt-3 text-[15px] sm:flex sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <Link to={`/product/${product.id}`} className="font-medium leading-snug hover:underline" tabIndex={-1}>{product.name}</Link>
          <p className="text-sm text-stone">{[product.color, product.gsm].filter(Boolean).join(', ')}</p>
        </div>
        <p className="font-medium tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}

export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 lg:grid-cols-4">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
