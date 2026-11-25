import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice, useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/catalog';
import Sheet from './Sheet';

export const matches = (p, query) => {
  const text = [p.name, p.description, p.style, p.fit, p.color, p.mood, p.gsm, p.fabric].join(' ').toLowerCase();
  return query.toLowerCase().trim().split(/\s+/).every((word) => text.includes(word));
};

export default function SearchModal() {
  const { panel, setPanel, products } = useShop();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const open = panel === 'search';
  const close = () => setPanel(null);

  useEffect(() => { if (open) setQuery(''); }, [open]);

  const q = query.trim();
  const results = q ? products.filter((p) => matches(p, q)) : products.filter((p) => p.isNew);

  const submit = (e) => {
    e.preventDefault();
    if (!q) return;
    close();
    navigate(`/products?search=${encodeURIComponent(q)}`);
  };

  return (
    <Sheet open={open} onClose={close} title="Search">
      <form onSubmit={submit} className="border-b border-line p-5 sm:p-6" role="search">
        <label htmlFor="site-search" className="sr-only">Search products</label>
        <input id="site-search" autoFocus type="search" className="field" placeholder="Hoodie, black, 500 GSM" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="mt-3 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => <Link key={c.id} to={`/products?style=${c.id}`} onClick={close} className="chip">{c.label}</Link>)}
        </div>
      </form>
      <div className="flex-grow overflow-y-auto p-5 sm:p-6">
        <p className="mb-3 text-sm text-stone" aria-live="polite">
          {!q ? 'New in' : results.length ? `${results.length} ${results.length === 1 ? 'result' : 'results'}` : `Nothing matches “${q}”. Try a colour or a category.`}
        </p>
        <ul className="divide-y divide-line">
          {results.map((p) => (
            <li key={p.id}>
              <Link to={`/product/${p.id}`} onClick={close} className="group flex items-center gap-4 py-3">
                <img src={p.image} alt="" className="aspect-[3/4] w-16 object-cover" />
                <span className="flex-grow"><span className="block font-semibold group-hover:underline">{p.name}</span><span className="text-sm text-stone">{p.color}</span></span>
                <span className="font-semibold tabular-nums">{formatPrice(p.price)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Sheet>
  );
}
