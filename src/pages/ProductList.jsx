import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { ProductGrid } from '../components/ProductCard';
import { matches } from '../components/SearchModal';
import Sheet from '../components/Sheet';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, MOODS, categoryLabel, fitLabel, moodLabel } from '../data/catalog';

const unique = (list) => [...new Set(list)];

// Every filter lives in the URL, so a filtered view can be shared or reloaded.
export default function ProductList() {
  const { products } = useShop();
  const [params, setParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const get = (key) => params.get(key) || '';
  const style = get('style'), mood = get('mood'), size = get('size'), fit = get('fit'), color = get('color'), search = get('search'), sort = get('sort');

  const set = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true });
  };

  const list = products.filter((p) =>
    (!style || p.style === style) && (!mood || p.mood === mood) && (!size || p.sizes.includes(size)) &&
    (!fit || p.fit === fit) && (!color || p.color === color) && (!search || matches(p, search)));
  if (sort === 'low') list.sort((a, b) => a.price - b.price);
  if (sort === 'high') list.sort((a, b) => b.price - a.price);
  if (sort === 'new') list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));

  const heading = search ? `“${search}”` : style ? categoryLabel(style) : mood ? moodLabel(mood) : 'Shop all';
  const active = ['mood', 'size', 'fit', 'color'].filter(get).length;

  const groups = [
    ['mood', 'Mood', MOODS.map((m) => [m.id, m.label])],
    ['size', 'Size', ['S', 'M', 'L', 'XL', 'XXL'].map((s) => [s, s])],
    ['fit', 'Fit', unique(products.map((p) => p.fit)).map((f) => [f, fitLabel(f)])],
    ['color', 'Colour', unique(products.map((p) => p.color)).map((c) => [c, c])],
  ];

  return (
    <div className="page pb-20 pt-8 lg:pt-12">
      <h1 className="t-h1">{heading}</h1>

      <div className="mt-7 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Category">
        {[{ id: '', label: 'All' }, ...CATEGORIES].map((c) => (
          <button key={c.label} type="button" aria-pressed={style === c.id} onClick={() => set('style', c.id)} className={`chip flex-shrink-0 ${style === c.id ? 'chip-on' : ''}`}>{c.label}</button>
        ))}
      </div>

      <div className="my-6 flex items-center justify-between gap-3 border-y border-line py-2">
        <button type="button" className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium" onClick={() => setOpen(true)}>
          <SlidersHorizontal size={18} /> Filter{active ? ` (${active})` : ''}
        </button>
        <span className="hidden text-sm text-stone sm:inline" aria-live="polite">{list.length} {list.length === 1 ? 'item' : 'items'}</span>
        <label className="inline-flex items-center gap-2 text-[15px]">
          <span className="sr-only">Sort by</span>
          <select className="min-h-[44px] cursor-pointer bg-transparent pr-1 font-medium" value={sort} onChange={(e) => set('sort', e.target.value)}>
            <option value="">Recommended</option>
            <option value="new">New first</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>

      {list.length ? <ProductGrid products={list} /> : (
        <div className="py-20">
          <p className="t-h3">Nothing matches those filters</p>
          <p className="mb-6 mt-2 text-stone">Remove one or start again.</p>
          <button type="button" className="btn-ink" onClick={() => setParams({})}>Clear everything</button>
        </div>
      )}

      <Sheet open={open} onClose={() => setOpen(false)} title="Filter">
        <div className="flex-grow space-y-8 overflow-y-auto p-5 sm:p-6">
          {groups.map(([key, label, options]) => (
            <fieldset key={key}>
              <legend className="mb-3 font-semibold">{label}</legend>
              <div className="flex flex-wrap gap-2">
                {options.map(([id, text]) => (
                  <button key={id} type="button" aria-pressed={get(key) === id} onClick={() => set(key, get(key) === id ? '' : id)} className={`chip ${get(key) === id ? 'chip-on' : ''}`}>{text}</button>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-line p-5 sm:p-6">
          <button type="button" className="btn-line" onClick={() => setParams(style ? { style } : {})}>Clear</button>
          <button type="button" className="btn-ink" onClick={() => setOpen(false)}>Show {list.length}</button>
        </div>
      </Sheet>
    </div>
  );
}
