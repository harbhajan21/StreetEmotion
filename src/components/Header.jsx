import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react';
import { formatPrice, useShop } from '../context/ShopContext';
import mark from '../assets/logo-mark.webp';
import { BRAND } from '../data/brand';
import { CATEGORIES, MOODS } from '../data/catalog';
import Sheet from './Sheet';

export default function Header() {
  const { count, wishlist, panel, setPanel } = useShop();
  const { pathname, search } = useLocation();
  const style = new URLSearchParams(search).get('style');

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPanel('search');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setPanel]);

  // On the home page the header floats over the hero until it has scrolled past
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const check = () => setPastHero(window.scrollY > window.innerHeight - 160);
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [pathname]);
  const over = (pathname === '/' || pathname === '/home') && !pastHero;

  const close = () => setPanel(null);
  const nav = [{ id: null, label: 'Shop all' }, ...CATEGORIES];

  return (
    <>
      <p className="no-print bg-ink px-4 py-1.5 text-center text-[13px] text-paper">
        Free shipping on orders over {formatPrice(BRAND.freeShippingOver)}
      </p>

      <header className={`sticky top-0 z-40 border-b transition-colors duration-300 ${over ? 'border-transparent text-paper' : 'border-line bg-bone'}`}>
        <div className="page grid h-16 grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center">
            <button type="button" className="icon-btn -ml-3 lg:hidden" onClick={() => setPanel('menu')} aria-label="Open menu"><Menu size={24} /></button>
            <button type="button" className="icon-btn lg:hidden" onClick={() => setPanel('search')} aria-label="Search"><Search size={21} /></button>
            <nav className="hidden gap-6 text-sm font-medium lg:flex" aria-label="Shop">
              {nav.map((item) => {
                const on = pathname === '/products' && style === item.id;
                return (
                  <Link
                    key={item.label}
                    to={item.id ? `/products?style=${item.id}` : '/products'}
                    aria-current={on ? 'page' : undefined}
                    className={`border-b-2 py-1 transition-[border-color] hover:border-current ${on ? 'border-ink' : 'border-transparent'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <Link to="/" className="flex items-center gap-1.5 sm:gap-2.5" aria-label="Street Emotion home">
            <img src={mark} alt="" width="40" height="40" className="h-7 w-7 flex-shrink-0 rounded-full bg-ink object-cover sm:h-10 sm:w-10" />
            <span className="wordmark whitespace-nowrap text-[11px] min-[360px]:text-xs min-[400px]:text-sm sm:text-base lg:text-[17px]">Street Emotion</span>
          </Link>

          <div className="flex items-center justify-end">
            <button type="button" className="icon-btn hidden lg:inline-flex" onClick={() => setPanel('search')} aria-label="Search"><Search size={21} /></button>
            <Link to="/profile" className="icon-btn hidden lg:inline-flex" aria-label="Account"><User size={21} /></Link>
            <Link to="/wishlist" className="icon-btn relative max-[359px]:hidden" aria-label={`Wishlist, ${wishlist.length} items`}>
              <Heart size={21} fill={wishlist.length ? 'currentColor' : 'none'} />
            </Link>
            <button type="button" className="icon-btn relative -mr-2.5" onClick={() => setPanel('bag')} aria-label={`Bag, ${count} items`}>
              <ShoppingBag size={21} />
              {count > 0 && (
                <span className="absolute right-0.5 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-lime px-1 text-[11px] font-bold text-ink">{count}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      <Sheet open={panel === 'menu'} onClose={close} title="Menu" side="left">
        <div className="flex flex-grow flex-col justify-between overflow-y-auto p-5 sm:p-6">
          <nav aria-label="Menu">
            {nav.map((item) => (
              <Link key={item.label} to={item.id ? `/products?style=${item.id}` : '/products'} onClick={close} className="t-h2 block py-2">
                {item.label}
              </Link>
            ))}
            <p className="mb-3 mt-9 text-sm text-stone">Shop by mood</p>
            <div className="flex flex-wrap gap-2">
              {MOODS.map((m) => <Link key={m.id} to={`/products?mood=${m.id}`} onClick={close} className="chip">{m.label}</Link>)}
            </div>
          </nav>
          <div className="mt-10 grid grid-cols-2 gap-x-4 border-t border-line pt-4">
            {[['Account', '/profile'], ['Wishlist', '/wishlist'], ['Our story', '/about'], ['Contact', '/contact'], ['Returns', '/refund'], ['Join the list', '/signup']].map(([label, to]) => (
              <Link key={to} to={to} onClick={close} className="py-2.5">{label}</Link>
            ))}
          </div>
        </div>
      </Sheet>
    </>
  );
}
