import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.webp';
import { formatPrice, useShop } from '../context/ShopContext';
import { BRAND } from '../data/brand';

export default function Hero() {
  const { products } = useShop();
  const lowest = Math.min(...products.map((p) => p.price));
  const heaviest = Math.max(...products.map((p) => (/GSM/.test(p.gsm) ? parseInt(p.gsm, 10) : 0)));
  const facts = [
    [`Up to ${heaviest} GSM`, 'Weight listed, so you can compare'],
    [`From ${formatPrice(lowest)}`, 'Plain prices, tax included'],
    ['Free shipping', `On orders over ${formatPrice(BRAND.freeShippingOver)}`],
  ];

  return (
    <section className="relative -mt-[65px] flex min-h-[max(600px,calc(100svh-32px))] flex-col overflow-hidden bg-ink text-paper">
      {/* Desktop: the photo is a full-height square, so the whole figure shows and nothing is enlarged much */}
      <div className="hero-photo absolute inset-x-0 top-0 h-[78%] lg:bottom-[83px] lg:left-auto lg:h-auto lg:w-[min(64%,max(517px,calc(100svh-115px)))]">
        <img src={hero} alt="Man in an oversized black hoodie and black cargo pants standing against raw concrete" className="h-full w-full rounded-none object-cover object-[46%_20%] lg:object-center" fetchpriority="high" />
      </div>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/85 to-transparent lg:h-28 lg:from-ink/75" />

      <div className="page relative flex flex-grow flex-col justify-end pb-8 pt-24 lg:justify-center lg:pb-10">
        <div className="hero-in max-w-xl">
          <h1 className="t-hero">Made to be kept.</h1>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#DAD7D0] lg:mt-5 lg:text-lg">Men’s streetwear in heavyweight cloth, at the lowest price we can honestly offer.</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 lg:mt-8">
            <Link to="/products" className="btn bg-paper text-ink hover:bg-lime">Shop the collection</Link>
            <a href="#story" className="link inline-flex min-h-[44px] items-center font-medium">Why we started</a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-paper/20">
        <ul className="page grid grid-cols-3">
          {facts.map(([title, text], i) => (
            <li key={title} className={`py-4 lg:py-5 ${i ? 'border-l border-paper/20 pl-3 sm:pl-6' : 'pr-2'}`}>
              <p className="text-[13px] font-semibold sm:text-base">{title}</p>
              <p className="hidden text-sm text-[#C9C6BF] sm:block">{text}</p>
              {i === 2 && <p className="text-xs text-[#C9C6BF] sm:hidden">Over {formatPrice(BRAND.freeShippingOver)}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
