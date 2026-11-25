import React from 'react';
import { formatPrice } from '../context/ShopContext';

export default function Totals({ subtotal, discount, shipping, total, promo }) {
  return (
    <dl className="space-y-2 tabular-nums">
      <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
      {discount > 0 && <div className="flex justify-between"><dt>Promo {promo}</dt><dd>−{formatPrice(discount)}</dd></div>}
      <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping ? formatPrice(shipping) : 'Free'}</dd></div>
      <div className="flex justify-between border-t border-ink pt-3 font-semibold"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
    </dl>
  );
}
