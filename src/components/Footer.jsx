import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function Footer() {
 const [subscribed, setSubscribed] = useState(false);
 const [email, setEmail] = useState('');
 const { setComingSoonOpen } = useContext(ShopContext);

 const handleSubscribe = (e) => {
 e.preventDefault();
 if (email.trim()) {
 setSubscribed(true);
 setEmail('');
 }
 };

  return (
    <footer className="w-full px-4 md:px-margin-desktop py-16 flex flex-col gap-12 bg-surface-dim border-t border-structure-gray shadow-[inset_0_20px_20px_-20px_rgba(0,0,0,0.05)] text-on-surface">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-structure-gray pb-12">
        {/* Brand & Newsletter */}
        <div className="flex flex-col gap-6 max-w-lg w-full">
          <div className="font-display-xl text-[40px] md:text-[56px] text-on-surface leading-[0.9] tracking-tighter uppercase font-extrabold mb-2">
            STREET<br/><span className="text-brand-accent">EMOTION</span>
          </div>
          <p className="font-body-lg text-sm text-on-surface-variant max-w-sm">
            {subscribed ? "YOU ARE IN THE NETWORK. ACCESS GRANTED." : "JOIN THE NETWORK. GET EARLY ACCESS TO DROPS & EXCLUSIVE OFFERS."}
          </p>
          {!subscribed && (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full mt-2">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-structure-gray/20 border border-structure-gray font-mono-ui text-sm px-5 py-4 focus:ring-0 focus:border-brand-accent placeholder:text-on-surface-variant text-on-surface transition-all outline-none" 
                placeholder="ENTER EMAIL ADDRESS" 
              />
              <button type="submit" className="bg-brand-accent text-on-surface px-8 py-4 font-label-caps text-sm tracking-widest font-bold hover:brightness-110 transition-all uppercase whitespace-nowrap active:scale-[0.98]">
                SIGN UP
              </button>
            </form>
          )}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 w-full lg:w-auto text-sm font-body-md text-on-surface">
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-xs tracking-widest text-on-surface-variant mb-1 font-bold">SHOP</h4>
            <Link className="hover:text-brand-accent transition-all" to="/products?category=MEN">MEN</Link>
            <Link className="hover:text-brand-accent transition-all" to="#" onClick={(e) => { e.preventDefault(); setComingSoonOpen(true); }}>WOMEN</Link>
            <Link className="hover:text-brand-accent transition-all" to="#" onClick={(e) => { e.preventDefault(); setComingSoonOpen(true); }}>ACCESSORIES</Link>
            <Link className="hover:text-brand-accent transition-all" to="/products">NEW RELEASES</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-xs tracking-widest text-on-surface-variant mb-1 font-bold">HELP</h4>
            <Link className="hover:text-brand-accent transition-all" to="/contact">FAQ</Link>
            <Link className="hover:text-brand-accent transition-all" to="/refund">DELIVERY & RETURNS</Link>
            <Link className="hover:text-brand-accent transition-all" to="/contact">TRACK ORDER</Link>
            <Link className="hover:text-brand-accent transition-all" to="/contact">CONTACT US</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-xs tracking-widest text-on-surface-variant mb-1 font-bold">ABOUT</h4>
            <Link className="hover:text-brand-accent transition-all" to="/about">OUR STORY</Link>
            <Link className="hover:text-brand-accent transition-all" to="/refund">PRIVACY POLICY</Link>
            <Link className="hover:text-brand-accent transition-all" to="/refund">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-on-surface-variant font-mono-ui text-xs">
        <div className="flex items-center gap-6">
          <p>© {new Date().getFullYear()} STREET EMOTION. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            {/* Social Icons mock */}
            <a href="#" className="hover:text-brand-accent transition-colors"><span className="material-symbols-outlined text-[20px]">photo_camera</span></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><span className="material-symbols-outlined text-[20px]">smart_display</span></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><span className="material-symbols-outlined text-[20px]">alternate_email</span></a>
          </div>
          <div className="h-4 w-px bg-structure-gray/50"></div>
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-[24px]">verified_user</span>
            <span className="font-label-caps text-[10px] tracking-widest font-bold">SECURE CHECKOUT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
