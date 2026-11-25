import React, { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ShopProvider, useShop } from './context/ShopContext';
import BagDrawer from './components/BagDrawer';
import Footer from './components/Footer';
import Header from './components/Header';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import SizeGuideModal from './components/SizeGuideModal';
import AdminDashboard from './pages/AdminDashboard';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Signup from './pages/Signup';
import { AboutUs, ContactUs, RefundPolicy } from './pages/StaticPages';
import UserProfile from './pages/UserProfile';
import Wishlist from './pages/Wishlist';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="page py-28">
      <h1 className="t-h1">Page not found</h1>
      <p className="mb-8 mt-4 text-stone">This page has moved or never existed.</p>
      <Link to="/products" className="btn-ink">Shop all</Link>
    </div>
  );
}

function Toast() {
  const { toast } = useShop();
  return (
    <div role="status" className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center lg:bottom-8">
      {toast && <p className="rounded bg-ink px-5 py-3 text-sm font-medium text-paper">{toast}</p>}
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <ScrollToTop />
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BagDrawer />
      <SearchModal />
      <QuickViewModal />
      <SizeGuideModal />
      <Toast />
    </ShopProvider>
  );
}
