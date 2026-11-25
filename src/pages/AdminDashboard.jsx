import React from 'react';
import OrderList from '../components/OrderList';
import { formatPrice, useShop } from '../context/ShopContext';

// No login protects this route, so it must only ever show this browser's own demo data.
export default function AdminDashboard() {
  const { orders, products } = useShop();
  const sales = orders.reduce((n, o) => n + o.total, 0);
  return (
    <div className="page pb-20 pt-8 lg:pt-12">
      <h1 className="t-h1">Shop overview</h1>
      <p className="mt-4 text-stone">Demo orders from this browser. A real dashboard needs a backend and a login.</p>
      <dl className="my-10 grid border-y border-line sm:grid-cols-3">
        {[['Demo sales', formatPrice(sales)], ['Demo orders', orders.length], ['Products', products.length]].map(([k, v]) => (
          <div key={k} className="py-5"><dt className="text-stone">{k}</dt><dd className="t-num">{v}</dd></div>
        ))}
      </dl>
      <div className="grid gap-14 lg:grid-cols-2">
        <section><h2 className="t-h3 mb-5">Orders</h2><OrderList orders={orders} showCustomer /></section>
        <section>
          <h2 className="t-h3 mb-5">Stock</h2>
          <ul className="divide-y divide-line border-y border-line">
            {products.map((p) => <li key={p.id} className="flex justify-between py-3"><span>{p.name}</span><span className="tabular-nums">{p.stock}</span></li>)}
          </ul>
        </section>
      </div>
    </div>
  );
}
