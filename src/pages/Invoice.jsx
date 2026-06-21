import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function Invoice() {
 const [searchParams] = useSearchParams();
 const { orders } = useContext(ShopContext);
 const [order, setOrder] = useState(null);
 
 const orderId = searchParams.get('orderId');

 useEffect(() => {
 if (orderId && orders) {
 const found = orders.find(o => o.id === orderId);
 if (found) {
 setOrder(found);
 }
 }
 }, [orderId, orders]);

 if (!order) {
 return (
 <div className="min-h-screen bg-background flex flex-col items-center justify-center text-pure-white p-8">
 <span className="material-symbols-outlined text-6xl text-structure-gray mb-4 font-bold">receipt_long</span>
 <h2 className="font-display-lg text-2xl uppercase mb-2">INVOICE UNRESOLVED</h2>
 <p className="font-mono-ui text-xs text-on-surface-variant mb-6 text-center max-w-xs">
 The requested transaction ID is not recorded in our database logs.
 </p>
 <Link to="/" className="border border-brand-accent text-brand-accent px-6 py-3 font-mono-ui text-xs uppercase hover:bg-brand-accent hover:text-void-black transition-all">
 Return Home
 </Link>
 </div>
 );
 }

 const subtotal = order.total;
 const shipping = subtotal > 150 ? 0.00 : 15.00;
 const taxes = subtotal * 0.20;
 const grandTotal = subtotal + shipping + taxes;

 return (
 <div className="bg-background text-on-background font-body-md antialiased min-h-screen py-12 px-4 md:px-margin-desktop flex flex-col items-center">
 
 {/* Top action header (hidden on print) */}
 <header className="w-full max-w-container-max border border-structure-gray bg-void-black p-4 mb-8 flex justify-between items-center no-print">
 <div className="flex gap-2 items-center">
 <span className="w-2 h-2 bg-brand-accent rounded-full animate-ping"></span>
 <span className="font-mono-ui text-xs text-pure-white uppercase font-bold">TRANSACTION SPECIMEN SECURED</span>
 </div>
 <div className="flex gap-4">
 <button 
 onClick={() => window.print()}
 className="border border-structure-gray px-4 py-2 font-mono-ui text-xs uppercase hover:bg-pure-white hover:text-void-black text-pure-white transition-all font-bold"
 >
 PRINT / PDF
 </button>
 <Link 
 to="/"
 className="bg-brand-accent text-void-black px-4 py-2 font-mono-ui text-xs uppercase font-bold hover:bg-pure-white transition-all"
 >
 THE DROP
 </Link>
 </div>
 </header>

 {/* INVOICE CONTENT CANVAS */}
 <main className="max-w-container-max w-full mx-auto p-8 border border-structure-gray bg-void-black print:border-none print:bg-white print:p-0 print:text-void-black text-pure-white space-y-12">
 {/* HEADER GRID */}
 <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-r border-structure-gray">
 {/* BRAND & TYPE */}
 <div className="md:col-span-8 p-6 md:p-stack-md border-b border-r border-structure-gray flex flex-col justify-between">
 <div>
 <h1 className="font-display-lg text-3xl md:text-[40px] uppercase text-brand-accent tracking-tighter leading-none mb-2 print:text-void-black">
 STREET EMOTION
 </h1>
 <p className="font-mono-ui text-label-caps text-on-secondary-container">UTILITY WEAR // TECHNICAL GEAR</p>
 </div>
 <div className="mt-8 md:mt-stack-lg">
 <h2 className="font-mono-ui text-xl uppercase text-pure-white print:text-void-black font-bold">INVOICE_{order.id}</h2>
 <p className="font-mono-ui text-xs text-on-secondary-container mt-1">DATE: {order.date}</p>
 <p className="font-mono-ui text-xs text-on-secondary-container">STATUS: <span className="text-brand-accent font-bold print:text-void-black">PAID</span></p>
 </div>
 </div>

 {/* CUSTOMER DETAILS */}
 <div className="md:col-span-4 p-6 md:p-stack-md border-b border-structure-gray bg-surface-container-lowest print:bg-white print:border-l print:border-structure-gray">
 <div className="mb-6">
 <h3 className="font-mono-ui text-label-caps text-secondary-container border-b border-structure-gray pb-1 mb-2">BILL TO</h3>
 <p className="font-mono-ui text-sm text-pure-white print:text-void-black uppercase font-bold">{order.customer}</p>
 <p className="font-mono-ui text-xs text-on-secondary-container mt-1 uppercase max-w-xs leading-relaxed">
 {order.address}
 </p>
 </div>
 <div>
 <h3 className="font-mono-ui text-label-caps text-secondary-container border-b border-structure-gray pb-1 mb-2">SHIP TO</h3>
 <p className="font-mono-ui text-xs text-on-secondary-container">SAME AS BILLING</p>
 </div>
 </div>

 {/* ITEM DATA TABLE */}
 <div className="md:col-span-12 overflow-x-auto w-full">
 <table className="w-full border-collapse">
 <thead>
 <tr className="bg-surface-container-highest print:bg-white print:border-b print:border-structure-gray">
 <th className="border-b border-r border-structure-gray p-4 text-left font-mono-ui text-label-caps text-brand-accent print:text-void-black w-16">QTY</th>
 <th className="border-b border-r border-structure-gray p-4 text-left font-mono-ui text-label-caps text-brand-accent print:text-void-black w-32">SKU_ID</th>
 <th className="border-b border-r border-structure-gray p-4 text-left font-mono-ui text-label-caps text-brand-accent print:text-void-black">DESCRIPTION</th>
 <th className="border-b border-structure-gray p-4 text-right font-mono-ui text-label-caps text-brand-accent print:text-void-black w-32">UNIT_PRICE</th>
 </tr>
 </thead>
 <tbody className="font-mono-ui text-xs">
 {order.items ? (
 order.items.map((item, index) => (
 <tr key={`${item.id}-${index}`} className="hover:bg-structure-gray/30 transition-colors print:text-void-black">
 <td className="border-b border-r border-structure-gray p-4 font-bold text-center">
 {item.quantity.toString().padStart(2, '0')}
 </td>
 <td className="border-b border-r border-structure-gray p-4 text-on-secondary-container uppercase">
 {item.id.toUpperCase()}
 </td>
 <td className="border-b border-r border-structure-gray p-4 uppercase">
 {item.name} / SIZE: {item.size} / {item.color}
 </td>
 <td className="border-b border-structure-gray p-4 text-right font-bold text-brand-accent print:text-void-black">
 ${item.price.toFixed(2)}
 </td>
 </tr>
 ))
 ) : (
 <tr className="hover:bg-structure-gray/30 transition-colors print:text-void-black">
 <td className="border-b border-r border-structure-gray p-4 font-bold text-center">01</td>
 <td className="border-b border-r border-structure-gray p-4 text-on-secondary-container uppercase">SE-ARCHIVE-TEE</td>
 <td className="border-b border-r border-structure-gray p-4 uppercase">{order.productClass}</td>
 <td className="border-b border-structure-gray p-4 text-right font-bold text-brand-accent print:text-void-black">${order.total.toFixed(2)}</td>
 </tr>
 )}
 
 {/* Empty fill row for brutalist effect */}
 <tr className="h-16">
 <td className="border-b border-r border-structure-gray"></td>
 <td className="border-b border-r border-structure-gray"></td>
 <td className="border-b border-r border-structure-gray"></td>
 <td className="border-b border-structure-gray"></td>
 </tr>
 </tbody>
 </table>
 </div>

 {/* TOTALS SECTION */}
 <div className="md:col-span-7 p-6 md:p-stack-md border-b border-r border-structure-gray flex flex-col justify-between">
 <div className="h-full flex flex-col justify-between">
 <div>
 <h4 className="font-mono-ui text-label-caps text-secondary-container mb-2 font-bold">NOTES / TERMS</h4>
 <p className="font-mono-ui text-[10px] text-on-secondary-container leading-relaxed uppercase">
 NO RETURNS ON LIMITED EDITION DROPS. <br/>
 WASH COLD / HANG DRY ONLY. <br/>
 TECHNICAL FABRICS REQUIRE SPECIFIC CARE.
 </p>
 </div>
 <div className="mt-6 pt-4 border-t border-structure-gray border-dashed">
 <p className="font-mono-ui text-label-caps text-on-secondary-container uppercase">
 THANK YOU FOR JOINING THE EMOTION.
 </p>
 </div>
 </div>
 </div>
 
 <div className="md:col-span-5 border-b border-structure-gray bg-surface-container-low print:bg-white print:border-t print:border-structure-gray">
 <div className="grid grid-cols-2 text-xs">
 <div className="p-4 border-b border-r border-structure-gray font-mono-ui text-label-caps text-on-secondary-container uppercase font-bold">SUBTOTAL</div>
 <div className="p-4 border-b border-structure-gray text-right font-mono-ui text-pure-white print:text-void-black font-bold">${subtotal.toFixed(2)}</div>
 
 <div className="p-4 border-b border-r border-structure-gray font-mono-ui text-label-caps text-on-secondary-container uppercase font-bold">VAT (20%)</div>
 <div className="p-4 border-b border-structure-gray text-right font-mono-ui text-pure-white print:text-void-black font-bold">${taxes.toFixed(2)}</div>
 
 <div className="p-4 border-b border-r border-structure-gray font-mono-ui text-label-caps text-on-secondary-container uppercase font-bold">SHIPPING</div>
 <div className="p-4 border-b border-structure-gray text-right font-mono-ui text-brand-accent print:text-void-black font-bold">
 {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
 </div>
 
 <div className="p-4 border-r border-structure-gray font-mono-ui text-label-caps text-brand-accent print:text-void-black uppercase bg-void-black print:bg-white flex items-center font-bold">GRAND TOTAL</div>
 <div className="p-4 bg-brand-accent text-void-black text-right font-display-lg text-[20px] leading-none font-bold print:border-t print:border-structure-gray print:bg-white print:text-void-black">
 ${grandTotal.toFixed(2)}
 </div>
 </div>
 </div>
 </div>

 {/* FOOTER / SIGNATURE AREA */}
 <div className="mt-8 md:mt-stack-lg grid grid-cols-1 md:grid-cols-2 gap-8 font-mono-ui text-xs leading-relaxed">
 <div className="border-l-4 border-brand-accent pl-4 print:border-void-black">
 <p className="text-on-secondary-container mb-4 uppercase">
 The "STREET EMOTION" identification tag must remain attached for warranty purposes.
 </p>
 <div className="flex items-center gap-2">
 <span className="material-symbols-outlined text-brand-accent print:text-void-black">verified_user</span>
 <span className="text-label-caps uppercase text-pure-white print:text-void-black font-bold">AUTHENTICITY GUARANTEED</span>
 </div>
 </div>
 
 <div className="flex flex-col justify-end items-end">
 <div className="w-full md:w-64 border-b border-structure-gray h-16 relative print:border-void-black">
 <div className="absolute bottom-1 left-0 font-syne text-lg text-on-secondary-container opacity-25 select-none font-bold uppercase">
 AUTHORIZED_SIG
 </div>
 {/* Stylized CSS signature */}
 <div className="absolute bottom-2 left-4 w-48 h-8 opacity-80" style={{ background: 'linear-gradient(135deg, transparent 40%, #CCFF00 45%, #CCFF00 55%, transparent 60%)', filter: 'blur(1px)' }}></div>
 </div>
 <p className="text-label-caps text-secondary-container mt-2 font-bold uppercase text-[10px]">
 STREET EMOTION LOGISTICS DIV.
 </p>
 </div>
 </div>
 </main>

 {/* Floating print actions for mobile and desktop (hidden on print) */}
 <div className="fixed bottom-8 right-8 flex flex-col gap-2 no-print">
 <button 
 onClick={() => window.print()}
 className="w-14 h-14 bg-brand-accent text-void-black flex items-center justify-center hover:scale-95 transition-transform active:scale-90" 
 title="Print Record"
 >
 <span className="material-symbols-outlined">print</span>
 </button>
 <Link 
 to="/profile"
 className="w-14 h-14 bg-pure-white text-void-black flex items-center justify-center hover:scale-95 transition-transform active:scale-90" 
 title="Profile Log"
 >
 <span className="material-symbols-outlined">person</span>
 </Link>
 </div>
 </div>
 );
}
