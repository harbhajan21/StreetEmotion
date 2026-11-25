import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { formatPrice, useShop } from '../context/ShopContext';

export default function BagLine({ line, onNavigate }) {
  const { setQuantity, canAdd } = useShop();
  const { product, size, quantity } = line;

  return (
    <li className="flex gap-4 py-5">
      <Link to={`/product/${product.id}`} onClick={onNavigate} className="w-24 flex-shrink-0" tabIndex={-1} aria-hidden="true">
        <img src={product.image} alt="" className="aspect-[3/4] w-full object-cover" />
      </Link>
      <div className="flex min-w-0 flex-grow flex-col justify-between">
        <div className="flex justify-between gap-3">
          <div className="min-w-0">
            <Link to={`/product/${product.id}`} onClick={onNavigate} className="font-semibold leading-snug hover:underline">{product.name}</Link>
            <p className="mt-0.5 text-sm text-stone">{product.color}, size {size}</p>
          </div>
          <p className="font-semibold tabular-nums">{formatPrice(product.price * quantity)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded border border-line">
            <button type="button" className="icon-btn" onClick={() => setQuantity(product.id, size, quantity - 1)} aria-label={`Decrease ${product.name}`}><Minus size={15} /></button>
            <span className="w-6 text-center text-sm font-semibold tabular-nums" aria-live="polite">{quantity}</span>
            <button type="button" className="icon-btn disabled:text-line" disabled={!canAdd(product.id)} onClick={() => setQuantity(product.id, size, quantity + 1)} aria-label={`Increase ${product.name}`}><Plus size={15} /></button>
          </div>
          <button type="button" className="link min-h-[44px] text-sm" onClick={() => setQuantity(product.id, size, 0)} aria-label={`Remove ${product.name}`}>Remove</button>
        </div>
      </div>
    </li>
  );
}
