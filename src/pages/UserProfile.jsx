import React, { useState } from 'react';
import AddressFields from '../components/AddressFields';
import OrderList from '../components/OrderList';
import { useShop } from '../context/ShopContext';

export default function UserProfile() {
  const { profile, setProfile, orders, setToast } = useShop();
  const [form, setForm] = useState(profile);

  const submit = (e) => {
    e.preventDefault();
    setProfile(form);
    setToast('Details saved');
  };

  return (
    <div className="page pb-20 pt-8 lg:pt-12">
      <h1 className="t-h1">Account</h1>
      <p className="mt-4 text-stone">Saved in this browser only. Sign-in is coming later.</p>
      <div className="mt-10 grid gap-14 lg:grid-cols-2">
        <section><h2 className="t-h3 mb-5">Orders</h2><OrderList orders={orders} /></section>
        <section>
          <h2 className="t-h3 mb-5">Your details</h2>
          <form onSubmit={submit}><AddressFields value={form} onChange={setForm} /><button type="submit" className="btn-ink mt-5">Save details</button></form>
        </section>
      </div>
    </div>
  );
}
