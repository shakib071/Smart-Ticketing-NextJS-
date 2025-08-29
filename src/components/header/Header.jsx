import React from 'react';
import Logo from '../../../public/Logo/bus-logo.png';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='bg-fuchsia-200'>
            <div className='w-[96%] md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto py-3'>
                <nav class="flex  justify-between items-center">

                    <div>
                        <p class="text-lg md:text-4xl lg:text-4xl  2xl:text-7xl font-bold">SS-Ticket</p>
                    </div>

                    <div class="flex gap-2 md:gap-6 lg:gap-8 xl:gap-12 text-sm md:text-xl xl:text-2xl 2xl:text-3xl">
                        <p>Home</p>
                        <p>About</p>
                        <p>Destination</p>
                        <p>Search</p>
                    </div>

                    <div class="cursor-pointer flex gap-1 md:gap-2 lg:gap-3 justify-center items-center px-1 md:px-4 lg:px-5 xl:px-8 py-1 md:py-2 lg:py-3 xl:py-4  border border-[rgba(29,209,0,0.4)] rounded-xl bg-[rgba(29,209,0,0.1)]">
                        <p class="text-[#1DD100] text-sm md:text-2xl lg:text-xl xl:text-5xl font-bold">Bus</p>
                        <Image 
                        src={Logo}
                        alt="Bus Logo"
                        className='w-4 md:w-8 lg:w-10 xl:w-12'
                        ></Image>
                        
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Header;