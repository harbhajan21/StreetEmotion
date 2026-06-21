import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function AboutUs() {
 return (
 <div className="min-h-screen bg-background text-pure-white select-none relative overflow-hidden">
 {/* Noise pattern backdrop simulation */}
 <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:16px_16px]"></div>

 <main className="w-full relative z-10">
 {/* Hero Section: Editorial Headline */}
 <section className="border-b border-structure-gray relative min-h-[500px] md:min-h-[650px] flex flex-col justify-end p-6 md:p-margin-desktop overflow-hidden">
 <div className="absolute inset-0 z-0 opacity-45">
 <img 
 className="w-full h-full object-cover" 
 alt="Street Emotion editorial studio concrete backdrop" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY1ysYKilwX-e85qCnbQsnjaaXdasuYn5sSEpbcO8L6P6Uxbox6Q_1AahoqZqqeWVu3zFN5cbFx4R-kckWqdmF_4VDSqdVSEbCHKyYOrYHT2fYaNYeroT5c5enL1yNvsF4I-0_gbfqzR598OxWyti0-8tX0paczGr0Ve4xpl8gKYymVnz8OZpS_jF-8SIWw_HyvZjWFUhHSVY5r3b1Wcm7C_lfXNZyfREUH0XO51LwRjVYlXssvGzDZab7QKjMDPMovfP8N_lAFoc"
 />
 </div>
 <div className="relative z-10 max-w-4xl">
 <h1 className="font-display-xl text-[48px] md:text-[80px] lg:text-display-xl leading-[0.9] uppercase tracking-tighter text-brand-accent mb-4 font-bold">
 ESTABLISHED <br/>IN CHAOS
 </h1>
 <div className="flex flex-col md:flex-row gap-6 border-t border-structure-gray pt-6 mt-8 font-mono-ui text-xs">
 <p className="uppercase tracking-widest text-pure-white max-w-xs">
 Founded 2024 / Tokyo / London / New York
 </p>
 <p className="uppercase tracking-widest text-on-secondary-container">
 Defined by the friction between concrete and soul.
 </p>
 </div>
 </div>
 </section>

 {/* The Narrative Grid */}
 <section className="grid grid-cols-1 md:grid-cols-12 border-b border-structure-gray min-h-screen">
 {/* Left Column: The Philosophy */}
 <div className="md:col-span-4 border-r border-structure-gray p-6 md:p-margin-desktop flex flex-col justify-between">
 <div className="space-y-6">
 <h2 className="font-syne text-3xl md:text-headline-lg-mobile lg:text-headline-lg uppercase leading-none font-bold">
 EMOTIONAL <br/>CHAOS
 </h2>
 <p className="font-body-lg text-on-background text-sm md:text-base leading-relaxed">
 We don't design for the static world. We design for the movement, the noise, and the raw energy that pulses through the city at 3 AM. Street Emotion is a response to the sanitized perfection of modern fashion. 
 </p>
 <p className="font-body-md text-on-secondary-container text-xs md:text-sm leading-relaxed">
 Every stitch is a rebellion. Every silhouette is an architecture of defiance. We believe that clothing should be as complex and unyielding as the people who wear it.
 </p>
 </div>
 <div className="mt-8">
 <div className="border border-brand-accent p-4 inline-block bg-brand-accent/5">
 <span className="font-mono-ui text-brand-accent uppercase text-[10px] font-bold tracking-widest">
 Core Value 01: Raw Integrity
 </span>
 </div>
 </div>
 </div>

 {/* Middle Column: Visual Anchor */}
 <div className="md:col-span-5 border-r border-structure-gray relative min-h-[400px] md:min-h-0">
 <img 
 className="w-full h-full object-cover brightness-90" 
 alt="Distressed clothing textures and blueprint tags" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJg_RCaOfyODVDKqv1zUN0n3lEG5HzQR0sr1vGtpXJ7tt0gWZ1glt-zBcQ6xufTaInyvUJpSR1qTr4gCZA-XkW0ai3yscewio-xnwEhfHRBNsNgMXTBusmOEU-siWtlK8T3Lpx06wQdmcj_qt7Syca_4LG8yGwDWim5ULJiopGN1vE_3QyWV5OFF1C-DGAWVu1mFe4LzmYc-OpcOo-nLC36dRU7g5eXCH34jVhF112ULbzEtGaNm4uuyBBuxFKb8-vCsh4kdj8O-Q"
 />
 <div className="absolute bottom-0 left-0 bg-brand-accent text-void-black p-6 font-mono-ui text-xs uppercase font-bold tracking-wider">
 HEAVYWEIGHT INTEGRITY
 </div>
 </div>

 {/* Right Column: Details & Accents */}
 <div className="md:col-span-3 p-6 md:p-margin-desktop bg-void-black flex flex-col gap-6 md:gap-10">
 <div className="border-b border-structure-gray pb-4">
 <h3 className="font-mono-ui text-label-caps text-brand-accent mb-2 font-bold">01 / FABRICATION</h3>
 <p className="text-on-surface text-xs md:text-sm">Custom developed 600GSM loopback jersey. Built to survive the friction of the street.</p>
 </div>
 <div className="border-b border-structure-gray pb-4">
 <h3 className="font-mono-ui text-label-caps text-brand-accent mb-2 font-bold">02 / CONSTRUCTION</h3>
 <p className="text-on-surface text-xs md:text-sm">Triple-needle stitching at every stress point. Longevity is our primary aesthetic.</p>
 </div>
 <div className="border-b border-structure-gray pb-4">
 <h3 className="font-mono-ui text-label-caps text-brand-accent mb-2 font-bold">03 / EMOTION</h3>
 <p className="text-on-surface text-xs md:text-sm">Garment-dyed textures that evolve with the wearer. Your history, imprinted on our canvas.</p>
 </div>
 <div className="flex-grow flex items-center justify-center pt-8">
 <div className="writing-mode-vertical text-center font-display-xl text-[64px] md:text-[80px] leading-none text-structure-gray opacity-30 uppercase tracking-tighter select-none font-bold">
 UTILITY
 </div>
 </div>
 </div>
 </section>

 {/* Large Quote Block */}
 <section className="p-6 md:p-margin-desktop bg-brand-accent text-void-black">
 <blockquote className="font-display-lg text-[28px] md:text-[60px] lg:text-[80px] leading-[0.9] uppercase tracking-tighter max-w-5xl font-bold">
 "WE ARE NOT MAKING CLOTHES. WE ARE CONSTRUCTING ARMOR FOR THE EMOTIONALLY HONEST."
 </blockquote>
 <div className="flex justify-end mt-8">
 <p className="font-mono-ui border-b border-void-black font-bold text-xs">— FOUNDER, S.E. STUDIO</p>
 </div>
 </section>

 {/* Technical Blueprint Section */}
 <section className="grid grid-cols-1 md:grid-cols-2 border-b border-structure-gray">
 <div className="p-6 md:p-margin-desktop border-r border-structure-gray">
 <div className="relative aspect-square border border-structure-gray p-4 flex items-center justify-center overflow-hidden bg-void-black">
 <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
 <div className="w-full h-full border-2 border-dashed border-brand-accent rounded-full scale-110"></div>
 <div className="absolute w-[1px] h-full bg-brand-accent"></div>
 <div className="absolute h-[1px] w-full bg-brand-accent"></div>
 </div>
 <img 
 className="w-full h-full object-contain relative z-10 " 
 alt="Technical blueprint mapping of streetwear jacket seams" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp1GrhGebTJXXenex1Nkx1ZCI9A7RwchUGEP7MRX5gYFyPptp4wQcy5WJapIDmTDAeM_8pqzuCDEFAZBQatIUynopu3_fLkNHEfSea2ldVOIRPy3dbrK5-9RuOY9ZfM1Q1brS---FT-RDNNl4oorPNqVHFt3T5RdLFNDpwHKCYrv3o_UIX1tra-JJYlgXjNPZ30V-CKD1HWx-3zfkMDmpaeTDGgJOOAN_gA6xuK_G6oRmBjuc6HJFRWo17ou9TzeiNWoA_8-5hMw8"
 />
 </div>
 </div>
 <div className="p-6 md:p-margin-desktop flex flex-col justify-center gap-6">
 <span className="font-mono-ui text-label-caps text-brand-accent font-bold">ENGINEERING THE UNKNOWN</span>
 <p className="font-body-lg text-sm md:text-base leading-relaxed text-pure-white">
 Every collection begins with a structural analysis of urban movement. We look at how the body occupies space in transition—running for a train, waiting at a light, disappearing into the crowd.
 </p>
 <div className="grid grid-cols-2 gap-4">
 <div className="p-4 border border-structure-gray bg-void-black">
 <p className="font-mono-ui text-[10px] text-brand-accent font-bold uppercase">DURABILITY RATIO</p>
 <p className="font-syne text-2xl font-bold text-pure-white mt-1">98%</p>
 </div>
 <div className="p-4 border border-structure-gray bg-void-black">
 <p className="font-mono-ui text-[10px] text-brand-accent font-bold uppercase">WIND RESISTANCE</p>
 <p className="font-syne text-2xl font-bold text-pure-white mt-1">MAX</p>
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20 px-6 flex flex-col items-center justify-center text-center">
 <h2 className="font-syne text-2xl md:text-headline-lg-mobile uppercase mb-8 font-bold tracking-tighter">
 JOIN THE MOVEMENT
 </h2>
 <Link 
 to="/products"
 className="bg-brand-accent text-void-black font-mono-ui text-xs uppercase font-bold px-12 py-5 hover:bg-pure-white hover:scale-105 transition-all duration-300"
 >
 VIEW THE LATEST DROP
 </Link>
 </section>
 </main>
 </div>
 );
}

export function ContactUs() {
 const [submitted, setSubmitted] = useState(false);
 const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'GENERAL INQUIRY' });

 const handleFormSubmit = (e) => {
 e.preventDefault();
 if (formData.name && formData.email && formData.message) {
 setSubmitted(true);
 }
 };

 const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 return (
 <div className="min-h-screen bg-background text-pure-white relative">
 {/* Grid overlay background */}
 <div className="fixed inset-0 pointer-events-none grid-lines opacity-10 z-0"></div>

 {/* Main Content: Brutalist Split Layout */}
 <main className="flex-grow flex flex-col md:flex-row relative z-10 border-b border-structure-gray">
 {/* Left Column: Contact Form */}
 <section className="w-full md:w-1/2 p-6 md:p-stack-lg border-b md:border-b-0 md:border-r border-structure-gray">
 <div className="mb-8 md:mb-stack-lg">
 <h1 className="font-headline-lg-mobile md:font-headline-lg uppercase mb-2 text-pure-white font-bold">GET IN TOUCH</h1>
 <p className="font-mono-ui text-on-secondary-container uppercase tracking-widest text-xs">TRANSMIT YOUR MESSAGE TO HQ</p>
 </div>
 
 {submitted ? (
 <div className="border border-brand-accent p-8 bg-brand-accent/5 text-center space-y-4 animate-fadeIn">
 <span className="material-symbols-outlined text-brand-accent text-4xl">check_circle</span>
 <h3 className="font-mono-ui text-sm uppercase font-bold text-brand-accent">MESSAGE RECEIVED</h3>
 <p className="font-mono-ui text-xs text-on-surface-variant leading-relaxed">
 Your communication packet has been securely dispatched to the central administration queue.
 </p>
 <button 
 onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '', type: 'GENERAL INQUIRY' }); }}
 className="mt-4 border border-brand-accent text-brand-accent px-4 py-2 font-mono-ui text-[10px] uppercase font-bold hover:bg-brand-accent hover:text-void-black transition-colors"
 >
 DISPATCH NEW PACKET
 </button>
 </div>
 ) : (
 <form onSubmit={handleFormSubmit} className="space-y-6">
 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant font-bold">IDENTIFICATION / NAME</label>
 <input 
 type="text" 
 name="name"
 required
 value={formData.name}
 onChange={handleInputChange}
 className="w-full bg-void-black border border-structure-gray p-4 text-pure-white font-mono-ui focus:border-brand-accent focus:ring-0 outline-none transition-colors" 
 placeholder="ENTER FULL NAME"
 />
 </div>
 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant font-bold">COMMUNICATION / EMAIL</label>
 <input 
 type="email" 
 name="email"
 required
 value={formData.email}
 onChange={handleInputChange}
 className="w-full bg-void-black border border-structure-gray p-4 text-pure-white font-mono-ui focus:border-brand-accent focus:ring-0 outline-none transition-colors" 
 placeholder="YOUR@EMOTION.COM"
 />
 </div>
 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant font-bold">INQUIRY TYPE</label>
 <select 
 name="type"
 value={formData.type}
 onChange={handleInputChange}
 className="w-full bg-void-black border border-structure-gray p-4 text-pure-white font-mono-ui focus:border-brand-accent focus:ring-0 outline-none transition-colors"
 >
 <option value="GENERAL INQUIRY">GENERAL INQUIRY</option>
 <option value="ORDER STATUS">ORDER STATUS</option>
 <option value="PRESS / MEDIA">PRESS / MEDIA</option>
 <option value="WHOLESALE">WHOLESALE</option>
 </select>
 </div>
 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant font-bold">MESSAGE / PAYLOAD</label>
 <textarea 
 name="message"
 required
 rows="6"
 value={formData.message}
 onChange={handleInputChange}
 className="w-full bg-void-black border border-structure-gray p-4 text-pure-white font-mono-ui focus:border-brand-accent focus:ring-0 outline-none transition-colors resize-none" 
 placeholder="TYPE YOUR MESSAGE HERE..."
 />
 </div>
 <button 
 type="submit" 
 className="w-full bg-brand-accent text-void-black font-mono-ui font-bold py-6 px-8 flex justify-between items-center group hover:bg-pure-white transition-colors duration-300 active:scale-[0.98]"
 >
 <span className="text-xs tracking-widest font-bold">SEND MESSAGE</span>
 <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
 arrow_forward
 </span>
 </button>
 </form>
 )}
 </section>

 {/* Right Column: Details & Map HUD */}
 <section className="w-full md:w-1/2 flex flex-col justify-between">
 <div className="p-6 md:p-stack-lg border-b border-structure-gray grid grid-cols-1 md:grid-cols-2 gap-8 bg-void-black">
 <div className="space-y-3">
 <h3 className="font-mono-ui text-label-caps text-brand-accent font-bold tracking-[0.2em]">HQ ADDRESS</h3>
 <p className="font-mono-ui text-pure-white text-xs uppercase leading-relaxed font-bold">
 STREET EMOTION ARCHIVE<br/>
 1221 INDUSTRIAL DISTRICT<br/>
 BLOCK 9, TOKYO, JP
 </p>
 </div>
 <div className="space-y-3">
 <h3 className="font-mono-ui text-label-caps text-brand-accent font-bold tracking-[0.2em]">DIRECT LINE</h3>
 <p className="font-mono-ui text-pure-white text-xs uppercase leading-relaxed font-bold">
 INFO@STREETEMOTION.COM<br/>
 +81 03-5467-XXXX
 </p>
 </div>
 <div className="space-y-3">
 <h3 className="font-mono-ui text-label-caps text-brand-accent font-bold tracking-[0.2em]">SUPPORT HOURS</h3>
 <p className="font-mono-ui text-pure-white text-xs uppercase leading-relaxed font-bold">
 MON — FRI: 10:00 - 19:00 JST<br/>
 SAT — SUN: CLOSED
 </p>
 </div>
 <div className="space-y-3">
 <h3 className="font-mono-ui text-label-caps text-brand-accent font-bold tracking-[0.2em]">SOCIALS</h3>
 <div className="flex gap-4 font-mono-ui text-xs font-bold">
 <a className="text-pure-white hover:text-brand-accent underline" href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
 <a className="text-pure-white hover:text-brand-accent underline" href="https://tiktok.com" target="_blank" rel="noreferrer">TIKTOK</a>
 </div>
 </div>
 </div>

 {/* Map Graphic Container */}
 <div className="flex-grow relative min-h-[400px] bg-void-black overflow-hidden group">
 {/* Map HUD radial pattern */}
 <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#CCFF00 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
 <img 
 alt="Tokyo Industrial Map blueprint" 
 className="absolute inset-0 w-full h-full object-cover contrast-125 brightness-50 group-hover:scale-102 transition-transform duration-700" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd_Q_FyWWvmDaoUm4pG2iLuNmd5QlqaCrnQh1cZOKhq4FaDAWN9amziAD8bkDy6bh7T5oVLINGPprC5sgLnze6LQw8YFlZETCbYm0rFtxNF6DY8kPInxiMBLjAOWeA087UXFiYamaETcVxKk-9Je5BLvZwS6oIAkTTnaKy4CeMtbMlQrqk9H06MbBwLI8hZGOPIhdcME-FP99xUnD0XDAzLZHenenw_sFn1KRnewPE9JXVaWTzouMd4O5jfLXeqEAaxoBWy0VZNZnY"
 />
 {/* HUD Annotation overlays */}
 <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none">
 <div className="flex justify-between items-start">
 <div className="border border-brand-accent p-2 bg-void-black/80 backdrop-blur-sm">
 <p className="font-mono-ui text-[9px] text-brand-accent font-bold">COORDINATES: 35.6895° N, 139.6917° E</p>
 </div>
 <div className="text-brand-accent animate-bounce">
 <span className="material-symbols-outlined text-3xl font-bold">location_on</span>
 </div>
 </div>
 <a 
 href="https://maps.google.com" 
 target="_blank" 
 rel="noreferrer" 
 className="bg-brand-accent text-void-black p-4 inline-block self-start font-mono-ui text-label-caps font-bold pointer-events-auto hover:bg-pure-white transition-colors"
 >
 LOCATE ON GOOGLE MAPS [↗]
 </a>
 </div>
 </div>
 </section>
 </main>
 </div>
 );
}

export function RefundPolicy() {
 return (
 <div className="min-h-screen bg-background text-pure-white relative select-none">
 <div className="fixed inset-0 pointer-events-none grid-lines opacity-10 z-0"></div>

 <main className="max-w-container-max mx-auto min-h-screen relative z-10">
 {/* Hero Section */}
 <section className="grid grid-cols-1 md:grid-cols-12 border-b border-structure-gray">
 <div className="md:col-span-8 p-6 md:p-margin-desktop border-r border-structure-gray flex flex-col justify-end min-h-[360px]">
 <span className="font-mono-ui text-label-caps text-brand-accent mb-4 font-bold">LEGAL / POLICIES</span>
 <h1 className="font-display-lg text-4xl md:text-display-xl uppercase leading-none tracking-tighter font-bold">
 REFUND<br/>POLICY
 </h1>
 </div>
 <div className="md:col-span-4 p-6 md:p-margin-desktop flex flex-col justify-end bg-void-black border-b md:border-b-0 border-structure-gray">
 <p className="font-mono-ui text-xs text-on-secondary-container leading-relaxed font-bold uppercase mb-4">
 LAST UPDATED: JUNE 2026. TRANSPARENCY IN TRANSACTION IS OUR CORE PRINCIPLE. READ CAREFULLY BEFORE INITIATING A RETURN.
 </p>
 </div>
 </section>

 {/* Main Content Editorial Grid */}
 <section className="grid grid-cols-1 md:grid-cols-12 border-b border-structure-gray">
 {/* Sidebar Labels (Desktop Only) */}
 <aside className="hidden md:block md:col-span-3 border-r border-structure-gray p-margin-desktop bg-void-black">
 <div className="sticky top-24 space-y-12 font-mono-ui">
 <div>
 <span className="font-mono-ui text-[10px] text-brand-accent block mb-2 font-bold">SECTION 01</span>
 <h3 className="font-subheading text-pure-white uppercase text-sm font-bold">Eligibility</h3>
 </div>
 <div>
 <span className="font-mono-ui text-[10px] text-brand-accent block mb-2 font-bold">SECTION 02</span>
 <h3 className="font-subheading text-pure-white uppercase text-sm font-bold">Return Window</h3>
 </div>
 <div>
 <span className="font-mono-ui text-[10px] text-brand-accent block mb-2 font-bold">SECTION 03</span>
 <h3 className="font-subheading text-pure-white uppercase text-sm font-bold">Process</h3>
 </div>
 </div>
 </aside>
 
 {/* Content Area */}
 <div className="md:col-span-9">
 {/* Eligibility */}
 <div className="p-6 md:p-margin-desktop border-b border-structure-gray" id="eligibility">
 <span className="md:hidden font-mono-ui text-label-caps text-brand-accent block mb-2 font-bold">01 / ELIGIBILITY</span>
 <h2 className="font-headline-lg text-2xl md:text-headline-lg uppercase mb-8 font-bold">REQUIREMENTS FOR RETURN</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body-md text-sm md:text-base text-on-background">
 <div className="space-y-4">
 <p>To be eligible for a refund, your item must be in the same condition that you received it: unworn, unused, with tags, and in its original packaging.</p>
 <p>Items showing any signs of wear, including fragrance, make-up stains, or pet hair, will be automatically rejected and returned to the sender at their expense.</p>
 </div>
 <div className="border border-structure-gray p-6 bg-surface-container-lowest font-mono-ui">
 <h4 className="text-brand-accent uppercase mb-4 underline font-bold text-xs">Non-Returnable Items</h4>
 <ul className="text-[10px] space-y-2 uppercase leading-relaxed font-bold text-on-secondary-container">
 <li>— LIMITED EDITION "DROP" ITEMS</li>
 <li>— UNDERWEAR &amp; SWIMWEAR</li>
 <li>— CUSTOMIZED APPAREL</li>
 <li>— SALE ITEMS (FINAL SALE)</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Return Window */}
 <div className="p-6 md:p-margin-desktop border-b border-structure-gray" id="window">
 <span className="md:hidden font-mono-ui text-label-caps text-brand-accent block mb-2 font-bold">02 / WINDOW</span>
 <h2 className="font-headline-lg text-2xl md:text-headline-lg uppercase mb-8 font-bold">THE 14-DAY LOCK</h2>
 <div className="space-y-6 max-w-3xl">
 <p className="text-sm md:text-base leading-relaxed">Our return window is strictly 14 days from the date of delivery. Once this window closes, the transaction is considered final and no returns or exchanges will be authorized.</p>
 <div className="flex flex-col md:flex-row gap-4">
 <div className="flex-grow border border-brand-accent p-8 flex flex-col items-center justify-center text-center bg-void-black">
 <span className="font-display-lg text-4xl md:text-5xl text-brand-accent font-bold">14</span>
 <span className="font-mono-ui uppercase text-[10px] tracking-wider mt-2 font-bold">Days to Decide</span>
 </div>
 <div className="flex-grow border border-structure-gray p-8 flex flex-col items-center justify-center text-center bg-void-black">
 <span className="font-display-lg text-4xl md:text-5xl text-pure-white font-bold">24H</span>
 <span className="font-mono-ui uppercase text-[10px] tracking-wider mt-2 font-bold">Processing Time</span>
 </div>
 </div>
 </div>
 </div>

 {/* Process */}
 <div className="p-6 md:p-margin-desktop border-b border-structure-gray" id="process">
 <span className="md:hidden font-mono-ui text-label-caps text-brand-accent block mb-2 font-bold">03 / PROCESS</span>
 <h2 className="font-headline-lg text-2xl md:text-headline-lg uppercase mb-8 font-bold text-pure-white">THE WORKFLOW</h2>
 <div className="space-y-0 border-t border-structure-gray font-mono-ui text-xs">
 {/* Step 1 */}
 <div className="flex flex-col md:flex-row border-b border-structure-gray py-6 group hover:bg-structure-gray/30 transition-colors">
 <div className="w-12 font-display-lg text-2xl text-on-surface-variant group-hover:text-brand-accent transition-colors font-bold">01</div>
 <div className="flex-1 md:px-8">
 <h4 className="text-pure-white uppercase mb-2 font-bold text-sm">Initiation</h4>
 <p className="text-on-secondary-container">Log into your account, access 'Order History' logs, and click the transaction reference of the items to return.</p>
 </div>
 </div>
 {/* Step 2 */}
 <div className="flex flex-col md:flex-row border-b border-structure-gray py-6 group hover:bg-structure-gray/30 transition-colors">
 <div className="w-12 font-display-lg text-2xl text-on-surface-variant group-hover:text-brand-accent transition-colors font-bold">02</div>
 <div className="flex-1 md:px-8">
 <h4 className="text-pure-white uppercase mb-2 font-bold text-sm">Inspection</h4>
 <p className="text-on-secondary-container">Once received, our quality control team will inspect the items within 72 hours of arrival at our Berlin node.</p>
 </div>
 </div>
 {/* Step 3 */}
 <div className="flex flex-col md:flex-row border-b border-structure-gray py-6 group hover:bg-structure-gray/30 transition-colors">
 <div className="w-12 font-display-lg text-2xl text-on-surface-variant group-hover:text-brand-accent transition-colors font-bold">03</div>
 <div className="flex-1 md:px-8">
 <h4 className="text-pure-white uppercase mb-2 font-bold text-sm">Refund Transfer</h4>
 <p className="text-on-secondary-container">Approved refunds are credited back to the original checkout payment method within 5-10 business days.</p>
 </div>
 </div>
 </div>
 </div>

 {/* Support Call to Action */}
 <div className="p-6 md:p-margin-desktop bg-brand-accent text-void-black">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
 <div>
 <h2 className="font-display-lg text-2xl md:text-headline-lg uppercase leading-none mb-2 font-bold tracking-tighter">NEED ASSISTANCE?</h2>
 <p className="font-mono-ui uppercase font-bold tracking-widest text-xs">OUR SUPPORT TEAM IS LIVE 24/7</p>
 </div>
 <Link to="/contact" className="bg-void-black text-pure-white px-12 py-5 font-mono-ui uppercase text-xs hover:bg-pure-white hover:text-void-black transition-all duration-300 font-bold inline-block">
 CONTACT SUPPORT
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Decorative sliding marquee */}
 <section className="h-44 border-x border-structure-gray grid grid-cols-4 md:grid-cols-12 bg-void-black">
 <div className="col-span-1 md:col-span-3 border-r border-structure-gray flex items-center justify-center opacity-30">
 <span className="material-symbols-outlined text-4xl">qr_code_2</span>
 </div>
 <div className="col-span-3 md:col-span-9 overflow-hidden relative flex items-center">
 <div className="flex whitespace-nowrap animate-marquee select-none">
 <div className="text-[64px] font-display-xl uppercase text-structure-gray opacity-20 font-bold tracking-tighter">
 STREET EMOTION — THE GRID — NO COMPROMISE — NO REGRETS —
 </div>
 <div className="text-[64px] font-display-xl uppercase text-structure-gray opacity-20 font-bold tracking-tighter ml-10">
 STREET EMOTION — THE GRID — NO COMPROMISE — NO REGRETS —
 </div>
 </div>
 </div>
 </section>
 </main>
 </div>
 );
}
