import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, useShop } from '../context/ShopContext';
import { BRAND } from '../data/brand';
import BagLine from './BagLine';
import Sheet from './Sheet';

export function ShippingMeter() {
  const { subtotal } = useShop();
  const left = BRAND.freeShippingOver - subtotal;
  return (
    <div>
      <p className="text-sm">{left > 0 ? <>Add <strong>{formatPrice(left)}</strong> for free shipping</> : 'You’ve got free shipping'}</p>
      <div className="mt-2 h-1 overflow-hidden rounded-sm bg-line">
        <div className="h-full rounded-sm bg-ink transition-[width] duration-500" style={{ width: `${Math.min(100, (subtotal / BRAND.freeShippingOver) * 100)}%` }} />
      </div>
    </div>
  );
}

export default function BagDrawer() {
  const { panel, setPanel, cart, count, subtotal } = useShop();
  const close = () => setPanel(null);

  return (
    <Sheet open={panel === 'bag'} onClose={close} title={`Bag (${count})`}>
      {cart.length === 0 ? (
        <div className="flex flex-grow flex-col justify-center p-6">
          <p className="t-h3">Your bag is empty</p>
          <p className="mb-6 mt-2 text-stone">Start with the heavyweight essentials.</p>
          <Link to="/products" onClick={close} className="btn-ink self-start">Shop all</Link>
        </div>
      ) : (
        <>
          <div className="border-b border-line px-5 py-4 sm:px-6"><ShippingMeter /></div>
          <ul className="flex-grow divide-y divide-line overflow-y-auto px-5 sm:px-6">
            {cart.map((line) => <BagLine key={line.id + line.size} line={line} onNavigate={close} />)}
          </ul>
          <div className="border-t border-line p-5 sm:p-6">
            <div className="flex justify-between font-semibold"><span>Subtotal</span><span className="tabular-nums">{formatPrice(subtotal)}</span></div>
            <p className="mb-4 mt-1 text-sm text-stone">Promo codes are applied in your bag. Shipping is added at checkout.</p>
            <div className="grid gap-2">
              <Link to="/checkout" onClick={close} className="btn-ink">Checkout</Link>
              <Link to="/cart" onClick={close} className="btn-line">View bag</Link>
            </div>
          </div>
        </>
      )}
    </Sheet>
  );
}
