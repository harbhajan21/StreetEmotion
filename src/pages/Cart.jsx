import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShippingMeter } from '../components/BagDrawer';
import BagLine from '../components/BagLine';
import Totals from '../components/Totals';
import { useShop } from '../context/ShopContext';

export default function Cart() {
  const shop = useShop();
  const { cart, count, promo, applyPromo, clearPromo } = shop;
  const [code, setCode] = useState('');
  const [invalid, setInvalid] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const ok = applyPromo(code);
    setInvalid(!ok);
    if (ok) setCode('');
  };

  if (!cart.length) {
    return (
      <div className="page py-24">
        <h1 className="t-h1">Your bag is empty</h1>
        <p className="mb-8 mt-4 text-stone">Start with the heavyweight essentials.</p>
        <Link to="/products" className="btn-ink">Shop all</Link>
      </div>
    );
  }

  return (
    <div className="page pb-20 pt-8 lg:pt-12">
      <h1 className="t-h1">Bag ({count})</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <ul className="divide-y divide-line border-y border-line lg:col-span-7 lg:self-start">
          {cart.map((line) => <BagLine key={line.id + line.size} line={line} />)}
        </ul>
        <aside className="space-y-6 rounded bg-paper p-5 sm:p-8 lg:col-span-5 lg:self-start" aria-label="Order summary">
          <ShippingMeter />
          {promo ? (
            <p className="flex items-center justify-between"><span>{promo} applied</span><button type="button" className="link min-h-[44px]" onClick={clearPromo}>Remove</button></p>
          ) : (
            <form onSubmit={submit}>
              <label className="label" htmlFor="promo">Promo code</label>
              <div className="flex gap-2">
                <input id="promo" className="field" value={code} onChange={(e) => { setCode(e.target.value); setInvalid(false); }} aria-invalid={invalid} aria-describedby="promo-error" />
                <button type="submit" className="btn-line">Apply</button>
              </div>
              <p id="promo-error" role="alert" className="mt-1.5 text-sm text-alert">{invalid ? 'That code isn’t valid. Check the spelling.' : ''}</p>
            </form>
          )}
          <Totals {...shop} />
          <Link to="/checkout" className="btn-ink w-full">Checkout</Link>
        </aside>
      </div>
    </div>
  );
}
