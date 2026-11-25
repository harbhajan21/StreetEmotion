import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddressFields from '../components/AddressFields';
import Totals from '../components/Totals';
import { formatPrice, useShop } from '../context/ShopContext';

export default function Checkout() {
  const shop = useShop();
  const { cart, profile, setProfile, placeOrder } = shop;
  const [form, setForm] = useState(profile);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const order = placeOrder(form);
    if (!order) return;
    setProfile(form);
    navigate(`/invoice?orderId=${order.id}`, { replace: true });
  };

  if (!cart.length) {
    return (
      <div className="page py-24">
        <h1 className="t-h1">Nothing to check out</h1>
        <p className="mb-8 mt-4 text-stone">Add something to your bag first.</p>
        <Link to="/products" className="btn-ink">Shop all</Link>
      </div>
    );
  }

  return (
    <div className="page pb-20 pt-8 lg:pt-12">
      <h1 className="t-h1">Checkout</h1>
      <form onSubmit={submit} className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-10 lg:col-span-7">
          <section><h2 className="t-h3 mb-5">Delivery</h2><AddressFields value={form} onChange={setForm} required /></section>
          <section className="rounded border border-ink p-5">
            <h2 className="t-h3">Payment</h2>
            <p className="mt-2"><strong>Demo checkout.</strong> Payments aren’t connected yet, so nothing is charged and nothing ships. Your details stay in this browser.</p>
          </section>
        </div>
        <aside className="space-y-6 rounded bg-paper p-5 sm:p-8 lg:col-span-5 lg:self-start" aria-label="Order summary">
          <ul className="space-y-4">
            {cart.map((l) => (
              <li key={l.id + l.size} className="flex items-center gap-4">
                <img src={l.product.image} alt="" className="aspect-[3/4] w-14 object-cover" />
                <span className="flex-grow"><span className="block font-semibold">{l.product.name}</span><span className="text-sm text-stone">Size {l.size}, quantity {l.quantity}</span></span>
                <span className="tabular-nums">{formatPrice(l.product.price * l.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-line pt-5"><Totals {...shop} /></div>
          <button type="submit" className="btn-ink w-full">Place demo order</button>
        </aside>
      </form>
    </div>
  );
}
