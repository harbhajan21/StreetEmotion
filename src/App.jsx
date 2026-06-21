import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Invoice from './pages/Invoice';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import Signup from './pages/Signup';
import { AboutUs, ContactUs, RefundPolicy } from './pages/StaticPages';
import { ShopProvider } from './context/ShopContext';

function AppContent() {
 const location = useLocation();
 const isAdmin = location.pathname.startsWith('/admin');

 return (
 <div className="flex flex-col min-h-screen">
 {/* Suppress standard header/footer on Admin Dashboard */}
 {!isAdmin && <Header />}
 
 <div className="flex-grow">
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/products" element={<ProductList />} />
 <Route path="/product/:id" element={<ProductDetail />} />
 <Route path="/cart" element={<Cart />} />
 <Route path="/invoice" element={<Invoice />} />
 <Route path="/profile" element={<UserProfile />} />
 <Route path="/signup" element={<Signup />} />
 <Route path="/admin" element={<AdminDashboard />} />
 <Route path="/about" element={<AboutUs />} />
 <Route path="/contact" element={<ContactUs />} />
 <Route path="/refund" element={<RefundPolicy />} />
 </Routes>
 </div>

 {!isAdmin && <Footer />}
 </div>
 );
}

export default function App() {
 return (
 <ShopProvider>
 <AppContent />
 </ShopProvider>
 );
}
