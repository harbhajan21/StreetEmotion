import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Totals from '../components/Totals';
import { formatPrice, useShop } from '../context/ShopContext';

export default function Invoice() {
  const { orders } = useShop();
  const [params] = useSearchParams();
  const order = orders.find((o) => o.id === params.get('orderId'));

  if (!order) {
    return (
      <div className="page py-24">
        <h1 className="t-h1">Order not found</h1>
        <p className="mb-8 mt-4 text-stone">Orders are only saved in the browser they were placed in.</p>
        <Link to="/profile" className="btn-ink">Your orders</Link>
      </div>
    );
  }

  const c = order.customer;
  return (
    <div className="page max-w-3xl pb-20 pt-10">
      <h1 className="t-h1">Thank you{c.name ? `, ${c.name.split(' ')[0]}` : ''}</h1>
      <p className="mt-4">Demo order <strong>{order.id}</strong>, {new Date(order.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}. Payment was not collected and nothing will ship.</p>
      <div className="mt-8 rounded bg-paper p-5 sm:p-8">
        <ul className="divide-y divide-line">
          {order.items.map((i) => (
            <li key={i.id + i.size} className="flex justify-between gap-4 py-3">
              <span><span className="block font-semibold">{i.name}</span><span className="text-sm text-stone">{i.color}, size {i.size}, quantity {i.quantity}</span></span>
              <span className="tabular-nums">{formatPrice(i.price * i.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-line pt-5"><Totals {...order} /></div>
        <div className="mt-8">
          <h2 className="font-semibold">Deliver to</h2>
          <p className="text-stone">{c.name}<br />{c.address}<br />{c.city}, {c.state} {c.pin}</p>
        </div>
      </div>
      <div className="no-print mt-6 flex flex-wrap gap-3">
        <Link to="/products" className="btn-ink">Keep shopping</Link>
        <button type="button" className="btn-line" onClick={() => window.print()}>Print</button>
      </div>
    </div>
  );
}
