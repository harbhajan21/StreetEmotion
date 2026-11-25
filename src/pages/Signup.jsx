import React from 'react';
import WaitlistForm from '../components/WaitlistForm';

export default function Signup() {
  return (
    <div className="page grid gap-10 py-12 lg:grid-cols-2 lg:py-24">
      <div>
        <h1 className="t-h1">Hear about the next drop first</h1>
        <p className="mt-5 max-w-md text-stone">Join the list and we’ll tell you when new pieces are ready.</p>
      </div>
      <div className="max-w-lg lg:ml-auto lg:w-full"><WaitlistForm /></div>
    </div>
  );
}
