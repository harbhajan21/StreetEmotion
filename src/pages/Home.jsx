import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import boysStreetwear from '../assets/boys_streetwear.png';
import girlsStreetwear from '../assets/girls_streetwear.png';
import accessoriesImage from '../assets/accessories_category.png';

export default function Home() {
 const { products, addToCart, setComingSoonOpen } = useContext(ShopContext);
 const [email, setEmail] = useState('');
 const [subscribed, setSubscribed] = useState(false);

 // Filter out the first 4 products for the preview grid
 const previewProducts = products.slice(0, 4);

 const handleSubscribe = (e) => {
 e.preventDefault();
 if (email.trim()) {
 setSubscribed(true);
 setEmail('');
 }
 };

 return (
 <div className="min-h-screen bg-background">
 {/* Hero Section: Asymmetric Grid */}
 <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-structure-gray h-auto lg:h-[90vh]">
 {/* Left Editorial Text */}
 <div className="lg:col-span-6 p-6 md:p-margin-desktop flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-structure-gray bg-surface-dim shadow-[inset_0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden min-h-[450px] lg:min-h-0">
 <div className="absolute top-0 left-0 w-full h-full opacity-10 grid-lines pointer-events-none"></div>
 <div className="relative z-10">
 <h1 className="font-display-xl text-[54px] sm:text-[72px] md:text-[84px] lg:text-[80px] xl:text-[96px] 2xl:text-[110px] text-pure-white uppercase leading-[0.85] tracking-tighter mb-6 font-extrabold">
 STREET<br />
 <span className="text-brand-accent">EMOTION</span>
 </h1>
 <div className="border-t border-b border-structure-gray py-4 mb-6">
 <span className="font-label-caps text-label-caps text-brand-accent block tracking-[0.25em] mb-1">
 STREET EMOTION // ARCHIVE SPECIMENS
 </span>
 <p className="font-mono-ui text-[11px] text-on-surface-variant uppercase tracking-wider">
 RAW SEAMS / HEAVYWEIGHT / ZERO RADII
 </p>
 </div>
 <p className="font-body-lg text-body-lg text-on-surface mb-8 max-w-sm">
 Raw seams, heavyweight fabrics, and the weight of existence. Our first drop explores the intersection of volume and vulnerability.
 </p>
 <Link 
 to="/products" 
 className="inline-flex items-center gap-3 bg-brand-accent text-void-black font-label-caps text-label-caps px-10 py-5 uppercase font-bold hover:bg-pure-white transition-all active:scale-95 group"
 >
 SHOP THE DROP
 <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
 </Link>
 </div>
 </div>

 {/* Center Large Image */}
 <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-structure-gray relative group overflow-hidden h-[400px] lg:h-full">
 <img 
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 hover:-0" 
 alt="Colossal heavyweight black t-shirt product photo" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdq1SofQAnY9fR9edwEg0xG6GSxuOaMY1_1rWNxA-h4xbi1GaexzZLLpcJeUm6RfI_LvclAPz8ngKkIQtsUOFPaTwBfmUdHI7WfMPGGI782A134l2ymL9nTAgl_OYATeYOBgUdzFQxkvQ-2LWYIhnUGvrR0Tv_jwBFWYPI0dX64Q3xfI7vWg-6i4L1T_BRlNKHya5afEABWT6M7quQKOlBTu3K6k2T8Yh1kf5HCeCFHqPDpilLu-ddGfeRXQKQn_cOlVaf5CWbUlI"
 />
 <div className="absolute inset-0 bg-void-black/20 group-hover:bg-void-black/0 transition-all"></div>
 </div>

 {/* Right Column Small Images */}
 <div className="lg:col-span-3 grid grid-rows-2 h-full">
 <div className="border-b border-structure-gray relative group overflow-hidden h-[250px] lg:h-auto">
 <img 
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 " 
 alt="Streetwear fabric details heavyweight cotton stitch" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEClwvz2nbCK1ZzY5FUDYJs4shEh554fg1V7tSeoTStIY8dRxMCuUwCLvvrf1QN5FrBasqDNFz417WyVBOoeZnQmkJPTXijm4btF_KAyhyW9aP4DtylKmVzCt5APYQ002Zhu_91pCMFpZl7J6zrVOTpFg7YvjNStetxpO0D6KxKtEMh2qeunIM8vX5HuQngdAWlDxTtSIG-ArkfHsIMSJbHvJ1ZtpskzUtXmqHb3WlASxsSZfdfLhrIRKivJf-vlyNqMIz2Y7yfNE"
 />
 </div>
 <div className="relative group overflow-hidden h-[250px] lg:h-auto">
 <img 
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 " 
 alt="Person in graphic tee standing on concrete staircase" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuByg782hcUzpeAhnVHOD13eN1H6gJnEvWOiCzH_T95KmXFVHW9xRmGWd_FnMFzTY5utyCPDoCDpxG1AiiHghWEPe7ybg1AkjQohpz1d2oxhkmysMmgdjHeLNySpXucmyXs9tX673IqjECQPyXqpuiLtqqJDI65ZJ4_sa65SAOniwJbrQOSkWLkxjOI7TcQUXHD30xJv0_B27eBLc67AN4uQlDw_mOODU3X_2bgO33CWpmwqGsnHiS_VznlGGmOvT0AtAUWO_wTXkVA"
 />
 <div className="absolute bottom-4 right-4 bg-brand-accent text-void-black px-4 py-1 font-mono-ui text-[10px] font-bold">
 NEW SEASON 26
 </div>
 </div>
 </div>
 </section>



 {/* Category Matrix */}
 <section className="grid grid-cols-1 md:grid-cols-5 border-b border-structure-gray">
 <Link 
 to="/products?category=MEN" 
 className="group relative h-[350px] md:h-[500px] border-b md:border-b-0 md:border-r border-structure-gray overflow-hidden flex items-end p-6 md:p-8"
 >
 <img 
 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-0" 
 alt="Men's category streetwear layout" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpMyfacmXdgmtRx9aKy9XQUDRDfUm2c0BE0iVStmCpINeVKlp_8pMJTsicwQFbdSll8QeH6tJfZ9i0RNf_YKYwZOV3_n86nU2OdECV7k8eTWQeesKS9dl88GgpD8DsXdh6qAUkkNx5i_BubzQRswFor_R3OejUwKhkeAZjpUtzyyQKXUc-Ga2Uk-AdH5HCu726hCThypUYDJLorcEfA5y_-T1WDoH8B7xBXIYJhkn1r95a-85NwTl5wFY2TdJ3WitMaR81PzwyhrQ"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-80"></div>
 <div className="relative z-10 flex flex-col gap-2">
 <span className="font-label-caps text-label-caps text-brand-accent">01</span>
 <h2 className="font-display-lg text-[32px] md:text-[40px] text-pure-white leading-none">MEN</h2>
 <span className="font-mono-ui text-[11px] text-pure-white/60 uppercase group-hover:text-brand-accent transition-colors">View Collection →</span>
 </div>
 </Link>
 <Link 
 to="#" onClick={(e) => { e.preventDefault(); setComingSoonOpen(true); }} 
 className="group relative h-[350px] md:h-[500px] border-b md:border-b-0 md:border-r border-structure-gray overflow-hidden flex items-end p-6 md:p-8"
 >
 <img 
 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-0" 
 alt="Women's category graphic design layout" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXef0wDUqezmO-26YOIEjAz5XPgNJEbXXJxPUschc9IACcW_khSmIO4O8BBVlPQp1eM4XvDCboNTc1HrdVoKVrqLftY1AaSdNfxMrCVkxeimV2EFCly138osbufbB_1ouP-fSPGSm9OuOK2nkPJQIuUYdDXPzVDsnzkW1DgzZFv-RxBViHHLzmkOq46XlOS1lgE0ROV-eL-rkr3Y5XfYfz_Cu-jS8fBE3LgdJdZLjGChWdqU3UTsj-aJJdoKV5qmddiBgoZW8itjQ"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-80"></div>
 <div className="relative z-10 flex flex-col gap-2">
 <span className="font-label-caps text-label-caps text-brand-accent">02</span>
 <h2 className="font-display-lg text-[32px] md:text-[40px] text-pure-white leading-none">WOMEN</h2>
 <span className="font-mono-ui text-[11px] text-pure-white/60 uppercase group-hover:text-brand-accent transition-colors">View Collection →</span>
 </div>
 </Link>
 <Link 
 to="#" onClick={(e) => { e.preventDefault(); setComingSoonOpen(true); }} 
 className="group relative h-[350px] md:h-[500px] border-b md:border-b-0 md:border-r border-structure-gray overflow-hidden flex items-end p-6 md:p-8"
 >
 <img 
 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-0" 
 alt="Boys category flat-lay style layout" 
 src={boysStreetwear}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-80"></div>
 <div className="relative z-10 flex flex-col gap-2">
 <span className="font-label-caps text-label-caps text-brand-accent">03</span>
 <h2 className="font-display-lg text-[32px] md:text-[40px] text-pure-white leading-none">BOYS</h2>
 <span className="font-mono-ui text-[11px] text-pure-white/60 uppercase group-hover:text-brand-accent transition-colors">View Collection →</span>
 </div>
 </Link>
 <Link 
 to="#" onClick={(e) => { e.preventDefault(); setComingSoonOpen(true); }} 
 className="group relative h-[350px] md:h-[500px] border-b md:border-b-0 md:border-r border-structure-gray overflow-hidden flex items-end p-6 md:p-8"
 >
 <img 
 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-0" 
 alt="Girls category active styling layout" 
 src={girlsStreetwear}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-80"></div>
 <div className="relative z-10 flex flex-col gap-2">
 <span className="font-label-caps text-label-caps text-brand-accent">04</span>
 <h2 className="font-display-lg text-[32px] md:text-[40px] text-pure-white leading-none">GIRLS</h2>
 <span className="font-mono-ui text-[11px] text-pure-white/60 uppercase group-hover:text-brand-accent transition-colors">View Collection →</span>
 </div>
 </Link>
        <Link 
          to="#" onClick={(e) => { e.preventDefault(); setComingSoonOpen(true); }} 
          className="group relative h-[350px] md:h-[500px] overflow-hidden flex items-end p-6 md:p-8"
        >
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 hover:-0" 
            alt="Accessories category neon street styling" 
            src={accessoriesImage}
          />
 <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-80"></div>
 <div className="relative z-10 flex flex-col gap-2">
 <span className="font-label-caps text-label-caps text-brand-accent">05</span>
 <h2 className="font-display-lg text-[32px] md:text-[40px] text-pure-white leading-none">ACCESSORIES</h2>
 <span className="font-mono-ui text-[11px] text-pure-white/60 uppercase group-hover:text-brand-accent transition-colors">View Collection →</span>
 </div>
 </Link>
 </section>

 {/* Product Preview Grid */}
 <section className="px-4 md:px-margin-desktop py-stack-lg bg-background">
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
 <div>
 <span className="font-label-caps text-label-caps text-brand-accent block mb-2 underline">CURATED SELECTION</span>
 <h2 className="font-headline-lg text-3xl md:text-headline-lg text-pure-white uppercase">THE EMOTION SERIES</h2>
 </div>
 <Link to="/products" className="font-mono-ui text-mono-ui uppercase text-pure-white hover:text-brand-accent transition-colors">
 Explore All Products ↗
 </Link>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter bg-structure-gray border border-structure-gray">
 {previewProducts.map(product => (
 <div key={product.id} className="bg-background group flex flex-col justify-between">
 <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-[3/4] border-b border-structure-gray block">
 <img 
 className="w-full h-full object-cover transition-all duration-500 group-hover:-0 group-hover:scale-105" 
 alt={product.name} 
 src={product.image}
 />
 <div className="absolute top-4 left-4">
 <span className="bg-brand-accent text-void-black font-mono-ui text-[10px] px-2 py-1 font-bold">
 {product.emotion}
 </span>
 </div>
 </Link>
 <div className="p-6">
 <div className="flex justify-between items-start mb-2">
 <Link to={`/product/${product.id}`} className="font-subheading text-subheading text-pure-white uppercase hover:text-brand-accent transition-colors">
 {product.name}
 </Link>
 <span className="font-mono-ui text-mono-ui text-brand-accent">${product.price.toFixed(2)}</span>
 </div>
 <p className="font-mono-ui text-[12px] text-on-surface-variant mb-6 uppercase tracking-widest">{product.specs}</p>
 <button 
 onClick={() => addToCart(product, product.sizes[0] || "M")}
 className="w-full border border-structure-gray py-3 font-label-caps text-label-caps text-pure-white hover:bg-pure-white hover:text-void-black transition-all uppercase font-bold"
 >
 Quick Add
 </button>
 </div>
 </div>
 ))}
 </div>
 </section>

      {/* Banner & Features Section */}
      <div className="flex flex-col w-full">
        {/* Yellow Banner */}
        <section className="bg-[#FCE34D] py-20 px-6 text-center text-[#181818] flex flex-col items-center justify-center border-b border-structure-gray">
          <h2 className="font-display-xl text-[40px] md:text-[64px] font-bold mb-4 tracking-tight">JOIN THE EMOTION</h2>
          <p className="font-mono-ui text-sm uppercase font-bold mb-1">Buy 2 &amp; Get 10% OFF.</p>
          <p className="font-mono-ui text-sm uppercase mb-10">Use code <span className="font-bold">POP10</span></p>
          <div className="flex gap-4">
            <Link to="#" onClick={(e) => { e.preventDefault(); setComingSoonOpen(true); }} className="bg-[#181818] text-[#F5F5F5] px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all">Shop Womens</Link>
            <Link to="/products?category=MEN" className="border border-[#181818] text-[#181818] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#181818] hover:text-[#F5F5F5] transition-all">Shop Mens</Link>
          </div>
        </section>

        {/* 3 Features Section */}
        <section className="bg-background py-24 px-6 md:px-margin-desktop flex flex-col md:flex-row justify-center gap-16 md:gap-32 text-center text-on-surface">
          {/* Feature 1 */}
          <div className="flex flex-col items-center max-w-[250px]">
            <div className="w-24 h-24 rounded-full bg-[#FCE34D]/10 flex items-center justify-center mb-8 relative">
              <span className="material-symbols-outlined text-[56px] text-on-surface absolute z-10">workspace_premium</span>
              <div className="w-12 h-12 bg-[#FCE34D] rounded-full absolute bottom-2 right-2 opacity-80"></div>
            </div>
            <h3 className="font-bold text-xl mb-3 font-display-lg">Absolutely Premium</h3>
            <p className="text-sm text-on-surface-variant font-mono-ui">No cheap stuff, Period.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center max-w-[250px]">
            <div className="w-24 h-24 rounded-full bg-[#FCE34D]/10 flex items-center justify-center mb-8 relative">
              <span className="material-symbols-outlined text-[56px] text-on-surface absolute z-10">inventory_2</span>
              <div className="w-12 h-12 bg-[#FCE34D] rounded-full absolute bottom-2 right-2 opacity-80"></div>
            </div>
            <h3 className="font-bold text-xl mb-3 font-display-lg">Recycled Packing</h3>
            <p className="text-sm text-on-surface-variant font-mono-ui">We use only the recycled material for packing.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center max-w-[250px]">
            <div className="w-24 h-24 rounded-full bg-[#FCE34D]/10 flex items-center justify-center mb-8 relative">
              <span className="material-symbols-outlined text-[56px] text-on-surface absolute z-10">support_agent</span>
              <div className="w-12 h-12 bg-[#FCE34D] rounded-full absolute bottom-2 right-2 opacity-80"></div>
            </div>
            <h3 className="font-bold text-xl mb-3 font-display-lg">Instant Support</h3>
            <p className="text-sm text-on-surface-variant font-mono-ui mb-4">We are just a message away.</p>
            <a href="#" className="text-xs font-bold hover:text-brand-accent transition-colors flex items-center gap-1 font-mono-ui uppercase tracking-widest">
              WhatsApp Us <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
 </div>
 );
}
