import React, { useContext, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function ProductList() {
 const { products, addToCart } = useContext(ShopContext);
 const [searchParams, setSearchParams] = useSearchParams();
 
 // URL Filter Parameters
 const catParam = searchParams.get('category');
 const searchParam = searchParams.get('search');

 // Filter States
 const [selectedCategory, setSelectedCategory] = useState(catParam || 'ALL');
 const [selectedSize, setSelectedSize] = useState('');
 const [selectedFits, setSelectedFits] = useState([]);
 const [selectedStyles, setSelectedStyles] = useState([]);
 const [selectedColors, setSelectedColors] = useState([]);
 const [sortBy, setSortBy] = useState('RECOMMENDED');
 const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

 // Sync category state with URL parameter changes
 useEffect(() => {
 setSelectedCategory(catParam || 'ALL');
 }, [catParam]);

 const handleFitToggle = (fit) => {
 setSelectedFits(prev => 
 prev.includes(fit) ? prev.filter(f => f !== fit) : [...prev, fit]
 );
 };

 const handleStyleToggle = (style) => {
 setSelectedStyles(prev => 
 prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
 );
 };

 const handleColorToggle = (color) => {
 setSelectedColors(prev =>
 prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
 );
 };

 const resetFilters = () => {
 setSelectedCategory('ALL');
 setSelectedSize('');
 setSelectedFits([]);
 setSelectedStyles([]);
 setSelectedColors([]);
 setSortBy('RECOMMENDED');
 setSearchParams({});
 };

 // Filter Logic
 const filteredProducts = products.filter(product => {
 // Category check
 if (selectedCategory !== 'ALL' && product.category !== selectedCategory) {
 return false;
 }
 // Search query check
 if (searchParam && !product.name.toLowerCase().includes(searchParam.toLowerCase()) && !product.description.toLowerCase().includes(searchParam.toLowerCase())) {
 return false;
 }
 // Size check
 if (selectedSize && !product.sizes.includes(selectedSize)) {
 return false;
 }
 // Fit check
 if (selectedFits.length > 0 && !selectedFits.includes(product.fit)) {
 return false;
 }
 // Style check
 if (selectedStyles.length > 0 && !selectedStyles.includes(product.style)) {
 return false;
 }
 // Color check
 if (selectedColors.length > 0 && !selectedColors.includes(product.color)) {
 return false;
 }
 return true;
 });

 // Sort Logic
 const sortedProducts = [...filteredProducts].sort((a, b) => {
 if (sortBy === 'PRICE LOW-HIGH') {
 return a.price - b.price;
 }
 if (sortBy === 'PRICE HIGH-LOW') {
 return b.price - a.price;
 }
 if (sortBy === 'NEWEST') {
 return b.stock - a.stock; // Mocking sorting by newer items
 }
 return 0; // RECOMMENDED keeps initial ordering
 });

 return (
    <div className="flex bg-background min-h-screen text-pure-white relative">
      {/* SIDE NAVIGATION (FILTERS) - DESKTOP */}
      <aside className="hidden md:flex flex-col w-64 sticky left-0 top-[65px] h-[calc(100vh-65px)] border-r border-structure-gray bg-background z-40 overflow-y-auto">
 <div className="p-6 border-b border-structure-gray">
 <h2 className="font-display-lg text-lg uppercase tracking-tighter text-pure-white font-bold">FILTERS</h2>
 </div>
 
 {/* Navigation Tabs */}
 <nav className="flex flex-col border-b border-structure-gray">
 <button 
 onClick={() => { setSelectedCategory('ALL'); setSearchParams({}); }}
 className={`p-4 flex items-center gap-3 font-mono-ui text-mono-ui uppercase text-left transition-all ${selectedCategory === 'ALL' ? 'bg-brand-accent text-void-black font-bold' : 'text-pure-white hover:bg-structure-gray'}`}
 >
 ALL PRODUCTS
 </button>
 <button 
 onClick={() => { setSelectedCategory('MEN'); setSearchParams({ category: 'MEN' }); }}
 className={`p-4 flex items-center gap-3 font-mono-ui text-mono-ui uppercase text-left transition-all ${selectedCategory === 'MEN' ? 'bg-brand-accent text-void-black font-bold' : 'text-pure-white hover:bg-structure-gray'}`}
 >
 MEN'S
 </button>
 <button 
 onClick={() => { setSelectedCategory('WOMEN'); setSearchParams({ category: 'WOMEN' }); }}
 className={`p-4 flex items-center gap-3 font-mono-ui text-mono-ui uppercase text-left transition-all ${selectedCategory === 'WOMEN' ? 'bg-brand-accent text-void-black font-bold' : 'text-pure-white hover:bg-structure-gray'}`}
 >
 WOMEN'S
 </button>
 <button 
 onClick={() => { setSelectedCategory('BOYS'); setSearchParams({ category: 'BOYS' }); }}
 className={`p-4 flex items-center gap-3 font-mono-ui text-mono-ui uppercase text-left transition-all ${selectedCategory === 'BOYS' ? 'bg-brand-accent text-void-black font-bold' : 'text-pure-white hover:bg-structure-gray'}`}
 >
 BOYS
 </button>
 <button 
 onClick={() => { setSelectedCategory('GIRLS'); setSearchParams({ category: 'GIRLS' }); }}
 className={`p-4 flex items-center gap-3 font-mono-ui text-mono-ui uppercase text-left transition-all ${selectedCategory === 'GIRLS' ? 'bg-brand-accent text-void-black font-bold' : 'text-pure-white hover:bg-structure-gray'}`}
 >
 GIRLS
 </button>
 <button 
 onClick={() => { setSelectedCategory('ACCESSORIES'); setSearchParams({ category: 'ACCESSORIES' }); }}
 className={`p-4 flex items-center gap-3 font-mono-ui text-mono-ui uppercase text-left transition-all ${selectedCategory === 'ACCESSORIES' ? 'bg-brand-accent text-void-black font-bold' : 'text-pure-white hover:bg-structure-gray'}`}
 >
 ACCESSORIES
 </button>
 </nav>

 {/* Technical Filters */}
 <div className="p-6 space-y-8">
 {/* Size Filter */}
 <div className="space-y-3">
 <h3 className="font-mono-ui text-xs font-bold uppercase tracking-widest text-brand-accent">SIZE</h3>
 <div className="grid grid-cols-3 gap-2">
 {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
 <button 
 key={size}
 onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
 className={`border py-2 font-mono-ui text-xs transition-colors font-bold ${selectedSize === size ? 'border-brand-accent text-brand-accent bg-void-black' : 'border-structure-gray hover:border-brand-accent hover:text-brand-accent'}`}
 >
 {size}
 </button>
 ))}
 </div>
 </div>

 {/* Fit Filter */}
 <div className="space-y-3">
 <h3 className="font-mono-ui text-xs font-bold uppercase tracking-widest text-brand-accent">FIT</h3>
 <div className="flex flex-col gap-2">
 {['SLIM FIT', 'REGULAR FIT', 'OVERSIZED', 'ONE SIZE'].map(fit => (
 <label key={fit} className="flex items-center gap-2 cursor-pointer group">
 <input 
 type="checkbox" 
 checked={selectedFits.includes(fit)}
 onChange={() => handleFitToggle(fit)}
 className="hidden" 
 />
 <span className={`w-4 h-4 border transition-all ${selectedFits.includes(fit) ? 'bg-brand-accent border-brand-accent' : 'border-structure-gray'}`}></span>
 <span className="font-mono-ui text-[10px] uppercase text-on-surface-variant group-hover:text-pure-white font-bold">
 {fit}
 </span>
 </label>
 ))}
 </div>
 </div>

 {/* Style Filter */}
 <div className="space-y-3">
 <h3 className="font-mono-ui text-xs font-bold uppercase tracking-widest text-brand-accent">STYLE</h3>
 <div className="flex flex-col gap-2">
 {['T-SHIRTS', 'HOODIES', 'LEGGINGS', 'SPORTS BRAS', 'BAGS', 'EQUIPMENT'].map(style => (
 <label key={style} className="flex items-center gap-2 cursor-pointer group">
 <input 
 type="checkbox" 
 checked={selectedStyles.includes(style)}
 onChange={() => handleStyleToggle(style)}
 className="hidden" 
 />
 <span className={`w-4 h-4 border transition-all ${selectedStyles.includes(style) ? 'bg-brand-accent border-brand-accent' : 'border-structure-gray'}`}></span>
 <span className="font-mono-ui text-[10px] uppercase text-on-surface-variant group-hover:text-pure-white font-bold">
 {style}
 </span>
 </label>
 ))}
 </div>
 </div>

 {/* Color Filter */}
 <div className="space-y-3">
 <h3 className="font-mono-ui text-xs font-bold uppercase tracking-widest text-brand-accent">COLOR</h3>
 <div className="flex gap-3">
 {[
 { name: 'VOID BLACK', hex: 'bg-void-black border-structure-gray' },
 { name: 'PURE WHITE', hex: 'bg-pure-white border-structure-gray' },
 { name: 'COLD GREY', hex: 'bg-[#6B7280] border-structure-gray' },
 { name: 'ACID LIME', hex: 'bg-brand-accent border-structure-gray' }
 ].map(color => (
 <button 
 key={color.name}
 onClick={() => handleColorToggle(color.name)}
 className={`w-6 h-6 rounded-none ${color.hex} border ${selectedColors.includes(color.name) ? 'ring-2 ring-brand-accent border-void-black' : ''}`}
 title={color.name}
 />
 ))}
 </div>
 </div>
 </div>

 <div className="mt-auto p-6 border-t border-structure-gray">
 <button 
 onClick={resetFilters}
 className="w-full bg-transparent border border-structure-gray py-4 font-mono-ui text-xs uppercase tracking-widest hover:bg-pure-white hover:text-void-black transition-all font-bold"
 >
 RESET ALL
 </button>
 </div>
 </aside>

 {/* MOBILE FILTERS SIDE PANEL Drawer */}
 {mobileFilterOpen && (
 <div className="md:hidden fixed inset-0 z-50 bg-background/95 overflow-y-auto p-6 flex flex-col gap-6">
 <div className="flex justify-between items-center border-b border-structure-gray pb-4">
 <h2 className="font-display-lg text-lg uppercase text-brand-accent">FILTERS</h2>
 <button onClick={() => setMobileFilterOpen(false)} className="material-symbols-outlined text-pure-white text-2xl">close</button>
 </div>
 
 <div className="space-y-6">
 <div className="space-y-3">
 <h3 className="font-mono-ui text-xs font-bold text-brand-accent">CATEGORIES</h3>
 <div className="flex flex-wrap gap-2">
 {['ALL', 'MEN', 'WOMEN', 'BOYS', 'GIRLS', 'ACCESSORIES'].map(cat => (
 <button 
 key={cat} 
 onClick={() => { setSelectedCategory(cat); if (cat === 'ALL') setSearchParams({}); else setSearchParams({ category: cat }); }}
 className={`px-4 py-2 border font-mono-ui text-xs uppercase ${selectedCategory === cat ? 'bg-brand-accent text-void-black border-brand-accent font-bold' : 'border-structure-gray'}`}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 <div className="space-y-3">
 <h3 className="font-mono-ui text-xs font-bold text-brand-accent">SIZES</h3>
 <div className="flex flex-wrap gap-2">
 {['S', 'M', 'L', 'XL'].map(size => (
 <button 
 key={size}
 onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
 className={`px-4 py-2 border font-mono-ui text-xs ${selectedSize === size ? 'bg-brand-accent text-void-black border-brand-accent font-bold' : 'border-structure-gray'}`}
 >
 {size}
 </button>
 ))}
 </div>
 </div>

 <div className="space-y-3">
 <h3 className="font-mono-ui text-xs font-bold text-brand-accent">FIT</h3>
 <div className="flex flex-wrap gap-2">
 {['SLIM FIT', 'REGULAR FIT', 'OVERSIZED'].map(fit => (
 <button 
 key={fit}
 onClick={() => handleFitToggle(fit)}
 className={`px-4 py-2 border font-mono-ui text-xs uppercase ${selectedFits.includes(fit) ? 'bg-brand-accent text-void-black border-brand-accent font-bold' : 'border-structure-gray'}`}
 >
 {fit}
 </button>
 ))}
 </div>
 </div>
 </div>

 <div className="mt-auto flex gap-4 pt-8">
 <button onClick={resetFilters} className="flex-1 py-4 border border-structure-gray font-mono-ui text-xs uppercase font-bold">RESET</button>
 <button onClick={() => setMobileFilterOpen(false)} className="flex-1 py-4 bg-brand-accent text-void-black font-mono-ui text-xs uppercase font-bold">APPLY</button>
 </div>
 </div>
 )}

 {/* MAIN PRODUCT GRID CANVAS */}
      <main className="flex-1 bg-background w-full overflow-hidden">
        {/* Grid Header / Sorting */}
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 md:px-margin-desktop py-8 border-b border-structure-gray bg-void-black gap-4">
 <div className="flex items-baseline gap-4">
 <h1 className="font-display-lg text-2xl md:text-4xl uppercase tracking-tighter">
 {searchParam ? `SEARCH: "${searchParam}"` : `${selectedCategory} COLLECTION`}
 </h1>
 <span className="font-mono-ui text-xs text-on-surface-variant">{sortedProducts.length} ITEMS FOUND</span>
 </div>
 
 <div className="flex items-center justify-between w-full sm:w-auto gap-4">
 <button 
 onClick={() => setMobileFilterOpen(true)}
 className="md:hidden border border-structure-gray px-4 py-2 font-mono-ui text-xs uppercase flex items-center gap-2"
 >
 <span className="material-symbols-outlined text-sm">filter_alt</span> FILTERS
 </button>

 <div className="flex items-center gap-2">
 <span className="font-mono-ui text-[10px] uppercase tracking-widest text-on-surface-variant">SORT BY:</span>
 <select 
 value={sortBy}
 onChange={(e) => setSortBy(e.target.value)}
 className="bg-transparent border-none font-mono-ui text-xs uppercase text-brand-accent focus:ring-0 cursor-pointer p-0"
 >
 <option value="RECOMMENDED" className="bg-void-black text-pure-white">RECOMMENDED</option>
 <option value="NEWEST" className="bg-void-black text-pure-white">NEWEST RELEASES</option>
 <option value="PRICE LOW-HIGH" className="bg-void-black text-pure-white">PRICE LOW-HIGH</option>
 <option value="PRICE HIGH-LOW" className="bg-void-black text-pure-white">PRICE HIGH-LOW</option>
 </select>
 </div>
 </div>
 </div>

 {/* THE DENSE GRID */}
 {sortedProducts.length === 0 ? (
 <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
 <span className="material-symbols-outlined text-6xl text-structure-gray mb-4">search_off</span>
 <h3 className="font-display-lg text-xl uppercase mb-2 font-bold">NO PRODUCTS FOUND</h3>
 <p className="font-mono-ui text-xs text-on-surface-variant max-w-sm">
 We couldn't find any items matching your selected filters. Try clearing some options to see more products.
 </p>
 <button 
 onClick={resetFilters} 
 className="mt-6 border border-brand-accent text-brand-accent px-6 py-3 font-mono-ui text-xs uppercase hover:bg-brand-accent hover:text-void-black transition-all"
 >
 Reset Filters
 </button>
 </div>
 ) : (
 <div className="product-grid">
 {sortedProducts.map(product => {
 const isSoldOut = product.stock === 0;
 return (
 <article key={product.id} className={`product-card group relative border-structure-gray border-b sm:border-r ${isSoldOut ? 'opacity-60' : ''}`}>
 <div className="aspect-[3/4] relative overflow-hidden bg-surface-container">
 <Link to={`/product/${product.id}`} className="block w-full h-full">
 <img 
 className="w-full h-full object-cover transition-all duration-500 group-hover:-0 group-hover:scale-102" 
 alt={product.name} 
 src={product.image}
 />
 </Link>

 {/* Quick Size Overlay */}
 {!isSoldOut && (
 <div className="absolute bottom-0 left-0 w-full bg-void-black/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-brand-accent flex justify-center gap-4 py-3 z-20">
 {product.sizes.map(size => (
 <button 
 key={size}
 onClick={() => addToCart(product, size)}
 className="font-mono-ui text-xs text-pure-white hover:text-brand-accent font-bold"
 >
 {size}
 </button>
 ))}
 </div>
 )}

 {/* New/Sold Out Tags */}
 {isSoldOut ? (
 <div className="absolute top-4 left-4 bg-void-black text-alert-red border border-alert-red font-mono-ui text-[10px] font-bold px-2 py-1 uppercase z-10">
 SOLD OUT
 </div>
 ) : (
 product.stock <= 5 && (
 <div className="absolute top-4 left-4 bg-brand-accent text-void-black font-mono-ui text-[10px] font-bold px-2 py-1 uppercase z-10">
 FEW LEFT
 </div>
 )
 )}
 </div>
 
 <div className="p-6 space-y-2">
 <span className="font-mono-ui text-[10px] text-on-surface-variant uppercase tracking-widest block font-bold">
 {product.fit} | {product.style}
 </span>
 <div className="flex justify-between items-start gap-4">
 <Link to={`/product/${product.id}`} className="font-headline-lg text-lg uppercase tracking-tight leading-none group-hover:text-brand-accent transition-colors block">
 {product.name}
 </Link>
 <span className="font-mono-ui text-sm font-bold text-brand-accent">${product.price.toFixed(2)}</span>
 </div>
 <p className="text-on-surface-variant text-[10px] font-mono-ui uppercase mt-1">{product.color}</p>
 </div>
 </article>
 );
 })}
 </div>
 )}
 </main>
 </div>
 );
}
