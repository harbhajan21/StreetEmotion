import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../context/ShopContext';

export default function OrderList({ orders, showCustomer = false }) {
  if (!orders.length) return <p className="text-stone">No orders yet.</p>;
  return (
    <ul className="divide-y divide-line border-y border-line">
      {orders.map((o) => (
        <li key={o.id}>
          <Link to={`/invoice?orderId=${o.id}`} className="group flex items-center justify-between gap-4 py-4">
            <span>
              <span className="block font-semibold group-hover:underline">{o.id}</span>
              <span className="text-sm text-stone">
                {new Date(o.date).toLocaleDateString('en-IN', { dateStyle: 'medium' })}, {o.items.reduce((n, i) => n + i.quantity, 0)} items{showCustomer ? `, ${o.customer.name}` : ''}
              </span>
            </span>
            <span className="font-semibold tabular-nums">{formatPrice(o.total)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
