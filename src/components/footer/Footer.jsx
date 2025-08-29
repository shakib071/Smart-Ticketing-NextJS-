import React from 'react';
import Image from 'next/image';
import googlePlayLogo from '../../../public/playstore.png';

const Footer = () => {
    return (
        <div className=''>
            <footer className=" bg-[rgba(3,7,18,1)] p-6 md:py-12 lg:py-20 text-white">
        
                <div className=" w-full md:w-[90%] lg:w-[82%] mx-auto">


                    <div className="flex justify-between pb-5 lg:pb-10 border-b-2 lg:border-b-4 border-dotted border-b-[rgba(255,255,255,0.5)]">

                        <div>
                            <p className="text-xl md:text-2xl lg:text-4xl font-medium mb-2 lg:mb-4">SS-Ticket</p>
                            <p className="text-[12px] w-[70%]  md:w-full md:text-sm lg:text-xl text-[rgba(255,255,255,0.6)]">SS-Ticket is a digital platform to make your daily commuting better.</p>
                        </div>
            
                        <div>
                            <p className="text-xs md:text-lg lg:text-xl text-[rgba(255,255,255,0.8)] font-medium mb-3">Download our app</p>
                            <div className="flex justify-center items-center gap-3">
                                <div>
                                    <Image 
                                    src={googlePlayLogo}
                                    alt='google play logo'
                                    className='w-7 lg:w-full'
                                    >
                                    </Image>
                                    {/* <img className="w-7 lg:w-full" src="assets/playstore.png" alt=""> */}
                                </div>
                                <div className="text-[rgba(255,255,255,0.7)] flex flex-col justify-center">
                                    <p className="text-[10px] md:text-sm lg:text-lg ">GET IT ON</p>
                                    <p className="text-xs md:text-lg lg:text-2xl">Google Play</p>
                                </div>
                            </div>
                        </div>
            
                    </div>

                    <div className=" md:flex md:justify-between my-4 lg:my-8">
                        <div className="text-sm lg:text-xl text-[rgba(255,255,255,0.6)] mb-2 md:mb-0">
                            <p>@All rights reserved, SS-Ticket services limited.2025</p>
                        </div>
            
                        <div className="flex gap-3 lg:gap-8 text-sm lg:text-xl text-[rgba(255,255,255,0.8)]">
                            <p>Terms & condition</p>
                            <p>Return & refund policy</p>
                            <p>Privacy policy</p>
                        </div>
                    </div>

                </div>




            

            </footer>
        </div>
    );
};

export default Footer;