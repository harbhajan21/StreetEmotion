import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { ProductGrid } from '../components/ProductCard';
import SizePicker from '../components/SizePicker';
import { formatPrice, useShop } from '../context/ShopContext';
import { BRAND } from '../data/brand';
import { categoryLabel, fitLabel, moodLabel } from '../data/catalog';

function Section({ title, open, children }) {
  return (
    <details className="group border-b border-line" open={open}>
      <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
        {title}<span className="text-xl font-normal group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div className="space-y-2 pb-5 text-stone">{children}</div>
    </details>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart, canAdd, wishlist, toggleWishlist, setPanel } = useShop();
  const product = products.find((p) => p.id === id);
  const [size, setSize] = useState('');
  const [image, setImage] = useState(0);

  useEffect(() => { setSize(''); setImage(0); }, [id]);

  if (!product) {
    return (
      <div className="page py-28">
        <h1 className="t-h1">We don’t have that one</h1>
        <p className="mb-8 mt-4 text-stone">It may have been removed from the shop.</p>
        <Link to="/products" className="btn-ink">Shop all</Link>
      </div>
    );
  }

  const saved = wishlist.includes(product.id);
  const available = canAdd(product.id);
  const pairs = products.filter((p) => p.id !== product.id && p.style !== product.style)
    .sort((a, b) => Number(b.mood === product.mood) - Number(a.mood === product.mood)).slice(0, 4);
  const label = !available ? 'No more in stock' : size ? 'Add to bag' : 'Choose a size';

  return (
    <div className="pb-28 lg:pb-0">
      <div className="page grid gap-8 pt-4 lg:grid-cols-12 lg:gap-14 lg:pt-8">
        <div className="-mx-4 sm:mx-0 lg:col-span-7">
          <img src={product.images[image]} alt={`${product.name} in ${product.color}`} className="aspect-[4/5] w-full rounded-none bg-line sm:rounded lg:max-h-[780px] object-cover" />
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-3 px-4 sm:px-0">
              {product.images.map((src, i) => (
                <button key={src} type="button" onClick={() => setImage(i)} aria-label={`Photo ${i + 1}`} aria-pressed={image === i} className={`w-20 rounded border ${image === i ? 'border-ink' : 'border-transparent'}`}>
                  <img src={src} alt="" className="aspect-[3/4] w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start lg:pb-16">
          <nav className="mb-4 text-sm text-stone" aria-label="Breadcrumb">
            <Link to="/products" className="hover:text-ink">Shop</Link> / <Link to={`/products?style=${product.style}`} className="hover:text-ink">{categoryLabel(product.style)}</Link>
          </nav>
          <h1 className="t-h1">{product.name}</h1>
          <p className="mt-2 text-lg font-medium">{formatPrice(product.price)}</p>
          <p className="mt-5 max-w-prose">{product.description}</p>

          <dl className="my-7 grid grid-cols-3 border-y border-line">
            {[['Weight', product.gsm || '–'], ['Fit', fitLabel(product.fit)], ['Mood', moodLabel(product.mood)]].map(([k, v], i) => (
              <div key={k} className={`py-4 ${i ? 'border-l border-line pl-4' : ''}`}><dt className="text-sm text-stone">{k}</dt><dd className="mt-0.5 font-medium">{v}</dd></div>
            ))}
          </dl>

          <SizePicker sizes={product.sizes} value={size} onChange={setSize} onGuide={() => setPanel('size')} />
          <div className="mt-4 hidden gap-2 lg:flex">
            <button type="button" className="btn-ink flex-grow" disabled={!size || !available} onClick={() => addToCart(product, size)}>{label}</button>
            <button type="button" className="btn-line !px-4" onClick={() => toggleWishlist(product.id)} aria-pressed={saved} aria-label="Save to wishlist"><Heart size={20} fill={saved ? 'currentColor' : 'none'} /></button>
          </div>

          <div className="mt-8 border-t border-line">
            <Section title="Details" open>
              <p>{product.fabric}. {product.color}.</p>
              <ul className="list-disc pl-5">{product.details.map((d) => <li key={d}>{d}</li>)}</ul>
            </Section>
            <Section title="Make it last">
              <ul className="list-disc pl-5">
                <li>Turn it inside out and wash cold with similar colours.</li>
                <li>Skip the bleach and go easy on detergent.</li>
                <li>Dry it in the shade. Heat and direct sun speed up fading.</li>
                <li>Always follow the care label if it says something different.</li>
              </ul>
            </Section>
            <Section title="Shipping and returns">
              <p>Shipping is {formatPrice(BRAND.shippingFee)}, and free over {formatPrice(BRAND.freeShippingOver)}.</p>
              <p><Link to="/refund" className="link">Read the returns policy</Link></p>
            </Section>
          </div>
        </div>
      </div>

      <section className="page py-16 lg:py-20">
        <h2 className="t-h2 mb-6">Wear it with</h2>
        <ProductGrid products={pairs} />
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-bone p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <button
          type="button"
          className="btn-ink flex-grow"
          disabled={!available}
          onClick={() => {
            if (size) addToCart(product, size);
            else document.querySelector('fieldset')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }}
        >
          {label}
        </button>
        <button type="button" className="btn-line !px-4" onClick={() => toggleWishlist(product.id)} aria-pressed={saved} aria-label="Save to wishlist"><Heart size={20} fill={saved ? 'currentColor' : 'none'} /></button>
      </div>
    </div>
  );
}
