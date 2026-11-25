import React from 'react';
import { Link } from 'react-router-dom';
import { Package, RotateCcw, Ruler } from 'lucide-react';
import mark from '../assets/logo-mark.webp';
import { formatPrice } from '../context/ShopContext';
import { BRAND } from '../data/brand';
import { CATEGORIES } from '../data/catalog';

const COLUMNS = [
  ['Shop', [['Shop all', '/products'], ...CATEGORIES.map((c) => [c.label, `/products?style=${c.id}`])]],
  ['Help', [['Contact', '/contact'], ['Returns', '/refund'], ['Your orders', '/profile'], ['Wishlist', '/wishlist']]],
  ['Street Emotion', [['Our story', '/about'], ['Join the list', '/signup']]],
];

const FACTS = [
  [Package, `Free shipping over ${formatPrice(BRAND.freeShippingOver)}`, '/products'],
  [RotateCcw, '14-day returns on eligible items', '/refund'],
  [Ruler, 'Fabric and fit on every product', '/products'],
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="border-b border-line">
        <ul className="page grid sm:grid-cols-3">
          {FACTS.map(([Icon, text, to], i) => (
            <li key={text} className={i ? 'border-t border-line sm:border-l sm:border-t-0 sm:pl-6' : ''}>
              <Link to={to} className="flex min-h-[60px] text-[15px] items-center gap-3 font-medium hover:underline"><Icon size={20} className="flex-shrink-0" />{text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="page grid gap-12 py-12 lg:grid-cols-12 lg:py-14">
        <div className="lg:col-span-5">
          <img src={mark} alt="Street Emotion logo" width="64" height="64" className="h-12 w-12 rounded-full object-contain" loading="lazy" />
          <p className="t-h3 mt-5 max-w-sm">If something doesn’t last the way it should, we want to hear it from you first.</p>
          <Link to="/contact" className="link mt-4 inline-flex min-h-[44px] items-center font-medium">Talk to us</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
          {COLUMNS.map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h2 className="mb-2 text-[15px] font-semibold">{heading}</h2>
              {links.map(([label, to]) => <Link key={label} to={to} className="block py-1.5 text-[15px] text-stone hover:text-ink hover:underline">{label}</Link>)}
              {heading === 'Street Emotion' && BRAND.instagram && <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="block py-1.5 text-[15px] text-stone hover:text-ink hover:underline">Instagram</a>}
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="page flex flex-wrap justify-between gap-x-6 gap-y-1 py-5 text-sm text-stone">
          <p>© {new Date().getFullYear()} Street Emotion</p>
          <p>Men’s streetwear, priced in Indian rupees</p>
        </div>
      </div>
    </footer>
  );
}
