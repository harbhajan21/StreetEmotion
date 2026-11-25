import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { ProductGrid } from '../components/ProductCard';
import WaitlistForm from '../components/WaitlistForm';
import WashStory from '../components/WashStory';
import { formatPrice, useShop } from '../context/ShopContext';
import { CATEGORIES, MOODS } from '../data/catalog';

function Turn() {
  return (
    <section className="bg-ink text-paper">
      <div className="page grid gap-8 py-16 lg:grid-cols-12 lg:py-24">
        <h2 className="t-h2 lg:col-span-5">We got tired of buying it again.</h2>
        <div className="grid gap-5 text-[17px] leading-relaxed text-[#D5D2CB] sm:grid-cols-2 lg:col-span-7 lg:gap-10">
          <p>Cheap clothes ask you to pay again and again. Expensive ones often ask you to pay for the name.</p>
          <p>We wanted a third choice: clothes good enough to keep, at a price that doesn’t need a second thought.</p>
        </div>
      </div>
    </section>
  );
}

const CALLOUTS = [
  ['Ribbed collar', 'A dense rib, because the neck is often the first thing to go.', 'top-[28%] left-[50%]'],
  ['Dropped shoulders', 'The cut sits past the shoulder, so it falls straight.', 'top-[33%] left-[24%]'],
  ['320 GSM cotton', 'Heavy cloth that hangs rather than clings.', 'top-[54%] left-[50%]'],
  ['Pre-shrunk', 'Most of the shrinking happens before it reaches you.', 'top-[72%] left-[36%]'],
];

function Cloth() {
  const { products } = useShop();
  const tee = products[0];
  return (
    <section className="page grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24">
      <div className="lg:col-span-6">
        <h2 className="t-h2">So we started with the cloth.</h2>
        <ol className="mt-7 border-t border-line">
          {CALLOUTS.map(([title, text], i) => (
            <li key={title} className="flex gap-5 border-b border-line py-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper">{i + 1}</span>
              <div><h3 className="font-semibold">{title}</h3><p className="text-stone">{text}</p></div>
            </li>
          ))}
        </ol>
        <Link to={`/product/${tee.id}`} className="btn-line mt-8">See the {tee.name}</Link>
      </div>
      <div className="relative lg:col-span-5 lg:col-start-8">
        <img src={tee.image} alt={`${tee.name} with four numbered details`} className="aspect-[3/4] w-full object-cover" loading="lazy" />
        {CALLOUTS.map(([title, , position], i) => (
          <span key={title} aria-hidden="true" className={`absolute flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-lime text-sm font-bold ${position}`}>{i + 1}</span>
        ))}
      </div>
    </section>
  );
}

function Weights() {
  const { products } = useShop();
  const rows = products.filter((p) => /GSM/.test(p.gsm)).map((p) => ({ ...p, n: parseInt(p.gsm, 10) })).sort((a, b) => b.n - a.n);
  return (
    <section className="page pb-16 lg:pb-24">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="t-h2">We show you the weight.</h2>
          <p className="mt-4 max-w-sm text-stone">GSM is grams per square metre of fabric. Weight isn’t the whole story of quality, but it’s a number you can compare with anyone’s.</p>
        </div>
        <ul className="lg:col-span-8">
          {rows.map((p) => (
            <li key={p.id} className="border-t border-line last:border-b">
              <Link to={`/product/${p.id}`} className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 py-3 text-[15px] sm:grid-cols-[220px_1fr_88px]">
                <span className="font-semibold group-hover:underline">{p.name}</span>
                <span className="order-last col-span-2 block h-1.5 sm:order-none sm:col-span-1" aria-hidden="true">
                  <span className="block h-full rounded-sm bg-ink transition-colors group-hover:bg-lime" style={{ width: `${(p.n / rows[0].n) * 100}%` }} />
                </span>
                <span className="text-right tabular-nums">{p.gsm}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const CHECKS = [
  ['Hold it up to the light', 'Look through a single layer of the body. The more light you see, the thinner or looser the cloth.'],
  ['Stretch the collar, then let go', 'A good rib springs back. A poor one stays open.'],
  ['Turn it inside out', 'Seams should be even and flat, with no loose threads or gaps when you pull gently.'],
  ['Measure it before and after washing', 'Write down chest and length. The numbers tell you more than any label.'],
];

function Trust() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="page grid gap-8 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-5">
          <h2 className="t-h2">Don’t take our word for it.</h2>
          <p className="mt-4 max-w-sm">Trust isn’t something we can print on a label. So here’s how to test any piece of clothing, ours included.</p>
          <Link to="/refund" className="link mt-5 inline-flex min-h-[44px] items-center font-medium">Not right? Read the returns policy</Link>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {CHECKS.map(([title, text]) => (
            <li key={title} className="border-t border-line py-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 max-w-prose text-[15px]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Price() {
  const { products } = useShop();
  return (
    <section className="page grid gap-8 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
      <div className="lg:col-span-5">
        <h2 className="t-h2">Pay for the cloth, not the hype.</h2>
        <p className="mt-4 max-w-sm text-stone">We keep the range small and the prices plain, so you can decide for yourself what it’s worth.</p>
      </div>
      <ul className="lg:col-span-7">
        {CATEGORIES.map((c) => {
          const items = products.filter((p) => p.style === c.id);
          const from = Math.min(...items.map((p) => p.price));
          return (
            <li key={c.id} className="border-t border-line last:border-b">
              <Link to={`/products?style=${c.id}`} className="group flex items-center justify-between gap-4 py-2.5">
                <span className="flex items-center gap-4"><img src={items[0].image} alt="" className="h-16 w-12 object-cover" loading="lazy" /><span className="t-h3 group-hover:underline">{c.label}</span></span>
                <span className="flex items-center gap-4"><span className="whitespace-nowrap tabular-nums"><span className="text-sm text-stone">from</span> {formatPrice(from)}</span><ArrowRight className="hidden transition-transform group-hover:translate-x-1 sm:block" size={18} /></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const AGES = [
  { age: '22', text: 'Oversized, over cargos, out till late.', ids: ['oversized-hoodie-003', 'tactical-cargo-005'] },
  { age: '42', text: 'Same hoodie. Denim jacket on top, school run by eight.', ids: ['oversized-hoodie-003', 'deconstructed-jacket-006'] },
];

function Generations() {
  const { products } = useShop();
  return (
    <section className="border-t border-line bg-paper">
      <div className="page py-16 lg:py-24">
        <h2 className="t-h2">One hoodie, twenty years apart.</h2>
        <p className="mt-3 max-w-xl text-stone">Good clothes don’t have an age limit. Neither do we.</p>
        <div className="mt-9 grid gap-12 lg:grid-cols-2 lg:gap-10">
          {AGES.map(({ age, text, ids }) => (
            <div key={age}>
              <div className="mb-4 flex items-center gap-4"><h3 className="t-num"><span className="sr-only">At </span>{age}</h3><p className="max-w-[260px] text-[15px] leading-snug text-stone">{text}</p></div>
              <div className="grid grid-cols-2 gap-3">
                {ids.map((id) => {
                  const p = products.find((x) => x.id === id);
                  return (
                    <Link key={id} to={`/product/${id}`} className="group block">
                      <img src={p.image} alt={`${p.name} in ${p.color}`} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                      <span className="mt-3 block text-[15px] font-medium group-hover:underline">{p.name}</span>
                      <span className="text-stone">{formatPrice(p.price)}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Moods() {
  const { products } = useShop();
  const [active, setActive] = useState(MOODS[0].id);
  const mood = MOODS.find((m) => m.id === active);
  const items = products.filter((p) => p.mood === active).slice(0, 2);

  return (
    <section className="bg-ink text-paper">
      <div className="page grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="t-h2 mb-5">The rest is how you feel today.</h2>
          {MOODS.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={m.id === active}
              onClick={() => setActive(m.id)}
              onMouseEnter={() => setActive(m.id)}
              onFocus={() => setActive(m.id)}
              className={`t-num block w-full border-b border-[#34332F] py-3.5 text-left transition-colors ${m.id === active ? 'text-lime' : 'text-[#7D7A73]'}`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            {items.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <img src={p.image} alt={`${p.name} in ${p.color}`} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                <span className="mt-3 block text-[15px] font-medium group-hover:underline">{p.name}</span>
                <span className="text-ash">{formatPrice(p.price)}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p>{mood.line}</p>
            <Link to={`/products?mood=${active}`} className="link font-medium">Shop {mood.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { products } = useShop();
  return (
    <>
      <Hero />
      <WashStory />
      <Turn />
      <Cloth />
      <Weights />
      <Trust />
      <Price />
      <Generations />
      <Moods />
      <section className="page py-16 lg:py-24">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <h2 className="t-h2">Start with one.</h2>
          <Link to="/products" className="link font-medium">See all {products.length} pieces</Link>
        </div>
        <ProductGrid products={products.filter((p) => p.featured)} />
      </section>
      <section className="border-t border-line bg-paper">
        <div className="page grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="t-h2">Be here for the next chapter.</h2>
            <p className="mt-3 max-w-md text-stone">Join the list and we’ll write when new pieces are ready.</p>
          </div>
          <div className="max-w-lg lg:ml-auto lg:w-full"><WaitlistForm /></div>
        </div>
      </section>
    </>
  );
}
