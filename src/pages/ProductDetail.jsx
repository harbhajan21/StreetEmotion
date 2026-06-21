import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function ProductDetail() {
 const { id } = useParams();
 const navigate = useNavigate();
 const { products, addToCart } = useContext(ShopContext);
 
 const [product, setProduct] = useState(null);
 const [selectedSize, setSelectedSize] = useState('M');
 const [activeAccordion, setActiveAccordion] = useState('');
 const [addedNotify, setAddedNotify] = useState(false);

 useEffect(() => {
 const found = products.find(p => p.id === id);
 if (found) {
 setProduct(found);
 // Preselect first size if available
 if (found.sizes && found.sizes.length > 0) {
 setSelectedSize(found.sizes[0]);
 }
 }
 }, [id, products]);

 if (!product) {
 return (
 <div className="min-h-screen bg-background flex flex-col items-center justify-center text-pure-white p-8">
 <span className="material-symbols-outlined text-6xl text-structure-gray mb-4">search_off</span>
 <h2 className="font-display-lg text-2xl uppercase mb-2 font-bold">PRODUCT NOT FOUND</h2>
 <p className="font-mono-ui text-xs text-on-surface-variant mb-6 text-center max-w-xs">
 The requested product could not be found or is no longer available.
 </p>
 <Link to="/products" className="border border-brand-accent text-brand-accent px-6 py-3 font-mono-ui text-xs uppercase hover:bg-brand-accent hover:text-void-black transition-all font-bold">
 CONTINUE SHOPPING
 </Link>
 </div>
 );
 }

 const handleAddToCart = () => {
 addToCart(product, selectedSize);
 setAddedNotify(true);
 setTimeout(() => {
 setAddedNotify(false);
 }, 3000);
 };

 const toggleAccordion = (name) => {
 setActiveAccordion(prev => prev === name ? '' : name);
 };

 const isSoldOut = product.stock === 0;

 return (
 <div className="min-h-screen bg-background text-pure-white">
 {/* Category Sidebar Navigation Portal - Desktop */}
 <aside className="hidden lg:flex fixed left-0 top-[65px] h-[calc(100vh-65px)] flex-col border-r border-structure-gray z-40 bg-background w-64">
 <div className="p-6 border-b border-structure-gray">
 <h3 className="font-headline-lg text-[24px] text-pure-white uppercase font-bold">CATEGORIES</h3>
 </div>
 <div className="flex flex-col flex-grow font-bold">
 <Link to="/products" className="text-pure-white p-4 border-b border-structure-gray font-mono-ui uppercase hover:bg-structure-gray transition-all">ALL PRODUCTS</Link>
 <Link to="/products?category=MEN" className={`p-4 border-b border-structure-gray font-mono-ui uppercase hover:bg-structure-gray transition-all ${product.category === 'MEN' ? 'text-brand-accent' : ''}`}>MEN</Link>
 <Link to="/products?category=WOMEN" className={`p-4 border-b border-structure-gray font-mono-ui uppercase hover:bg-structure-gray transition-all ${product.category === 'WOMEN' ? 'text-brand-accent' : ''}`}>WOMEN</Link>
 <Link to="/products?category=BOYS" className={`p-4 border-b border-structure-gray font-mono-ui uppercase hover:bg-structure-gray transition-all ${product.category === 'BOYS' ? 'text-brand-accent' : ''}`}>BOYS</Link>
 <Link to="/products?category=GIRLS" className={`p-4 border-b border-structure-gray font-mono-ui uppercase hover:bg-structure-gray transition-all ${product.category === 'GIRLS' ? 'text-brand-accent' : ''}`}>GIRLS</Link>
 <Link to="/products?category=ACCESSORIES" className={`p-4 border-b border-structure-gray font-mono-ui uppercase hover:bg-structure-gray transition-all ${product.category === 'ACCESSORIES' ? 'text-brand-accent' : ''}`}>ACCESSORIES</Link>
 </div>
 <div className="p-4 border-t border-structure-gray">
 <button onClick={() => navigate('/products')} className="w-full text-left font-mono-ui text-xs uppercase underline tracking-widest hover:text-brand-accent">
 BACK TO ALL
 </button>
 </div>
 </aside>

 {/* Main Content Grid */}
 <main className="lg:ml-64 flex flex-col md:flex-row">
 {/* Left: Image Stack */}
 <section className="w-full md:w-2/3 border-b md:border-b-0 md:border-r border-structure-gray flex flex-col">
 <div className="w-full border-b border-structure-gray">
 <img 
 className="w-full aspect-[3/4] object-cover brightness-90 hover:-0 transition-all duration-700" 
 alt={`${product.name} Front Details`}
 src={product.image}
 />
 </div>
 <div className="w-full border-b border-structure-gray">
 {/* Alt image 2: Mocked matching detail image */}
 <img 
 className="w-full aspect-[3/4] object-cover brightness-90 hover:-0 transition-all duration-700" 
 alt={`${product.name} Texture Stitching`}
 src={product.image} // Re-using standard premium image for simplicity & styling consistency
 />
 </div>
 </section>

 {/* Right: Sticky Info Container */}
 <section className="w-full md:w-1/3 p-6 md:p-margin-desktop sticky top-[65px] self-start h-[calc(100vh-65px)] overflow-y-auto flex flex-col gap-8">
 <div className="flex flex-col gap-2">
 <div className="flex justify-between items-start gap-4">
 <h2 className="font-headline-lg text-2xl md:text-headline-lg uppercase leading-none max-w-[70%] font-bold">
 {product.name}
 </h2>
 <span className="font-display-lg text-[20px] md:text-[24px] text-pure-white font-bold">
 ${product.price.toFixed(2)}
 </span>
 </div>
 <p className="font-mono-ui text-xs text-on-surface-variant uppercase tracking-widest font-bold">
 {product.fit} | {product.color}
 </p>
 <div className="flex gap-2 mt-2 flex-wrap">
 <span className="bg-structure-gray/50 border border-structure-gray text-pure-white text-[10px] uppercase px-2 py-1 font-bold tracking-widest flex items-center gap-1">
 <span className="material-symbols-outlined text-[14px]">fitness_center</span>
 {product.fit.toUpperCase()}
 </span>
 <span className="bg-structure-gray/50 border border-structure-gray text-pure-white text-[10px] uppercase px-2 py-1 font-bold tracking-widest flex items-center gap-1">
 <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
 PREMIUM FABRIC
 </span>
 </div>
 </div>

 {/* Size Select */}
 {!isSoldOut ? (
 <div className="flex flex-col gap-4">
 <div className="flex justify-between items-end">
 <label className="font-mono-ui text-xs uppercase text-pure-white font-bold">SELECT SIZE</label>
 <span className="font-label-caps text-[10px] uppercase text-brand-accent underline underline-offset-4 tracking-widest cursor-pointer hover:text-pure-white">
 [ SIZE GUIDE ]
 </span>
 </div>
 <div className="grid grid-cols-5 gap-px bg-structure-gray border border-structure-gray">
 {product.sizes.map(size => (
 <button 
 key={size}
 onClick={() => setSelectedSize(size)}
 className={`bg-background aspect-square flex items-center justify-center font-mono-ui font-bold hover:bg-structure-gray transition-all ${selectedSize === size ? 'active-size' : ''}`}
 >
 {size}
 </button>
 ))}
 </div>
 </div>
 ) : (
 <div className="border border-structure-gray p-4 bg-structure-gray/20 flex items-center gap-3">
 <span className="material-symbols-outlined text-on-surface-variant">inventory_2</span>
 <div>
 <p className="font-mono-ui text-xs uppercase font-bold text-on-surface-variant">OUT OF STOCK</p>
 <p className="text-[10px] text-on-surface-variant mt-0.5">This item is currently unavailable.</p>
 </div>
 </div>
 )}

 {/* Add Notification */}
 {addedNotify && (
 <div className="border border-brand-accent p-4 bg-brand-accent/5 flex items-center justify-between animate-fadeIn">
 <div className="flex items-center gap-3">
 <span className="material-symbols-outlined text-brand-accent">check_circle</span>
 <span className="font-mono-ui text-xs uppercase">ADDED TO SHOPPING BAG</span>
 </div>
 <Link to="/cart" className="font-mono-ui text-[10px] text-brand-accent underline uppercase font-bold">View Bag</Link>
 </div>
 )}

 {/* Action Trigger */}
 <button 
 disabled={isSoldOut}
 onClick={handleAddToCart}
 className={`w-full py-6 font-display-lg text-lg uppercase tracking-tighter transition-all duration-300 ${isSoldOut ? 'bg-structure-gray text-on-surface-variant cursor-not-allowed' : 'bg-brand-accent text-pure-white hover:brightness-110 active:scale-[0.98] font-bold'}`}
 >
 {isSoldOut ? 'SOLD OUT' : 'ADD TO BAG'}
 </button>

 {/* Accordion Sections */}
 <div className="flex flex-col mt-4 gap-2">
 {/* Accordion 1 */}
 <div className={`accordion-item bg-structure-gray/20 px-5 rounded-sm border border-structure-gray/50 ${activeAccordion === 'fabric' ? 'accordion-open' : ''}`}>
 <button 
 onClick={() => toggleAccordion('fabric')}
 className="w-full py-5 flex justify-between items-center group text-left"
 >
 <span className="font-mono-ui text-sm uppercase tracking-widest group-hover:text-brand-accent transition-all font-bold">
 DESCRIPTION
 </span>
 <span className="material-symbols-outlined transition-transform duration-300 chevron">
 expand_more
 </span>
 </button>
 <div className="accordion-content">
 <div className="pb-5 text-xs text-on-surface-variant font-body-md leading-relaxed space-y-2">
 <p>{product.description}</p>
 <p className="mt-2">- {product.fit}</p>
 <p>- Premium sweat-wicking materials</p>
 <p>- 4-Way stretch for ultimate performance</p>
 <p>- Model is 6'0" and wears size M</p>
 <p className="mt-4 text-[10px] italic">SKU: {product.id.toUpperCase()}</p>
 </div>
 </div>
 </div>

 {/* Accordion 2 */}
 <div className={`accordion-item bg-structure-gray/20 px-5 rounded-sm border border-structure-gray/50 ${activeAccordion === 'shipping' ? 'accordion-open' : ''}`}>
 <button 
 onClick={() => toggleAccordion('shipping')}
 className="w-full py-5 flex justify-between items-center group text-left"
 >
 <span className="font-mono-ui text-sm uppercase tracking-widest group-hover:text-brand-accent transition-all font-bold">
 DELIVERY &amp; RETURNS
 </span>
 <span className="material-symbols-outlined transition-transform duration-300 chevron">
 expand_more
 </span>
 </button>
 <div className="accordion-content">
 <div className="pb-5 text-xs text-on-surface-variant font-body-md leading-relaxed">
 <p className="font-bold text-pure-white">Free Standard Delivery over $100</p>
 <p className="mt-1 mb-4">Standard Delivery: 3-5 working days.</p>
 <p className="font-bold text-pure-white">Free Returns</p>
 <p className="mt-1">You can return your order for any reason, free of charge, within 30 days.</p>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 </div>
 );
}
