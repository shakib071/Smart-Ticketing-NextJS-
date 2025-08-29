import React from 'react';
import Image from 'next/image';
import PeopleIcon from '../../../public/image/people.png';
import TicketIcon from '../../../public/image/ticket-cupon.png';
import StopPage from '../../../public/image/stoppage.png';

const BannerCard = () => {
    return (
        <div>
            <div className=" md:mt-10  relative top-[-160px] md:top-[-140px] lg:top-[-170px] xl:top-[-120px] grid justify-center items-center">

                <div className=" grid grid-cols-3 justify-center gap-2 md:gap-10  xl:gap-12 2xl:gap-20 lg:px-20 mx-4 md:mx-10">


                    <div className="bg-white rounded-xl md:rounded-3xl flex justify-center items-center gap-1 xl:gap-8 py-1 lg:py-8 px-2 md:px-3 lg:px-10 border-b-4 border-b-[rgba(29,209,0,1)] shadow-2xl">
                        <div>
                            <Image src={PeopleIcon} alt='people icon' className='w-10 lg:w-12 2xl:w-20'></Image>
                            {/* <img className="w-10 lg:w-12 2xl:w-20" src="assets/people.png" alt="people"> */}
                        </div>
                        <div className="">
                            <p className="text-[12px] md:text-2xl  xl:text-3xl 2xl:text-5xl lg:mb-2 font-bold">500k+</p>
                            <p className="text-[10px] md:text-lg xl:text-xl 2xl:text-2xl">Registered users</p>
                        </div>
                        
                    </div>



                    <div className="bg-white rounded-xl md:rounded-3xl flex justify-center items-center gap-2 lg:gap-5 xl:gap-6 2xl:gap-8 py-1 lg:py-8 px-2 md:px-3 lg:px-10 border-b-4 border-b-[rgba(29,209,0,1)] shadow-2xl ">
                        <div>
                            <Image src={TicketIcon} alt='ticket icon' className='w-10 lg:w-12 2xl:w-20'></Image>
                            {/* <img className="w-10 lg:w-12 2xl:w-20" src="assets/ticket-cupon.png" alt="people"> */}
                        </div>
                        <div className="">
                            <p className="text-[12px] md:text-2xl  xl:text-3xl 2xl:text-5xl lg:mb-2 font-bold">170k+</p>
                            <p className="text-[10px] md:text-lg xl:text-xl 2xl:text-2xl">Tickets sold
                            </p>
                        </div>
                        
                    </div>



                    <div className="bg-white rounded-xl md:rounded-3xl flex justify-center items-center gap-2 lg:gap-8 py-1 lg:py-8 px-2 md:px-3 lg:px-10 border-b-4 border-b-[rgba(29,209,0,1)] shadow-2xl">
                        <div>
                            <Image src={StopPage} alt='people icon' className='w-10 lg:w-12 2xl:w-20'></Image>
                            {/* <img className="w-10 lg:w-12 2xl:w-20" src="assets/stoppage.png" alt="people"> */}
                        </div>
                        <div className="">
                            <p className="text-[12px] md:text-2xl  xl:text-3xl 2xl:text-5xl lg:mb-2 font-bold">80K+</p>
                            <p className="text-[10px] md:text-lg xl:text-xl 2xl:text-2xl">Rental partners</p>
                        </div>
                        
                    </div>

            
                </div>

            </div>

        </div>
    );
};

export default BannerCard;