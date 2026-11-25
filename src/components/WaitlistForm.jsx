import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function WaitlistForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [state, setState] = useState('idle'); // idle | sending | done | error
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const { error } = await supabase.from('waitlist').insert([form]);
      setState(error ? 'error' : 'done');
    } catch {
      setState('error');
    }
  };

  if (state === 'done') {
    return <div role="status"><p className="t-h3">You’re on the list.</p><p className="mt-2 text-stone">We’ll write when the next drop is ready.</p></div>;
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div><label className="label" htmlFor="w-name">Name</label><input id="w-name" name="name" required autoComplete="name" className="field" value={form.name} onChange={change} /></div>
      <div><label className="label" htmlFor="w-email">Email</label><input id="w-email" name="email" type="email" required autoComplete="email" className="field" value={form.email} onChange={change} /></div>
      <div><label className="label" htmlFor="w-phone">Phone (optional)</label><input id="w-phone" name="phone" type="tel" autoComplete="tel" className="field" value={form.phone} onChange={change} /></div>
      {state === 'error' && <p role="alert" className="text-alert">We couldn’t add you just now. Check your connection and try again.</p>}
      <button type="submit" className="btn-ink w-full" disabled={state === 'sending'}>{state === 'sending' ? 'Joining…' : 'Join the list'}</button>
    </form>
  );
}
