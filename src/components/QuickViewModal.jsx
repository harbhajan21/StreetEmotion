import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, useShop } from '../context/ShopContext';
import Sheet from './Sheet';
import SizePicker from './SizePicker';

export default function QuickViewModal() {
  const { quickView: product, setQuickView, addToCart, canAdd, setPanel } = useShop();
  const [size, setSize] = useState('');
  const close = () => setQuickView(null);

  useEffect(() => { setSize(''); }, [product?.id]);

  const soldOut = product && !canAdd(product.id);

  return (
    <Sheet open={!!product} onClose={close} title="Quick add" side="center">
      {product && (
        <div className="grid sm:grid-cols-2">
          <img src={product.image} alt={`${product.name} in ${product.color}`} className="h-56 w-full rounded-none object-cover sm:aspect-[3/4] sm:h-auto" />
          <div className="flex flex-col justify-between gap-6 p-5 sm:p-8">
            <div>
              <h3 className="t-h2">{product.name}</h3>
              <p className="mt-1 font-semibold">{formatPrice(product.price)}</p>
              <p className="mt-4 text-stone">{product.description}</p>
            </div>
            <div className="space-y-4">
              <SizePicker sizes={product.sizes} value={size} onChange={setSize} onGuide={() => setPanel('size')} />
              <button type="button" className="btn-ink w-full" disabled={!size || soldOut} onClick={() => addToCart(product, size)}>
                {soldOut ? 'No more in stock' : size ? 'Add to bag' : 'Choose a size'}
              </button>
              <Link to={`/product/${product.id}`} onClick={close} className="link inline-block text-sm">See full details</Link>
            </div>
          </div>
        </div>
      )}
    </Sheet>
  );
}
