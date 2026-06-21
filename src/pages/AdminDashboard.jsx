import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
 const { adminStats, orders } = useContext(ShopContext);
 const [cmdOpen, setCmdOpen] = useState(false);

 // Command palette toggle simulation
 const toggleCmdPalette = () => {
 setCmdOpen(prev => !prev);
 };

 return (
 <div className="min-h-screen bg-background text-pure-white flex">
 {/* Sidebar / SideNav - Desktop only */}
 <aside className="hidden lg:flex flex-col w-64 bg-void-black border-r border-structure-gray flex-shrink-0">
 <div className="h-16 flex items-center px-6 border-b border-structure-gray">
 <span className="font-display-lg text-lg uppercase text-brand-accent tracking-tighter leading-none">
 STREET EMOTION
 </span>
 </div>
 <nav className="flex-grow flex flex-col py-6">
 <div className="px-6 mb-3">
 <span className="font-mono-ui text-label-caps text-on-secondary-container opacity-50 uppercase">MANAGEMENT</span>
 </div>
 <button className="group flex items-center w-full px-6 py-4 border-b border-structure-gray bg-structure-gray text-brand-accent border-r-2 border-r-brand-accent text-left">
 <span className="material-symbols-outlined mr-4">dashboard</span>
 <span className="font-mono-ui text-xs uppercase tracking-widest font-bold">DASHBOARD</span>
 </button>
 <button className="group flex items-center w-full px-6 py-4 border-b border-structure-gray text-pure-white hover:text-brand-accent transition-colors duration-200 text-left">
 <span className="material-symbols-outlined mr-4">shopping_cart</span>
 <span className="font-mono-ui text-xs uppercase tracking-widest font-bold">ORDERS</span>
 </button>
 <button className="group flex items-center w-full px-6 py-4 border-b border-structure-gray text-pure-white hover:text-brand-accent transition-colors duration-200 text-left">
 <span className="material-symbols-outlined mr-4">inventory_2</span>
 <span className="font-mono-ui text-xs uppercase tracking-widest font-bold">INVENTORY</span>
 </button>
 <button className="group flex items-center w-full px-6 py-4 border-b border-structure-gray text-pure-white hover:text-brand-accent transition-colors duration-200 text-left">
 <span className="material-symbols-outlined mr-4">group</span>
 <span className="font-mono-ui text-xs uppercase tracking-widest font-bold">CUSTOMERS</span>
 </button>
 
 <div className="px-6 mt-12 mb-3">
 <span className="font-mono-ui text-label-caps text-on-secondary-container opacity-50 uppercase">SYSTEM</span>
 </div>
 <button className="group flex items-center w-full px-6 py-4 border-b border-structure-gray text-pure-white hover:text-brand-accent transition-colors duration-200 text-left">
 <span className="material-symbols-outlined mr-4">analytics</span>
 <span className="font-mono-ui text-xs uppercase tracking-widest font-bold">ANALYTICS</span>
 </button>
 <button className="group flex items-center w-full px-6 py-4 border-b border-structure-gray text-pure-white hover:text-brand-accent transition-colors duration-200 text-left">
 <span className="material-symbols-outlined mr-4">settings</span>
 <span className="font-mono-ui text-xs uppercase tracking-widest font-bold">SETTINGS</span>
 </button>
 </nav>
 
 <div className="p-6 border-t border-structure-gray">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-brand-accent flex items-center justify-center text-void-black font-bold font-mono-ui">A</div>
 <div>
 <p className="font-mono-ui text-label-caps text-pure-white">ADMIN_01</p>
 <p className="font-mono-ui text-[10px] text-brand-accent uppercase font-bold tracking-wider">CONNECTED</p>
 </div>
 </div>
 </div>
 </aside>

 {/* Main Content Area */}
 <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
 {/* Header bar */}
 <header className="h-16 w-full border-b border-structure-gray flex justify-between items-center px-4 md:px-margin-desktop bg-background z-10">
 <div className="flex items-center gap-4">
 <Link to="/" className="lg:hidden font-syne text-headline-lg-mobile text-brand-accent tracking-tighter font-bold">
 S.E.
 </Link>
 <h1 className="font-syne text-xl md:text-headline-lg uppercase text-pure-white tracking-tighter">
 DASHBOARD_V.04
 </h1>
 </div>
 <div className="flex items-center gap-6">
 <div 
 onClick={toggleCmdPalette}
 className="hidden md:flex border border-structure-gray p-2 gap-2 items-center cursor-pointer hover:border-brand-accent transition-colors bg-void-black"
 >
 <span className="material-symbols-outlined text-brand-accent text-sm">search</span>
 <span className="font-mono-ui text-label-caps text-on-surface-variant w-40 select-none">
 CLICK TO ACTIVATE CMD
 </span>
 </div>
 <div className="flex gap-4">
 <button className="material-symbols-outlined text-pure-white hover:text-brand-accent transition-colors">notifications</button>
 <button className="material-symbols-outlined text-pure-white hover:text-brand-accent transition-colors">help</button>
 </div>
 </div>
 </header>

 {/* Scrollable Dashboard Grid */}
 <div className="flex-1 overflow-y-auto p-4 md:p-margin-desktop space-y-8 pb-24">
 {/* Summary Bento Grid */}
 <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter bg-structure-gray border border-structure-gray overflow-hidden">
 {/* Net Sales */}
 <div className="bg-void-black p-6 flex flex-col justify-between min-h-[160px] hover:bg-structure-gray/30 transition-colors">
 <div className="flex justify-between items-start">
 <span className="font-mono-ui text-label-caps text-on-secondary-container tracking-widest uppercase">NET_SALES_24H</span>
 <span className="material-symbols-outlined text-brand-accent">trending_up</span>
 </div>
 <div>
 <h2 className="font-display-lg text-2xl md:text-3xl text-pure-white tracking-tighter leading-none font-bold">
 ${adminStats.netSales.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
 </h2>
 <div className="flex items-center gap-2 mt-3">
 <div className="h-1 w-full bg-structure-gray">
 <div className="h-full bg-brand-accent w-[84%] transition-all duration-1000"></div>
 </div>
 <span className="font-mono-ui text-[10px] text-brand-accent font-bold">+18.2%</span>
 </div>
 </div>
 </div>

 {/* Active Drops */}
 <div className="bg-void-black p-6 flex flex-col justify-between min-h-[160px] hover:bg-structure-gray/30 transition-colors">
 <div className="flex justify-between items-start">
 <span className="font-mono-ui text-label-caps text-on-secondary-container tracking-widest uppercase">ACTIVE_DROPS</span>
 <span className="material-symbols-outlined text-brand-accent">bolt</span>
 </div>
 <div>
 <h2 className="font-display-lg text-3xl md:text-4xl text-brand-accent font-bold">
 {adminStats.activeDrops.toString().padStart(2, '0')}
 </h2>
 <p className="font-mono-ui text-[10px] text-on-secondary-container mt-3 uppercase tracking-wider">
 CYBER_SPRING / VOID_SERIES / CORE_TEES
 </p>
 </div>
 </div>

 {/* Pending Returns */}
 <div className="bg-void-black p-6 flex flex-col justify-between min-h-[160px] hover:bg-structure-gray/30 transition-colors">
 <div className="flex justify-between items-start">
 <span className="font-mono-ui text-label-caps text-on-secondary-container tracking-widest uppercase">PENDING_RETURNS</span>
 <span className="material-symbols-outlined text-alert-red">sync_problem</span>
 </div>
 <div>
 <h2 className="font-display-lg text-3xl md:text-4xl text-pure-white font-bold">
 {adminStats.pendingReturns.toString().padStart(2, '0')}
 </h2>
 <div className="flex items-center gap-2 mt-3">
 <span className="font-mono-ui text-label-caps text-alert-red font-bold">ATTENTION REQUIRED</span>
 </div>
 </div>
 </div>
 </section>

 {/* Matrix & Server Stats */}
 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
 {/* Sales Chart Bar representations */}
 <div className="lg:col-span-3 space-y-6">
 <div className="flex justify-between items-end border-b border-structure-gray pb-4">
 <h3 className="font-syne text-lg uppercase text-pure-white">PERFORMANCE_MATRIX</h3>
 <div className="flex gap-4 font-mono-ui text-label-caps text-xs">
 <button className="text-brand-accent underline">7D</button>
 <button className="text-on-secondary-container hover:text-pure-white">30D</button>
 <button className="text-on-secondary-container hover:text-pure-white">90D</button>
 </div>
 </div>

 {/* Graphic Chart canvas */}
 <div className="relative h-64 bg-void-black border border-structure-gray overflow-hidden">
 <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
 {[...Array(12)].map((_, i) => (
 <div key={i} className="border-r border-structure-gray/20"></div>
 ))}
 </div>
 <div className="absolute inset-0 grid grid-rows-6 pointer-events-none">
 {[...Array(6)].map((_, i) => (
 <div key={i} className="border-b border-structure-gray/20"></div>
 ))}
 </div>
 
 {/* Simulated Chart Bars */}
 <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 md:px-12 h-48 select-none">
 <div className="w-8 md:w-12 bg-brand-accent h-20 opacity-20 transition-all duration-700"></div>
 <div className="w-8 md:w-12 bg-brand-accent h-36 opacity-30 transition-all duration-700"></div>
 <div className="w-8 md:w-12 bg-brand-accent h-28 opacity-20 transition-all duration-700"></div>
 <div className="w-8 md:w-12 bg-brand-accent h-44 opacity-50 transition-all duration-700"></div>
 <div className="w-8 md:w-12 bg-brand-accent h-48 opacity-100 transition-all duration-700"></div>
 <div className="w-8 md:w-12 bg-brand-accent h-32 opacity-40 transition-all duration-700"></div>
 </div>

 <div className="absolute top-4 left-4 font-mono-ui text-[10px] text-brand-accent bg-void-black/80 px-2 py-1 uppercase tracking-wider font-bold">
 REALTIME_TRACKING_CDNS_ACTIVE
 </div>
 </div>
 </div>

 {/* Server health monitors */}
 <div className="lg:col-span-1 border border-structure-gray bg-void-black flex flex-col justify-between">
 <div className="p-4 border-b border-structure-gray bg-structure-gray">
 <h4 class="font-mono-ui text-label-caps text-brand-accent font-bold">SERVER_HEALTH</h4>
 </div>
 <div className="p-6 flex-grow flex flex-col justify-between gap-6">
 <div className="space-y-2">
 <div className="flex justify-between font-mono-ui text-[10px] uppercase">
 <span>CPU_USAGE</span>
 <span className="font-bold">{adminStats.cpu}%</span>
 </div>
 <div className="h-1.5 bg-structure-gray">
 <div className="h-full bg-brand-accent transition-all duration-500" style={{ width: `${adminStats.cpu}%` }}></div>
 </div>
 </div>

 <div className="space-y-2">
 <div className="flex justify-between font-mono-ui text-[10px] uppercase">
 <span>DATABASE_LOAD</span>
 <span className="font-bold">{adminStats.dbLoad}%</span>
 </div>
 <div className="h-1.5 bg-structure-gray">
 <div className="h-full bg-brand-accent transition-all duration-500" style={{ width: `${adminStats.dbLoad}%` }}></div>
 </div>
 </div>

 <div className="space-y-2">
 <div className="flex justify-between font-mono-ui text-[10px] uppercase">
 <span>EDGE_LATENCY</span>
 <span className="font-bold">{adminStats.latency}MS</span>
 </div>
 <div className="h-1.5 bg-structure-gray">
 <div className="h-full bg-brand-accent transition-all duration-500" style={{ width: `${Math.min(100, (adminStats.latency / 200) * 100)}%` }}></div>
 </div>
 </div>

 <div className="border-t border-structure-gray pt-4 mt-auto font-mono-ui text-[9px] text-on-surface-variant uppercase leading-loose">
 NODE CHANNELS: TOKYO / NYC / BERLIN
 </div>
 </div>
 </div>
 </div>

 {/* Transactions Log Section */}
 <section className="space-y-6">
 <div className="flex justify-between items-end border-b border-structure-gray pb-4">
 <h3 className="font-syne text-lg uppercase text-pure-white">RECENT_TRANSACTIONS</h3>
 <span className="font-mono-ui text-[10px] text-on-surface-variant">ORDERS RECORDED ON EDGE STORAGE</span>
 </div>
 
 <div className="overflow-x-auto border border-structure-gray">
 <table className="w-full text-left font-mono-ui text-xs">
 <thead className="bg-structure-gray text-on-secondary-container">
 <tr>
 <th className="p-4 border-r border-structure-gray uppercase font-bold">ORDER_ID</th>
 <th className="p-4 border-r border-structure-gray uppercase font-bold">CUSTOMER</th>
 <th className="p-4 border-r border-structure-gray uppercase font-bold">PRODUCT_SPECIMENS</th>
 <th className="p-4 border-r border-structure-gray uppercase font-bold text-right">TOTAL</th>
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
 <td className="p-4 border-r border-structure-gray text-pure-white uppercase">{order.customer}</td>
 <td className="p-4 border-r border-structure-gray text-on-secondary-container truncate max-w-xs">
 {order.productClass}
 </td>
 <td className="p-4 border-r border-structure-gray text-right font-bold text-pure-white">${order.total.toFixed(2)}</td>
 <td className="p-4 text-center">
 <span className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase ${
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
 </section>
 </div>
 </main>

 {/* Command Palette Modal overlay */}
 {cmdOpen && (
 <div className="fixed inset-0 bg-void-black/95 z-50 flex items-center justify-center p-6" onClick={toggleCmdPalette}>
 <div className="w-full max-w-xl border border-brand-accent bg-background p-6 space-y-4" onClick={e => e.stopPropagation()}>
 <div className="flex justify-between items-center border-b border-structure-gray pb-3">
 <span className="font-mono-ui text-xs text-brand-accent font-bold">STREET EMOTION / CMD SYSTEM v1.0.4</span>
 <button onClick={toggleCmdPalette} className="material-symbols-outlined text-sm hover:text-brand-accent">close</button>
 </div>
 <input 
 type="text" 
 autoFocus
 placeholder="ENTER SYSTEM DIRECTIVES..."
 className="w-full bg-void-black border border-structure-gray p-4 font-mono-ui text-sm focus:border-brand-accent focus:ring-0 uppercase text-pure-white"
 />
 <div className="text-[10px] font-mono-ui text-on-surface-variant uppercase space-y-1">
 <p>SYSTEM NODE: CONNECTED TO EDGE CDNS DIRECTIVES</p>
 <p>COMMANDS AVAILABLE: /CLEAR_STATS, /REBOOT_NODES, /TRIGGER_DROP</p>
 </div>
 </div>
 </div>
 )}
 </div>
 );
}
