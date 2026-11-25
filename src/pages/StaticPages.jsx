import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.webp';
import { BRAND } from '../data/brand';

export function AboutUs() {
  return (
    <>
      <div className="page pb-10 pt-8 lg:pt-12"><h1 className="t-h1 max-w-3xl">We’d rather you bought it once</h1></div>
      <div className="page grid gap-10 pb-20 lg:grid-cols-12 lg:gap-16">
        <img src={hero} alt="Man in an oversized black hoodie and cargo pants against raw concrete" className="aspect-[4/5] w-full object-cover lg:col-span-7 lg:max-h-[680px]" />
        <div className="space-y-5 text-[17px] lg:col-span-5 lg:self-center">
          <p>Street Emotion makes quality streetwear for men, at the lowest price we can honestly offer.</p>
          <p>We started because too many clothes look good for a week, then fade, twist and end up in a drawer. We want ours to stay in the rotation.</p>
          <p>Some of you are 22. Some of you are 42. We make one range for both, and tell you the fabric and fit of every piece so you can judge it yourself.</p>
          <Link to="/products" className="btn-ink">Shop all</Link>
        </div>
      </div>
    </>
  );
}

export function ContactUs() {
  const { supportEmail, phone, instagram } = BRAND;
  const none = !supportEmail && !phone && !instagram;
  return (
    <div className="page pb-24 pt-8 lg:pt-12">
      <h1 className="t-h1">Contact</h1>
      <div className="mt-8 max-w-xl space-y-4">
        {none && <p>Our contact details will be here soon. Until then, join the list and you’ll hear from us first.</p>}
        {supportEmail && <p>Email: <a className="link" href={`mailto:${supportEmail}`}>{supportEmail}</a></p>}
        {phone && <p>Phone: <a className="link" href={`tel:${phone}`}>{phone}</a></p>}
        {instagram && <p><a className="link" href={instagram} target="_blank" rel="noreferrer">Instagram</a></p>}
        <Link to={none ? '/signup' : '/refund'} className="btn-ink">{none ? 'Join the list' : 'Returns policy'}</Link>
      </div>
    </div>
  );
}

const POLICY = [
  ['Return window', ['You have 14 days from delivery to ask for a return. After that the sale is final.']],
  ['Condition', ['Items must be unworn and unused, with tags, in the original packaging.', 'Anything showing wear, including fragrance, make-up stains or pet hair, will be sent back to you at your cost.']],
  ['What can’t be returned', ['Limited edition drop items, underwear and swimwear, customised pieces, and sale items.']],
  ['How it works', ['Contact us with your order number. Once we receive the item we’ll inspect it within 72 hours.', 'Approved refunds go back to your original payment method within 5 to 10 business days.']],
];

export function RefundPolicy() {
  return (
    <div className="page pb-24 pt-8 lg:pt-12">
      <h1 className="t-h1">Returns</h1>
      <dl className="mt-10 border-t border-line">
        {POLICY.map(([title, lines]) => (
          <div key={title} className="grid gap-3 border-b border-line py-7 lg:grid-cols-12">
            <dt className="t-h3 lg:col-span-4">{title}</dt>
            <dd className="max-w-prose space-y-3 lg:col-span-8">{lines.map((l) => <p key={l}>{l}</p>)}</dd>
          </div>
        ))}
      </dl>
      <Link to="/contact" className="btn-ink mt-8">Contact us</Link>
    </div>
  );
}
