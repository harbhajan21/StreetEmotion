import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function Cart() {
 const { cart, updateCartQuantity, removeFromCart, cartTotal, placeOrder, products } = useContext(ShopContext);
 const navigate = useNavigate();

 // Checkout Form States
 const [showCheckout, setShowCheckout] = useState(false);
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 address: '',
 card: '4111 2222 3333 4444' // Prefilled mock card
 });

 const subtotal = cartTotal();
 const shipping = subtotal > 150 || subtotal === 0 ? 0.00 : 15.00;
 const taxes = subtotal * 0.20; // 20% Vat simulation
 const grandTotal = subtotal + shipping + taxes;

 const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

 // Filter 4 recommended items (Tech-Runner, Crossbody, Graphic Tee, Neon Shell)
 const recommendedItems = products.slice(8, 12);

 const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 const handleCheckoutSubmit = (e) => {
 e.preventDefault();
 if (!formData.name || !formData.email || !formData.address) {
 alert("Please fill in shipping credentials.");
 return;
 }
 const orderCreated = placeOrder({
 name: formData.name,
 email: formData.email,
 address: formData.address
 });
 if (orderCreated) {
 navigate(`/invoice?orderId=${orderCreated.id}`);
 }
 };

 return (
 <div className="min-h-screen bg-background text-pure-white">
 {/* Cart Header */}
 <section className="border-b border-structure-gray bg-void-black py-12 px-4 md:px-margin-desktop">
 <h1 className="font-display-lg text-3xl md:text-display-lg uppercase tracking-tighter leading-none">
 YOUR BAG [{totalCartItems.toString().padStart(2, '0')}]
 </h1>
 </section>

 {totalCartItems === 0 ? (
 <div className="flex flex-col items-center justify-center py-24 text-center px-4">
 <span className="material-symbols-outlined text-6xl text-structure-gray mb-4">shopping_bag</span>
 <h2 className="font-display-lg text-xl uppercase mb-2">YOUR BAG IS EMPTY</h2>
 <p className="font-mono-ui text-xs text-on-surface-variant max-w-sm">
 You have not added any archival streetwear pieces to your bag yet.
 </p>
 <Link to="/products" className="mt-8 border border-brand-accent text-brand-accent px-8 py-4 font-mono-ui text-xs uppercase hover:bg-brand-accent hover:text-void-black transition-all font-bold">
 Explore Collection
 </Link>
 </div>
 ) : (
 <section className="grid grid-cols-1 lg:grid-cols-12 w-full">
 {/* Left: Product List */}
 <div className="lg:col-span-8 border-r border-structure-gray">
 {/* Table Header (Desktop) */}
 <div className="hidden md:grid grid-cols-12 border-b border-structure-gray bg-surface-container-low px-8 py-4 font-mono-ui text-label-caps text-on-secondary-container">
 <div className="col-span-6 uppercase">PRODUCT</div>
 <div className="col-span-2 uppercase text-center">SIZE</div>
 <div className="col-span-2 uppercase text-center">QUANTITY</div>
 <div className="col-span-2 uppercase text-right">PRICE</div>
 </div>

 {/* Product Rows */}
 {cart.map(item => (
 <div key={`${item.id}-${item.size}`} className="grid grid-cols-1 md:grid-cols-12 border-b border-structure-gray p-6 md:px-8 md:py-10 hover:bg-structure-gray/30 transition-colors group">
 <div className="md:col-span-6 flex gap-6">
 <div className="w-24 h-32 md:w-40 md:h-52 flex-shrink-0 bg-void-black border border-structure-gray overflow-hidden">
 <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
 </div>
 <div className="flex flex-col justify-between py-2">
 <div>
 <span className="font-mono-ui text-label-caps text-brand-accent mb-1 block">ARCHIVAL SPECIMEN</span>
 <h3 className="font-headline-lg-mobile md:font-headline-lg text-lg md:text-xl uppercase leading-none mb-2">
 {item.name}
 </h3>
 <p className="font-mono-ui text-on-secondary-container text-xs">COLOR: {item.color}</p>
 </div>
 <button 
 onClick={() => removeFromCart(item.id, item.size)}
 className="flex items-center gap-2 font-mono-ui text-label-caps text-on-secondary-container hover:text-alert-red transition-colors mt-4 self-start font-bold"
 >
 <span className="material-symbols-outlined text-sm">close</span> REMOVE
 </button>
 </div>
 </div>
 
 {/* Size column */}
 <div className="flex md:col-span-2 items-center justify-between md:justify-center py-4 md:py-0 font-mono-ui text-subheading border-b border-structure-gray/50 md:border-none">
 <span className="md:hidden text-xs text-on-secondary-container">SIZE:</span>
 <span className="font-bold">{item.size}</span>
 </div>

 {/* Quantity adjustments */}
 <div className="flex md:col-span-2 items-center justify-between md:justify-center py-4 md:py-0 border-b border-structure-gray/50 md:border-none">
 <span className="md:hidden text-xs text-on-secondary-container">QTY:</span>
 <div className="flex border border-structure-gray bg-void-black">
 <button 
 onClick={() => updateCartQuantity(item.id, item.size, -1)}
 className="px-3 py-1 hover:bg-brand-accent hover:text-void-black transition-colors font-bold"
 >
 -
 </button>
 <span className="w-8 flex items-center justify-center font-mono-ui text-xs">
 {item.quantity.toString().padStart(2, '0')}
 </span>
 <button 
 onClick={() => updateCartQuantity(item.id, item.size, 1)}
 className="px-3 py-1 hover:bg-brand-accent hover:text-void-black transition-colors font-bold"
 >
 +
 </button>
 </div>
 </div>

 {/* Total price column */}
 <div className="md:col-span-2 flex items-center justify-between md:justify-end py-4 md:py-0 font-mono-ui text-subheading text-brand-accent font-bold">
 <span className="md:hidden text-xs text-on-secondary-container">PRICE:</span>
 <span>${(item.price * item.quantity).toFixed(2)}</span>
 </div>
 </div>
 ))}
 </div>

 {/* Right Summary Panel */}
 <div className="lg:col-span-4 bg-void-black sticky top-[65px] h-fit">
 <div className="p-6 md:p-margin-desktop space-y-6">
 <h2 className="font-headline-lg-mobile uppercase tracking-tight border-b border-structure-gray pb-4">
 SUMMARY
 </h2>
 
 {!showCheckout ? (
 // Order calculations summary
 <div className="space-y-6">
 <div className="space-y-4 font-mono-ui">
 <div className="flex justify-between uppercase">
 <span>SUBTOTAL</span>
 <span className="font-bold">${subtotal.toFixed(2)}</span>
 </div>
 <div className="flex justify-between uppercase text-on-secondary-container text-xs">
 <span>SHIPPING (CDNS EDGE)</span>
 <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
 </div>
 <div className="flex justify-between uppercase text-on-secondary-container text-xs">
 <span>VAT TAX (20% SIM)</span>
 <span>${taxes.toFixed(2)}</span>
 </div>
 </div>

 <div className="border-t border-structure-gray pt-6">
 <div className="flex justify-between items-end mb-8">
 <span className="font-mono-ui text-label-caps">TOTAL</span>
 <span className="font-display-lg text-2xl md:text-headline-lg-mobile leading-none text-brand-accent font-bold">
 ${grandTotal.toFixed(2)}
 </span>
 </div>
 
 <button 
 onClick={() => setShowCheckout(true)}
 className="w-full bg-brand-accent text-void-black py-5 font-display-lg text-lg uppercase tracking-tighter hover:bg-pure-white transition-colors duration-300 font-bold active:scale-95"
 >
 PROCEED TO CHECKOUT
 </button>
 
 <div className="mt-8 space-y-4">
 {shipping > 0 && (
 <div className="flex gap-4 items-start border border-structure-gray p-4">
 <span className="material-symbols-outlined text-brand-accent">local_shipping</span>
 <div>
 <p className="font-mono-ui uppercase text-xs font-bold">FREE SHIPPING ABOVE $150</p>
 <p className="text-[10px] text-on-secondary-container mt-1">Add ${(150 - subtotal).toFixed(2)} more to qualify.</p>
 </div>
 </div>
 )}
 <div className="flex gap-4 items-start border border-structure-gray p-4">
 <span className="material-symbols-outlined text-brand-accent">shield</span>
 <div>
 <p className="font-mono-ui uppercase text-xs font-bold">INFINITE EDGE SCALING</p>
 <p className="text-[10px] text-on-secondary-container mt-1">CDN-served static bundle prevents scaling bottleneck issues.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 ) : (
 // Checkout Billing Form
 <form onSubmit={handleCheckoutSubmit} className="space-y-4 animate-fadeIn">
 <div className="flex justify-between items-center mb-2 border-b border-structure-gray pb-2">
 <h3 className="font-mono-ui text-xs font-bold text-brand-accent uppercase">SHIPPING INFO</h3>
 <button 
 type="button" 
 onClick={() => setShowCheckout(false)} 
 className="font-mono-ui text-[10px] underline text-on-secondary-container hover:text-pure-white"
 >
 BACK TO BAG
 </button>
 </div>

 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-secondary-container font-bold">FULL NAME</label>
 <input 
 type="text" 
 name="name"
 required
 value={formData.name}
 onChange={handleInputChange}
 placeholder="JOHN DOE"
 className="bg-background border border-structure-gray p-3 text-sm font-mono-ui text-pure-white focus:border-brand-accent focus:ring-0 uppercase placeholder:opacity-40"
 />
 </div>

 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-secondary-container font-bold">EMAIL ADDRESS</label>
 <input 
 type="email" 
 name="email"
 required
 value={formData.email}
 onChange={handleInputChange}
 placeholder="DOE@CHAOS.COM"
 className="bg-background border border-structure-gray p-3 text-sm font-mono-ui text-pure-white focus:border-brand-accent focus:ring-0 uppercase placeholder:opacity-40"
 />
 </div>

 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-secondary-container font-bold">DELIVERY ADDRESS</label>
 <textarea 
 name="address"
 required
 rows="2"
 value={formData.address}
 onChange={handleInputChange}
 placeholder="10 CONCRETE AVE, NY 10001"
 className="bg-background border border-structure-gray p-3 text-sm font-mono-ui text-pure-white focus:border-brand-accent focus:ring-0 uppercase placeholder:opacity-40 resize-none"
 />
 </div>

 <div className="flex flex-col gap-1.5">
 <label className="font-mono-ui text-[10px] uppercase text-on-secondary-container font-bold">MOCK CHECKOUT CARD</label>
 <input 
 type="text" 
 disabled
 value={formData.card}
 className="bg-surface-container-low border border-structure-gray p-3 text-sm font-mono-ui text-on-secondary-container focus:ring-0 cursor-not-allowed"
 />
 </div>

 <div className="border-t border-structure-gray pt-6 mt-6">
 <div className="flex justify-between items-end mb-6">
 <span className="font-mono-ui text-label-caps text-xs">ORDER TOTAL</span>
 <span className="font-mono-ui text-xl text-brand-accent font-bold">${grandTotal.toFixed(2)}</span>
 </div>

 <button 
 type="submit" 
 className="w-full bg-brand-accent text-void-black py-5 font-display-lg text-lg uppercase tracking-tighter hover:bg-pure-white transition-colors duration-300 font-bold active:scale-95"
 >
 PLACE MOCK ORDER
 </button>
 </div>
 </form>
 )}
 </div>
 </div>
 </section>
 )}

 {/* Recommended Drops Section */}
 <section className="border-t border-structure-gray bg-background py-20 px-4 md:px-margin-desktop overflow-hidden">
 <div className="flex justify-between items-end mb-12 border-b border-structure-gray pb-6">
 <h2 className="font-display-lg text-xl md:text-headline-lg-mobile uppercase tracking-tighter">
 RECOMMENDED DROPS
 </h2>
 <Link to="/products" className="font-mono-ui text-label-caps border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">
 VIEW ALL
 </Link>
 </div>
 
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter bg-structure-gray">
 {recommendedItems.map(product => (
 <div key={product.id} className="bg-background border border-structure-gray p-4 hover:border-brand-accent transition-all duration-300 group">
 <Link to={`/product/${product.id}`} className="aspect-[3/4] bg-void-black mb-6 overflow-hidden relative block">
 <img 
 alt={product.name} 
 className="w-full h-full object-cover group-hover:-0 transition-all duration-500 scale-100 group-hover:scale-110" 
 src={product.image}
 />
 <div className="absolute top-4 right-4 bg-brand-accent text-void-black font-mono-ui text-[10px] font-bold px-2 py-1">
 NEW
 </div>
 </Link>
 <div className="flex justify-between items-start gap-4">
 <div>
 <Link to={`/product/${product.id}`} className="font-mono-ui uppercase text-sm mb-1 hover:text-brand-accent block">
 {product.name}
 </Link>
 <p className="font-mono-ui text-brand-accent text-xs">${product.price.toFixed(2)}</p>
 </div>
 <button 
 onClick={() => addToCart(product, "M")}
 className="hover:text-brand-accent transition-colors"
 >
 <span className="material-symbols-outlined">add_shopping_cart</span>
 </button>
 </div>
 </div>
 ))}
 </div>
 </section>
 </div>
 );
}
