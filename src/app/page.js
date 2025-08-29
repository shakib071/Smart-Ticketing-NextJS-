import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Banner from '@/components/Banner/Banner';

export default function Home() {
  return (
    <div className='bg-gray-300 flex  flex-col min-h-screen'>
      <title>Smart Ticketing</title>
      <Header />
      <div className='flex-1'>
        <Banner />
      </div>
      <Footer />
      
    </div>
  );
}
