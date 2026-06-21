import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          name: formData.name, 
          email: formData.email, 
          phone: formData.phone 
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      setError(error.message || "Failed to join waitlist. Please try again.");
      setLoading(false);
    } else {
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface relative flex flex-col justify-center py-12">
      {/* Structural Grid Background */}
      <div className="fixed inset-0 pointer-events-none grid-lines opacity-10 z-0"></div>

      <main className="flex flex-col items-center justify-center relative z-10 px-4 w-full">
        
        <div className="w-full max-w-xl bg-surface-dim text-pure-white border border-structure-gray p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent"></div>

          <div className="text-center mb-10">
            <span className="font-mono-ui text-label-caps text-pure-white tracking-[0.2em] block mb-2 font-bold">ACCESS TERMINAL</span>
            <h1 className="font-display-lg text-4xl uppercase text-pure-white mb-4">JOIN THE WAITLIST</h1>
            <p className="font-mono-ui text-sm text-pure-white/80 max-w-sm mx-auto mt-2">
              Secure your spot for the upcoming drop. Early access is granted to network members only.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <span className="material-symbols-outlined text-6xl text-brand-accent mb-6">check_circle</span>
              <h2 className="font-display-lg text-2xl text-on-surface uppercase mb-2">ACCESS GRANTED</h2>
              <p className="font-mono-ui text-sm text-on-surface-variant mb-8 max-w-sm">
                You are officially on the list. Keep an eye on your inbox for the drop coordinates.
              </p>
              <Link to="/" className="border border-brand-accent text-on-surface hover:bg-brand-accent px-8 py-4 font-mono-ui text-xs uppercase tracking-widest transition-all font-bold inline-block">
                RETURN TO GRID
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant tracking-widest font-bold block">FULL NAME</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-void-black border border-structure-gray px-6 py-4 rounded-full font-mono-ui text-sm text-pure-white focus:border-pure-white focus:ring-0 outline-none transition-colors"
                  placeholder="ENTER DESIGNATION"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant tracking-widest font-bold block">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-void-black border border-structure-gray px-6 py-4 rounded-full font-mono-ui text-sm text-pure-white focus:border-pure-white focus:ring-0 outline-none transition-colors"
                  placeholder="ENTER PRIMARY COMM LINK"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono-ui text-[10px] uppercase text-on-surface-variant tracking-widest font-bold flex items-center justify-between">
                  <span>CONTACT NUMBER</span>
                  <span className="text-on-surface-variant/50">OPTIONAL</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-void-black border border-structure-gray px-6 py-4 rounded-full font-mono-ui text-sm text-pure-white focus:border-pure-white focus:ring-0 outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {error && (
                <div className="bg-alert-red/10 border border-alert-red text-alert-red font-mono-ui text-[10px] uppercase p-3">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-void-black text-pure-white border border-structure-gray py-5 mt-4 rounded-full font-mono-ui text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#32CD32] hover:text-[#1A1A1A] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {loading ? 'PROCESSING...' : 'JOIN THE WAITLIST'}
              </button>
            </form>
          )}

        </div>
      </main>
    </div>
  );
}
