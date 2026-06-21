import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function UserProfile() {
 const { user, orders } = useContext(ShopContext);
 const [activeTab, setActiveTab] = useState('profile');
 const [editMode, setEditMode] = useState(false);
 const [username, setUsername] = useState(user.username);
 const { setUser } = useContext(ShopContext);

 const handleSaveSettings = (e) => {
 e.preventDefault();
 setUser(prev => ({ ...prev, username }));
 setEditMode(false);
 };

 const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);

 return (
 <div className="min-h-screen bg-background text-pure-white relative">
 {/* Structural Grid Background */}
 <div className="fixed inset-0 pointer-events-none grid-lines opacity-10 z-0"></div>

 <main className="min-h-screen flex flex-col md:flex-row relative z-10">
 {/* Left Sidebar Navigation */}
 <aside className="w-full md:w-64 lg:w-80 border-r border-structure-gray bg-void-black flex flex-col">
 <div className="p-6 md:p-8 border-b border-structure-gray">
 <span className="font-mono-ui text-label-caps text-brand-accent">ACCOUNT_CENTRAL</span>
 <h1 className="font-headline-lg-mobile text-pure-white mt-2">DASHBOARD</h1>
 </div>
 <nav className="flex flex-col flex-grow font-mono-ui">
 <button 
 onClick={() => setActiveTab('profile')}
 className={`flex items-center justify-between px-8 py-6 border-b border-structure-gray uppercase text-left transition-all ${activeTab === 'profile' ? 'text-brand-accent bg-structure-gray/30 font-bold border-r-2 border-r-brand-accent' : 'text-pure-white hover:text-brand-accent'}`}
 >
 <span>Profile</span>
 <span className="material-symbols-outlined text-[18px]">chevron_right</span>
 </button>
 <button 
 onClick={() => setActiveTab('orders')}
 className={`flex items-center justify-between px-8 py-6 border-b border-structure-gray uppercase text-left transition-all ${activeTab === 'orders' ? 'text-brand-accent bg-structure-gray/30 font-bold border-r-2 border-r-brand-accent' : 'text-pure-white hover:text-brand-accent'}`}
 >
 <span>Order History</span>
 <span className="material-symbols-outlined text-[18px]">chevron_right</span>
 </button>
 <button 
 onClick={() => setActiveTab('wishlist')}
 className={`flex items-center justify-between px-8 py-6 border-b border-structure-gray uppercase text-left transition-all ${activeTab === 'wishlist' ? 'text-brand-accent bg-structure-gray/30 font-bold border-r-2 border-r-brand-accent' : 'text-pure-white hover:text-brand-accent'}`}
 >
 <span>Wishlist</span>
 <span className="material-symbols-outlined text-[18px]">chevron_right</span>
 </button>
 <button 
 onClick={() => setActiveTab('addresses')}
 className={`flex items-center justify-between px-8 py-6 border-b border-structure-gray uppercase text-left transition-all ${activeTab === 'addresses' ? 'text-brand-accent bg-structure-gray/30 font-bold border-r-2 border-r-brand-accent' : 'text-pure-white hover:text-brand-accent'}`}
 >
 <span>Addresses</span>
 <span className="material-symbols-outlined text-[18px]">chevron_right</span>
 </button>
 <button 
 onClick={() => setActiveTab('settings')}
 className={`flex items-center justify-between px-8 py-6 border-b border-structure-gray uppercase text-left transition-all ${activeTab === 'settings' ? 'text-brand-accent bg-structure-gray/30 font-bold border-r-2 border-r-brand-accent' : 'text-pure-white hover:text-brand-accent'}`}
 >
 <span>Settings</span>
 <span className="material-symbols-outlined text-[18px]">chevron_right</span>
 </button>
 <div className="mt-auto p-8 border-t border-structure-gray">
 <Link to="/" className="w-full py-4 border border-structure-gray text-pure-white font-mono-ui uppercase hover:bg-alert-red hover:border-alert-red transition-all duration-300 flex items-center justify-center font-bold">
 Sign Out
 </Link>
 </div>
 </nav>
 </aside>

 {/* Main Content Canvas */}
 <section className="flex-grow p-6 md:p-margin-desktop bg-background/50 backdrop-blur-sm overflow-y-auto">
 <div className="max-w-container-max mx-auto space-y-12">
 
 {/* User Detail Header Block */}
 <div className="grid grid-cols-1 lg:grid-cols-3 border border-structure-gray bg-void-black">
 <div className="lg:col-span-2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-structure-gray flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
 <div className="relative w-32 h-32 flex-shrink-0">
 <div className="w-full h-full bg-brand-accent text-void-black font-display-lg text-5xl flex items-center justify-center font-bold border-2 border-brand-accent select-none">
 {user.avatar}
 </div>
 <div className="absolute -bottom-2 -right-2 bg-brand-accent text-void-black px-2 py-1 text-[10px] font-mono-ui font-bold tracking-widest">
 VERIFIED
 </div>
 </div>
 <div>
 <h2 className="font-display-lg text-2xl md:text-[40px] text-pure-white leading-none uppercase tracking-tighter">
 {user.username}
 </h2>
 <p className="font-mono-ui text-on-secondary-container mt-2 text-xs">{user.email}</p>
 <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
 <span className="px-4 py-1 border border-brand-accent text-brand-accent font-mono-ui text-label-caps bg-brand-accent/10 font-bold">
 RAW MEMBER
 </span>
 <span className="px-4 py-1 border border-structure-gray text-on-surface-variant font-mono-ui text-label-caps uppercase">
 SINCE {user.joined.split('-')[0]}
 </span>
 </div>
 </div>
 </div>
 
 <div className="p-8 md:p-12 flex flex-col justify-center items-center lg:items-start bg-structure-gray/20">
 <span className="font-mono-ui text-label-caps text-on-secondary-container uppercase">Loyalty Points</span>
 <div className="text-[32px] md:text-[48px] font-display-lg text-brand-accent leading-none mt-2 font-bold">
 1,240 <span className="text-[16px] font-mono-ui text-pure-white tracking-widest uppercase">SE</span>
 </div>
 <p className="font-mono-ui text-label-caps mt-4 text-on-surface-variant">LEVEL 03 REACHED</p>
 <div className="w-full h-1.5 bg-void-black mt-2">
 <div className="h-full bg-brand-accent w-[70%]"></div>
 </div>
 </div>
 </div>

 {/* TAB CONTENTS */}
 {activeTab === 'profile' && (
 <div className="space-y-12">
 {/* Recent Activity Section */}
 <div className="space-y-6">
 <div className="flex items-center justify-between border-b border-structure-gray pb-4">
 <h3 className="font-syne text-lg text-pure-white border-l-4 border-brand-accent pl-4 uppercase font-bold">
 Recent Activity Log
 </h3>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter bg-structure-gray border border-structure-gray">
 {/* Activity Card 1 */}
 <div className="bg-void-black p-6 group hover:bg-structure-gray/50 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px]">
 <div className="flex justify-between items-start mb-6">
 <span className="material-symbols-outlined text-brand-accent">shopping_cart</span>
 <span className="font-mono-ui text-label-caps text-on-secondary-container">12.04.26</span>
 </div>
 <div>
 <h4 className="font-mono-ui text-subheading text-pure-white uppercase text-sm">ORDER_CONFIRMED</h4>
 <p className="font-body-md text-on-secondary-container text-xs mt-2">SE-772-BLK // RAW EDGE HOODIE</p>
 </div>
 <div className="mt-4 flex items-center gap-2 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
 <span className="font-mono-ui text-label-caps text-[9px]">TRACK_SHIPMENT</span>
 <span className="material-symbols-outlined text-xs">arrow_forward</span>
 </div>
 </div>

 {/* Activity Card 2 */}
 <div className="bg-void-black p-6 group hover:bg-structure-gray/50 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px]">
 <div className="flex justify-between items-start mb-6">
 <span className="material-symbols-outlined text-pure-white">favorite</span>
 <span className="font-mono-ui text-label-caps text-on-secondary-container">10.04.26</span>
 </div>
 <div>
 <h4 className="font-mono-ui text-subheading text-pure-white uppercase text-sm">WISHLIST_UPDATE</h4>
 <p className="font-body-md text-on-secondary-container text-xs mt-2">+3 ITEMS FROM 'THE DROP'</p>
 </div>
 <div className="mt-4 flex items-center gap-2 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
 <span className="font-mono-ui text-label-caps text-[9px]">VIEW_LIST</span>
 <span className="material-symbols-outlined text-xs">arrow_forward</span>
 </div>
 </div>

 {/* Activity Card 3 */}
 <div className="bg-void-black p-6 group hover:bg-structure-gray/50 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px]">
 <div className="flex justify-between items-start mb-6">
 <span className="material-symbols-outlined text-brand-accent">star</span>
 <span className="font-mono-ui text-label-caps text-on-secondary-container">08.04.26</span>
 </div>
 <div>
 <h4 className="font-mono-ui text-subheading text-pure-white uppercase text-sm">POINTS_EARNED</h4>
 <p className="font-body-md text-on-secondary-container text-xs mt-2">+250 SE FOR COMMUNITY REVIEWS</p>
 </div>
 <div className="mt-4 flex items-center gap-2 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
 <span className="font-mono-ui text-label-caps text-[9px]">CHECK_REWARDS</span>
 <span className="material-symbols-outlined text-xs">arrow_forward</span>
 </div>
 </div>

 {/* Activity Card 4 */}
 <div className="bg-void-black p-6 group hover:bg-structure-gray/50 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px]">
 <div className="flex justify-between items-start mb-6">
 <span className="material-symbols-outlined text-pure-white">shield</span>
 <span className="font-mono-ui text-label-caps text-on-secondary-container">05.04.26</span>
 </div>
 <div>
 <h4 className="font-mono-ui text-subheading text-pure-white uppercase text-sm">SECURITY_ALERT</h4>
 <p className="font-body-md text-on-secondary-container text-xs mt-2">LOGIN FROM LONDON, UK</p>
 </div>
 <div className="mt-4 flex items-center gap-2 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
 <span className="font-mono-ui text-label-caps text-[9px]">MANAGE_DEVICES</span>
 <span className="material-symbols-outlined text-xs">arrow_forward</span>
 </div>
 </div>
 </div>
 </div>

 {/* Promo Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 <div className="relative group overflow-hidden border border-structure-gray h-[320px]">
 <img 
 alt="Featured Collection Hangar" 
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50 " 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEO27e0keQCS7K6zsUmeCiUNQwWOVBEGmT2TD9ysSdRlRdXG7Lec-F6sjnuxjhty_YAWgS_TbARjIi8SghaYJxgk2xS0fjcKXsTJF7Fjt7MMi4w73EeLdOmLp-1dQR0IjoIgYs8F4dNXWGK-NfVNMvbCa0U2Ucp_a1U6hzODvMCQe4Vcbu1ExeVztf9ybIdmi-gLZK38M7SRkXzJHDUCCqhHhIZH7x7-TOKUwO7sgITWG4bD0xz1ASmKtjzdpaPmIvrkhyErukaTk"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-void-black/90 to-transparent flex flex-col justify-end p-8">
 <span className="font-mono-ui text-label-caps text-brand-accent mb-1 text-[10px]">EXCLUSIVE ACCESS</span>
 <h3 className="font-display-lg text-2xl text-pure-white uppercase leading-none mb-4">RAW_ARCHIVE_002</h3>
 <Link to="/products" className="w-fit px-6 py-3 bg-brand-accent text-void-black font-mono-ui text-xs uppercase font-bold hover:bg-pure-white transition-colors duration-300">
 SHOP THE DROP
 </Link>
 </div>
 </div>
 
 <div className="grid grid-cols-1 gap-gutter border border-structure-gray bg-structure-gray">
 <div className="bg-void-black p-6 flex flex-col justify-between">
 <div>
 <h4 className="font-mono-ui text-sm uppercase text-pure-white font-bold">Personal Stylist Consultation</h4>
 <p className="font-body-md text-on-secondary-container text-xs mt-2">
 As a RAW MEMBER, you have access to 24/7 technical styling consultation.
 </p>
 </div>
 <a className="font-mono-ui text-label-caps text-brand-accent border-b border-brand-accent pb-1 w-fit hover:text-pure-white hover:border-pure-white transition-all text-[10px] mt-4 font-bold" href="#">
 START_SESSION_
 </a>
 </div>
 <div className="bg-void-black p-6 flex flex-col justify-between">
 <div>
 <h4 className="font-mono-ui text-sm uppercase text-pure-white font-bold">SE Community Hub</h4>
 <p className="font-body-md text-on-secondary-container text-xs mt-2">
 Join the Discord network to unlock private channels and exclusive drops.
 </p>
 </div>
 <a className="font-mono-ui text-label-caps text-brand-accent border-b border-brand-accent pb-1 w-fit hover:text-pure-white hover:border-pure-white transition-all text-[10px] mt-4 font-bold" href="#">
 LINK_DISCORD_ACCOUNT_
 </a>
 </div>
 </div>
 </div>
 </div>
 )}

 {activeTab === 'orders' && (
 <div className="space-y-6">
 <h3 className="font-syne text-lg uppercase text-brand-accent border-b border-structure-gray pb-2 font-bold">
 TRANSACTION_HISTORY_LOGS
 </h3>
 
 {orders.length === 0 ? (
 <div className="border border-structure-gray p-8 text-center text-on-surface-variant font-mono-ui text-xs">
 NO REGISTERED TRANSACTIONS LOCATED IN USER LOGS.
 </div>
 ) : (
 <div className="border border-structure-gray overflow-hidden">
 <table className="w-full text-left font-mono-ui text-xs">
 <thead className="bg-structure-gray text-on-secondary-container">
 <tr>
 <th className="p-4 uppercase font-bold border-r border-structure-gray">SPECIMEN_ID</th>
 <th className="p-4 uppercase font-bold border-r border-structure-gray">DATE</th>
 <th className="p-4 uppercase font-bold border-r border-structure-gray text-right">TOTAL</th>
 <th className="p-4 uppercase font-bold text-center">STATUS</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-structure-gray bg-void-black">
 {orders.map(order => (
 <tr key={order.id} className="hover:bg-structure-gray/30 transition-colors">
 <td className="p-4 border-r border-structure-gray text-brand-accent font-bold">
 <Link to={`/invoice?orderId=${order.id}`} className="hover:underline">
 {order.id} ↗
 </Link>
 </td>
 <td className="p-4 border-r border-structure-gray text-on-surface-variant">{order.date}</td>
 <td className="p-4 border-r border-structure-gray text-right font-bold">${order.total.toFixed(2)}</td>
 <td className="p-4 text-center">
 <span className={`inline-block px-2 py-0.5 text-[9px] font-bold uppercase ${
 order.status === 'SHIPPED' 
 ? 'bg-brand-accent text-void-black' 
 : order.status === 'PROCESSING' 
 ? 'border border-structure-gray text-pure-white' 
 : 'bg-alert-red text-pure-white'
 }`}>
 {order.status}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )}
 </div>
 )}

 {activeTab === 'wishlist' && (
 <div className="space-y-6">
 <h3 className="font-syne text-lg uppercase text-brand-accent border-b border-structure-gray pb-2 font-bold">
 YOUR WISHLIST [03]
 </h3>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter bg-structure-gray border border-structure-gray">
 {products.slice(0, 3).map(product => (
 <div key={product.id} className="bg-background p-4 flex flex-col justify-between">
 <div className="aspect-[3/4] overflow-hidden bg-void-black border border-structure-gray relative mb-4">
 <img src={product.image} className="w-full h-full object-cover hover:-0 transition-all" alt={product.name} />
 </div>
 <div className="flex justify-between items-center mb-2">
 <Link to={`/product/${product.id}`} className="font-mono-ui text-sm uppercase hover:text-brand-accent font-bold">{product.name}</Link>
 <span className="font-mono-ui text-xs text-brand-accent">${product.price.toFixed(2)}</span>
 </div>
 <button 
 onClick={() => addToCart(product, "M")}
 className="w-full border border-structure-gray py-2 font-mono-ui text-xs uppercase hover:bg-pure-white hover:text-void-black transition-colors"
 >
 ADD TO BAG
 </button>
 </div>
 ))}
 </div>
 </div>
 )}

 {activeTab === 'addresses' && (
 <div className="space-y-6">
 <h3 className="font-syne text-lg uppercase text-brand-accent border-b border-structure-gray pb-2 font-bold">
 DELIVERY_CHANNELS
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="border border-structure-gray p-6 bg-void-black space-y-4">
 <div className="flex justify-between items-center border-b border-structure-gray pb-2">
 <span className="font-mono-ui text-xs uppercase font-bold text-brand-accent">PRIMARY HOME</span>
 <span className="material-symbols-outlined text-sm">home</span>
 </div>
 <p className="font-mono-ui text-xs text-on-surface-variant leading-relaxed uppercase">
 {user.address}
 </p>
 </div>
 <div className="border border-structure-gray/50 p-6 bg-void-black/20 flex flex-col items-center justify-center border-dashed">
 <span className="material-symbols-outlined text-3xl text-on-surface-variant">add</span>
 <button className="font-mono-ui text-xs uppercase text-brand-accent hover:underline mt-2 font-bold">
 ADD NEW CHANNEL
 </button>
 </div>
 </div>
 </div>
 )}

 {activeTab === 'settings' && (
 <div className="space-y-6">
 <h3 className="font-syne text-lg uppercase text-brand-accent border-b border-structure-gray pb-2 font-bold">
 ACCOUNT_CONFIG
 </h3>
 <form onSubmit={handleSaveSettings} className="max-w-md border border-structure-gray p-6 bg-void-black space-y-6">
 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant font-bold">USERNAME / ALIAS</label>
 <input 
 type="text" 
 required
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 className="bg-background border border-structure-gray p-3 text-sm font-mono-ui text-pure-white focus:border-brand-accent focus:ring-0 uppercase"
 />
 </div>
 
 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant font-bold">EMAIL ADDRESS (LOCKED)</label>
 <input 
 type="email" 
 disabled
 value={user.email}
 className="bg-surface-container-low border border-structure-gray p-3 text-sm font-mono-ui text-on-secondary-container cursor-not-allowed"
 />
 </div>

 <button type="submit" className="w-full bg-brand-accent text-void-black py-4 font-mono-ui text-xs uppercase font-bold hover:bg-pure-white transition-colors duration-300">
 SAVE CHANGES
 </button>
 </form>
 </div>
 )}

 </div>
 </section>
 </main>
 </div>
 );
}
