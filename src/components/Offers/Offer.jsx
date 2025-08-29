import React from 'react';
import Image from 'next/image';
import CouponDivider from '../../../public/image/cupon-devider.png';


const Offer = () => {
    return (
        <div className='w-[96%] md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto'>
            <div className=" mt-[-90px] md:mt-0 lg:mt-0 grid gap-4  md:gap-10 items-center">

            <div>
                <p className="text-center font-bold text-xl md:text-3xl lg:text-6xl mb-1 md:mb-3 lg:mb-8">Best offers for you</p>
            </div>
           

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-3 md:gap-[3%]">



                <div className="flex items-center  bg-[rgba(255,191,15,1)] rounded-3xl">

                    <div className=" py-3 lg:py-4 xl:py-10 px-5 lg:px-10">
                        <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold mb-2">15% OFF</p>
                        <p className="text-[16px] md:text-xl 2xl:text-2xl mb-3 font-medium">on your next purchase</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[rgba(3,7,18,0.5)]">used by october 2025</p>
                    </div>
                    <div>
                        <Image src={CouponDivider} alt='coupon devider' className='w-12 lg:w-16'>
                        </Image>
                        {/* <img className="w-12 lg:w-16" src="assets/cupon-devider.png" alt=""> */}
                    </div>
                    <div className="py-3 lg:py-4 xl:py-10 px-3 md:px-6 lg:px-12">
                        <p className="text-lg  2xl:text-3xl font-bold mb-2">NEW15</p>
                        <p className="text-lg  2xl:text-xl text-[rgba(3,7,18,0.5)]">Coupon Code</p>
                    </div>
                </div>

                <div className="flex items-center  bg-[rgba(247,140,156,1)] rounded-3xl">

                    <div className=" py-3 lg:py-4 xl:py-10 px-5 lg:px-10">
                        <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold mb-2">20% OFF</p>
                        <p className="text-[16px] md:text-xl 2xl:text-2xl mb-3 font-medium">on your next purchase</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[rgba(3,7,18,0.5)]">used by october 2025</p>
                    </div>
                    <div>
                        <Image src={CouponDivider} alt='coupon devider' className='w-12 lg:w-16'>
                        </Image>
                        {/* <img className="w-12 lg:w-16" src="assets/cupon-devider.png" alt=""> */}
                    </div>
                    <div className="py-3 lg:py-4 xl:py-10 px-3 md:px-6 lg:px-12">
                        <p className="text-lg  2xl:text-3xl font-bold mb-2">Couple20</p>
                        <p className="text-lg  2xl:text-xl text-[rgba(3,7,18,0.5)]">Coupon Code</p>
                    </div>
                </div>




             


            </div>

            


            <div className="grid justify-center mt-2 md:mt-5 lg:mt-10">
                <button className="border rounded-2xl lg:rounded-3xl px-3 md:px-6 lg:px-10 py-3 md:py-4 lg:py-5 2xl:py-7 text-lg lg:text-xl  2xl:text-2xl font-medium border-[#1DD100] text-[#1DD100]">See All Offers</button>
            </div>

          


        </div>
        </div>
    );
};

export default Offer;