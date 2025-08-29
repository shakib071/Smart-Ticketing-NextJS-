import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className='bg-gray-300 min-h-screen'>
      <title>Smart Ticketing</title>
      <Header />
      <Footer />
    </div>
  );
}
