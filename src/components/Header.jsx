import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import LogoImg from '../assets/Logo.png';

export default function Header() {
 const { cart, user, toasts, updateCartQuantity, removeFromCart, cartTotal, theme, toggleTheme, showToast, comingSoonOpen, setComingSoonOpen } = useContext(ShopContext);
 const [searchQuery, setSearchQuery] = useState('');
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
 const navigate = useNavigate();
 const location = useLocation();

 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 50);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const searchParams = new URLSearchParams(location.search);
 const currentCategory = searchParams.get('category');

 const getNavLinkClass = (category) => {
 const isActive = location.pathname === '/products' && currentCategory === category;
 return `pb-1 transition-colors duration-200 border-b ${isActive ? 'text-brand-accent border-brand-accent font-bold' : 'text-pure-white border-transparent hover:text-brand-accent'}`;
 };

 const getDropLinkClass = () => {
 const isActive = location.pathname === '/products' && !currentCategory;
 return `pb-1 transition-colors duration-200 border-b ${isActive ? 'text-brand-accent border-brand-accent font-bold' : 'text-pure-white border-transparent hover:text-brand-accent'}`;
 };

 const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

 const handleSearchSubmit = (e) => {
 e.preventDefault();
 if (searchQuery.trim()) {
 navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
 setMobileMenuOpen(false);
 }
 };

 return (
 <>
 <header className={`fixed w-full top-0 z-50 transition-all duration-300 flex justify-center ${scrolled ? 'pt-4 px-4 pointer-events-none' : 'pt-0 px-0'}`}>
 <div className={`w-full flex justify-between items-center transition-all duration-300 pointer-events-auto ${scrolled ? 'max-w-[1200px] bg-void-black/95 backdrop-blur-md border border-structure-gray rounded-full px-6 py-2 shadow-2xl' : 'bg-background border-b border-structure-gray px-4 md:px-margin-desktop py-4'}`}>
 <div className="flex items-center gap-4 md:gap-8">
 {/* Hamburger Menu Toggle (Mobile) */}
 <button 
 onClick={() => setMobileMenuOpen(true)}
 className="md:hidden hover:text-brand-accent text-pure-white transition-colors"
 >
 <span className="material-symbols-outlined text-2xl">menu</span>
 </button>

 <Link to="/" className="flex items-center group select-none flex-shrink-0">
 <img 
 src={LogoImg} 
 alt="Dream Business Logo" 
 className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 drop-shadow-md rounded-full"
 />
 </Link>

 <nav className="hidden md:flex gap-6 font-mono-ui text-mono-ui uppercase tracking-widest font-bold">
 <Link to="/products?category=MEN" className={getNavLinkClass('MEN')}>
 MEN
 </Link>
 <button onClick={() => setComingSoonOpen(true)} className={getNavLinkClass('WOMEN')}>
 WOMEN
 </button>
 <button onClick={() => setComingSoonOpen(true)} className={getNavLinkClass('BOYS')}>
 BOYS
 </button>
 <button onClick={() => setComingSoonOpen(true)} className={getNavLinkClass('GIRLS')}>
 GIRLS
 </button>
 <button onClick={() => setComingSoonOpen(true)} className={getNavLinkClass('ACCESSORIES')}>
 ACCESSORIES
 </button>
 </nav>
 </div>

 <div className="flex items-center gap-3 md:gap-6">
 {/* Search Bar */}
 <form onSubmit={handleSearchSubmit} className="relative hidden sm:block">
 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
 search
 </span>
 <input 
 type="text" 
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="bg-void-black border border-structure-gray pl-9 pr-4 py-1.5 text-xs font-mono-ui uppercase focus:border-brand-accent focus:ring-0 w-36 md:w-48 transition-all text-pure-white placeholder-on-surface-variant/50 rounded-full" 
 placeholder="SEARCH RAW VIBES" 
 />
 </form>

 <div className="flex items-center gap-4">
 <Link to="/signup" className="hidden lg:flex bg-[#32CD32] text-[#1A1A1A] hover:brightness-110 px-6 py-2 font-mono-ui text-[10px] uppercase tracking-widest transition-all font-bold rounded-full shadow-md">
 JOIN WAITLIST
 </Link>
 <Link to="/products" className="hover:text-brand-accent transition-colors">
 <span className="material-symbols-outlined">favorite</span>
 </Link>
 <Link to="/profile" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
 <span className="material-symbols-outlined">person</span>
 <span className="hidden lg:inline font-mono-ui text-[10px] text-on-surface-variant group-hover:text-brand-accent">
 {user.username}
 </span>
 </Link>
 <button 
 onClick={() => setCartDrawerOpen(true)}
 className="hover:text-brand-accent transition-colors relative focus:outline-none"
 >
 <span className="material-symbols-outlined">shopping_bag</span>
 {totalCartItems > 0 && (
 <span className="absolute -top-2 -right-2 bg-brand-accent text-on-surface text-[10px] font-bold px-1.5 rounded-sm animate-pulse">
 {totalCartItems}
 </span>
 )}
 </button>
 </div>
 </div>
 </div>
 </header>

 {/* MOBILE MENU SLIDE-IN DRAWER */}
 {mobileMenuOpen && (
 <div className="fixed inset-0 z-[100] md:hidden">
 {/* Backdrop overlay */}
 <div 
 className="fixed inset-0 bg-void-black/80 backdrop-blur-sm"
 onClick={() => setMobileMenuOpen(false)}
 ></div>
 {/* Content container */}
 <div className="fixed left-0 top-0 h-full w-[280px] bg-void-black border-r border-structure-gray p-6 flex flex-col gap-8 shadow-2xl animate-slide-in-left">
 <div className="flex justify-between items-center border-b border-structure-gray pb-4">
 <span className="font-display-xl text-lg font-bold text-brand-accent">NAVIGATION</span>
 <button onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent text-pure-white transition-colors">
 <span className="material-symbols-outlined">close</span>
 </button>
 </div>

 <form onSubmit={handleSearchSubmit} className="relative w-full">
 <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
 search
 </span>
 <input 
 type="text" 
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="bg-void-black border border-structure-gray pl-8 pr-4 py-2 text-xs font-mono-ui uppercase focus:border-brand-accent focus:ring-0 w-full text-pure-white" 
 placeholder="SEARCH ARCHIVE" 
 />
 </form>

 <nav className="flex flex-col gap-6 font-mono-ui text-md uppercase tracking-wider">
 <Link to="/products?category=MEN" onClick={() => setMobileMenuOpen(false)} className="text-pure-white hover:text-brand-accent py-1 border-b border-structure-gray/50 flex justify-between items-center font-bold">
 <span>MEN</span>
 <span className="material-symbols-outlined text-sm">arrow_forward</span>
 </Link>
 <button onClick={() => setComingSoonOpen(true)} className="text-pure-white hover:text-brand-accent py-1 border-b border-structure-gray/50 flex justify-between items-center font-bold w-full">
 <span>WOMEN</span>
 <span className="material-symbols-outlined text-sm">arrow_forward</span>
 </button>
 <button onClick={() => setComingSoonOpen(true)} className="text-pure-white hover:text-brand-accent py-1 border-b border-structure-gray/50 flex justify-between items-center font-bold w-full">
 <span>BOYS</span>
 <span className="material-symbols-outlined text-sm">arrow_forward</span>
 </button>
 <button onClick={() => setComingSoonOpen(true)} className="text-pure-white hover:text-brand-accent py-1 border-b border-structure-gray/50 flex justify-between items-center font-bold w-full">
 <span>GIRLS</span>
 <span className="material-symbols-outlined text-sm">arrow_forward</span>
 </button>
 <button onClick={() => setComingSoonOpen(true)} className="text-pure-white hover:text-brand-accent py-1 border-b border-structure-gray/50 flex justify-between items-center font-bold w-full">
 <span>ACCESSORIES</span>
 <span className="material-symbols-outlined text-sm">arrow_forward</span>
 </button>
 </nav>
 </div>
 </div>
 )}

 {/* SHOPPING BAG SLIDE-IN DRAWER */}
 {cartDrawerOpen && (
 <div className="fixed inset-0 z-[100]">
 {/* Backdrop overlay */}
 <div 
 className="fixed inset-0 bg-void-black/85 backdrop-blur-sm"
 onClick={() => setCartDrawerOpen(false)}
 ></div>
 {/* Drawer container */}
 <div className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-void-black border-l border-structure-gray shadow-2xl flex flex-col z-50 animate-slide-in">
 {/* Header */}
 <div className="p-6 border-b border-structure-gray flex justify-between items-center bg-background">
 <div>
 <h3 className="font-display-lg text-lg uppercase tracking-tight text-pure-white font-bold">YOUR BAG</h3>
 </div>
 <button 
 onClick={() => setCartDrawerOpen(false)}
 className="flex items-center gap-1.5 font-mono-ui text-xs text-pure-white hover:text-brand-accent border border-structure-gray px-3 py-1.5 hover:border-brand-accent transition-all uppercase font-bold"
 >
 <span>CLOSE</span>
 <span className="material-symbols-outlined text-sm">close</span>
 </button>
 </div>

 {/* Items List */}
 <div className="flex-grow overflow-y-auto p-6 space-y-4">
 {cart.length === 0 ? (
 <div className="flex flex-col items-center justify-center h-full text-center p-6">
 <span className="material-symbols-outlined text-5xl text-structure-gray mb-4">shopping_bag</span>
 <p className="font-display-lg text-sm uppercase text-pure-white font-bold">YOUR BAG IS EMPTY</p>
 <p className="font-mono-ui text-[10px] text-on-surface-variant mt-2">There's nothing in your bag right now.</p>
 <button 
 onClick={() => { setCartDrawerOpen(false); navigate('/products'); }}
 className="mt-6 border border-brand-accent text-brand-accent px-6 py-3 font-mono-ui text-xs uppercase hover:bg-brand-accent hover:text-void-black transition-all font-bold"
 >
 SHOP NOW
 </button>
 </div>
 ) : (
 cart.map(item => (
 <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 border border-structure-gray bg-surface-container-lowest relative group">
 <img 
 src={item.image} 
 alt={item.name} 
 className="w-20 h-24 object-cover border border-structure-gray group-hover:-0 transition-all"
 />
 <div className="flex-grow flex flex-col justify-between">
 <div>
 <div className="flex justify-between items-start">
 <h4 className="font-subheading text-xs uppercase text-pure-white">{item.name}</h4>
 <button 
 onClick={() => removeFromCart(item.id, item.size)}
 className="text-on-surface-variant hover:text-alert-red transition-colors"
 >
 <span className="material-symbols-outlined text-lg">delete</span>
 </button>
 </div>
 <p className="font-mono-ui text-[10px] text-brand-accent uppercase mt-1">SIZE: {item.size} // {item.color}</p>
 </div>

 <div className="flex justify-between items-center">
 <div className="flex border border-structure-gray bg-void-black">
 <button 
 onClick={() => updateCartQuantity(item.id, item.size, -1)}
 className="px-2.5 py-1 text-on-surface-variant hover:text-brand-accent font-bold text-xs"
 >
 -
 </button>
 <span className="px-3 py-1 font-mono-ui text-xs text-pure-white self-center">{item.quantity}</span>
 <button 
 onClick={() => updateCartQuantity(item.id, item.size, 1)}
 className="px-2.5 py-1 text-on-surface-variant hover:text-brand-accent font-bold text-xs"
 >
 +
 </button>
 </div>
 <span className="font-mono-ui text-xs text-pure-white font-bold">${(item.price * item.quantity).toFixed(2)}</span>
 </div>
 </div>
 </div>
 ))
 )}
 </div>

 {/* Footer */}
 {cart.length > 0 && (
 <div className="p-6 border-t border-structure-gray bg-void-black space-y-4">
 <div className="flex justify-between items-center">
 <span className="font-mono-ui text-xs text-on-surface-variant uppercase font-bold tracking-widest">SUBTOTAL:</span>
 <span className="font-mono-ui text-lg text-brand-accent font-bold">${cartTotal().toFixed(2)}</span>
 </div>
 <div className="flex flex-col gap-2">
 <button 
 onClick={() => { setCartDrawerOpen(false); navigate('/cart'); }}
 className="w-full bg-brand-accent text-void-black py-4 font-label-caps text-label-caps uppercase font-bold text-center hover:bg-pure-white hover:text-void-black transition-all active:scale-[0.98]"
 >
 CHECKOUT
 </button>
 <button 
 onClick={() => setCartDrawerOpen(false)}
 className="w-full bg-transparent border border-structure-gray py-3.5 font-label-caps text-label-caps text-pure-white uppercase font-bold hover:border-pure-white transition-all text-xs"
 >
 CONTINUE SHOPPING
 </button>
 </div>
 </div>
 )}
 </div>
 </div>
 )}

 {/* TOAST SYSTEM POPUP */}
 <div className="fixed top-20 right-6 z-[200] flex flex-col gap-3 pointer-events-none w-full max-w-sm">
 {toasts.map(toast => (
 <div 
 key={toast.id} 
 className="pointer-events-auto bg-void-black border border-brand-accent p-4 flex items-center justify-between shadow-2xl animate-slide-in relative overflow-hidden"
 >
 <div className="flex items-center gap-3">
 <span className="material-symbols-outlined text-brand-accent">
 {toast.type === 'success' ? 'check_circle' : 'info'}
 </span>
 <span className="font-mono-ui text-[11px] text-pure-white uppercase tracking-wider">{toast.message}</span>
 </div>
 <div className="absolute right-0 top-0 h-full w-1 bg-brand-accent"></div>
 </div>
 ))}
 </div>

 {/* COMING SOON MODAL */}
 {comingSoonOpen && (
 <div className="fixed inset-0 z-[300] flex items-center justify-center">
 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setComingSoonOpen(false)}></div>
 <div className="relative z-10 w-[80vw] md:w-[40vw] max-w-lg min-h-[200px] bg-orange-100 border-2 border-orange-300 shadow-2xl flex flex-col items-center justify-center p-8 animate-slide-in text-center rounded-3xl">
 <span className="material-symbols-outlined text-5xl text-orange-500 mb-4">construction</span>
 <h3 className="font-display-lg text-xl md:text-2xl text-orange-900 uppercase font-bold tracking-wider">COMING SOON.....!</h3>
 <button onClick={() => setComingSoonOpen(false)} className="absolute top-4 right-4 text-orange-500 hover:text-orange-800 transition-colors">
 <span className="material-symbols-outlined">close</span>
 </button>
 </div>
 </div>
 )}
 </>
 );
}
