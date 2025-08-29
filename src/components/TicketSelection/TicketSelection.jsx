import React from 'react';
import Image from 'next/image';
import StearingWheel from '../../../public/image/steering-wheel (1).png';
import SeatGreen from '../../../public/image/seat-green-filled.png';
import SeatGray from '../../../public/image/seat-gray.png';
import BusLogo from '../../../public/Logo/bus-logo.png';
import SeatGreenNotFilled from '../../../public/image/seat-green.png';
import InfoDriver from '../../../public/image/info-devider.png';
import Fare from '../../../public/image/fare.png';


const TicketSelection = () => {
    return (
        <div>
            <div className="w-[95%] lg:w-[90%] xl:w-[90%] mx-auto mt-10 pb-20">


                <div className="w-full xl:w-[95%] mt-8 mx-auto md:flex md:items-center bg-white rounded-3xl">
    
    
                    <div className="w-[90%] mx-auto px-2 md:px-6 xl:px-16 py-5 md:py-10  lg:py-16 ">
                        
    
                        <div className=" flex justify-between items-center gap-10 xl:gap-20 mb-7">
    
    
                            <div className="flex items-center gap-2 md:gap-6">
                                <div>
                                    <Image src={BusLogo} alt='bus logo' className='w-12 xl:w-20'></Image>
                                    {/* <img className="w-12 xl:w-20" src="assets/bus-logo.png" alt="bus logo"> */}
                                </div>
                                <div>
                                    <p className="text-[17px] md:text-2xl lg:text-3xl xl:text-5xl font-medium mb-3">Shakib Paribahan</p>
                                    <p  className=" text-[10px] md:text-sm lg:text-2xl text-[rgba(3,7,18,0.6)]">Coach- <span id="coachNo" ></span>  ! <span id="acOrNot"></span>_Business</p>
                                </div>
                            </div>
                            
    
                            <div className="flex items-center gap-2 md:gap-5 px-2 md:px-4 lg:px-7 py-3 rounded-2xl bg-[rgba(29,209,0,0.2)]">
                                <Image src={SeatGreenNotFilled} alt='seat' className='w-5 md:w-6 lg:w-12'></Image>
                                {/* <img className="w-5 md:w-6 lg:w-12" src="assets/seat-green.png" alt="seat logo"> */}
                                <p className="text-[12px] md:text-sm lg:text-xl text-[#1DD100]">40 Seats left</p>
                            </div>
    
    
                        </div>
    
    
                        <div className="bg-[#F7F8F8] p-3 lg:p-7 rounded-3xl">
    
    
                            <div className="flex justify-between border-b-4 border-dotted border-b-gray-300 p-3 lg:p-5">
                                <p className="text-sm md:text-lg lg:text-2xl text-[rgba(3,7,18,0.6)]">Route</p>
                                <p className="text-sm md:text-lg lg:text-2xl font-medium"><span id="routeFrom"></span>-<span id="routeTo"></span></p>
                            </div>
    
    
                            <div className="flex justify-between border-b-4 border-dotted border-b-gray-300 p-3 lg:p-5">
                                <p className="text-sm md:text-xl lg:text-2xl text-[rgba(3,7,18,0.6)]">Departure Time</p>
                                <p id="departureTime" className="text-sm md:text-xl lg:text-2xl font-medium"></p>
                            </div>
    
                            <div className="flex justify-between gap-1 md:gap-3 mt-2 md:mt-0 p-1 md:p-3 lg:p-5">
    
                                <p className="text-xs md:text-sm lg:text-lg xl:text-2xl font-medium text-[rgba(3,7,18,0.8)]  bg-[rgba(3,7,18,0.1)] px-3 xl:px-5 py-3 lg:py-4 rounded-2xl">Boarding Point - <span id="boarding-point"></span></p>
    
                                <p className="text-xs md:text-sm lg:text-lg xl:text-2xl font-medium text-[rgba(3,7,18,0.8)]  bg-[rgba(3,7,18,0.1)] px-3 xl:px-5 py-3 lg:py-4 rounded-2xl">Dropping Point - <span id="dropping-point"></span></p>
    
                                <p className="text-xs md:text-sm lg:text-lg xl:text-2xl font-medium text-[rgba(3,7,18,0.8)]  bg-[rgba(3,7,18,0.1)] px-3 xl:px-5 py-3 lg:py-4 rounded-2xl">Est. Time - <span id="est-time"></span></p>
    
                            </div>
    
    
                        </div>
    
                    </div>
    
    
                    
                    {/* <div className="hidden md:block"> */}
                        {/* <Image src={InfoDriver} alt='info driver' className='w-full md:w-full lg:w-[110px]'></Image> */}
                        {/* <img className="w-full md:w-full lg:w-[110px]" src="assets/info-devider.png" alt=""> */} 
                    {/* </div>  */}


                    
                    {/* <div className="flex flex-col justify-center items-center">
                        <Image src={Fare} alt='currency logo' className='mb-1 lg:mb-5'></Image>
                        <img className="mb-1 lg:mb-5" src="assets/fare.png" alt="taka logo">
                        <p className="text-lg lg:text-4xl font-bold lg:mb-2">550 Taka</p>
                        <p className="text-lg lg:text-3xl text-[rgba(3,7,18,0.6)] font-medium">Per Seat</p>
    
                    </div> */}
    
                </div>







                {/* select your seat section  */}
                <div className="w-full xl:w-[95%] mx-auto bg-white rounded-3xl mt-10">
                    <div className="md:flex">


                        <div className="w-full md:w-[60%] p-4 xl:p-7 md:border-r-4 md:border-dotted border-r-gray-300">


                            <p className="p-3 lg:p-6 border-b-4 border-dotted border-b-gray-300 text-2xl lg:text-4xl text-[#030712] font-bold">Select Your Seat</p>


                            <div className="p-2 mb-2 lg:p-6 border-b-4 border-dotted border-b-gray-300 flex justify-between">
                                <div className="flex gap-2 lg:gap-4">
                                    <Image src={SeatGray} alt='gray seat' className='w-7 lg:w-full'></Image>
                                    {/* <img className="w-7 lg:w-full" src="assets/seat-gray.png" alt=""> */}
                                    <p className="text-lg lg:text-2xl text-[rgba(3,7,18,0.5)]">Available</p>
                                </div>

                                <div className="flex gap-2 lg:gap-3">
                                    <Image src={SeatGreen} alt='seat green filled' className='w-7 lg:w-full'></Image>
                                    {/* <img className="w-7 lg:w-full" src="assets/seat-green-filled.png" alt=""> */}
                                    <p className="text-lg lg:text-2xl text-[#1DD100]">Selected</p>
                                </div>
                            
                            </div>

                            <div className="p-2 lg:p-6 flex flex-row-reverse ">
                                <Image src={StearingWheel} alt='steering wheel' className='w-16 lg:w-[100px] rounded-3xl" src="assets/steering-wheel.png'></Image>
                                {/* <img className="w-16 lg:w-[100px] rounded-3xl" src="assets/steering-wheel.png" alt=""> */}
                            </div>


                            <div className="">

                                <div className="p-2 md:p-3 xl:p-5 text-[rgba(3,7,18,0.55)] text-[13px] md:text-lg xl:text-3xl flex flex-col gap-2 md:gap-3 2xl:gap-5">

                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">A</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">A1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">A2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">A3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">A4</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">B</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">B1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">B2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select -pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">B3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">B4</p>
                                        </div>
                                    </div>


                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">C</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">C1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">C2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">C3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">C4</p>
                                        </div>
                                    </div>


                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">D</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">D1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">D2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">D3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">D4</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">E</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">E1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">E2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">E3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">E4</p>
                                        </div>
                                    </div>


                                    
                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">F</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">F1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">F2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">F3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">F4</p>
                                        </div>
                                    </div>


                                    
                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">G</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">G1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">G2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">G3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">G4</p>
                                        </div>
                                    </div>



                                    
                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">H</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">H1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">H2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">H3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">H4</p>
                                        </div>
                                    </div>


                                    
                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">I</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">I1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">I2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">I3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">I4</p>
                                        </div>
                                    </div>


                                    <div className="flex justify-between items-center gap-2 md:gap-4 2xl:gap-8">

                                        <div className="px-1 md:px-5 flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="w-3 lg:w-6">J</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px]  2xl:w-[135px] text-center py-3 lg:py-4">J1</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">J2</p>
                                        </div>

                                        <div className=" flex justify-between items-center gap-1 md:gap-2 2xl:gap-5">
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">J3</p>
                                            <p className="seat-select cursor-pointer bg-[rgba(3,7,18,0.1)]  rounded-3xl w-[70px] md:w-[100px] xl:w-[120px] 2xl:w-[135px] text-center py-3 lg:py-4">J4</p>
                                        </div>
                                    </div>

                                
                        
                                </div>

                            </div>


                        </div>




                        <div className="w-full md:w-[40%] p-4 2xl:p-7">

                            <p className="p-3 lg:p-6 border-b-4 border-dotted border-b-gray-300 text-2xl 2xl:text-4xl text-[#030712] font-bold">Selected Seats</p>

                            <div className="mx-2 lg:mx-4 p-4 xl:p-6 mt-12 lg:mt-20 bg-[#F7F8F8] rounded-2xl">

                                <div className="text-xl xl:text-2xl flex justify-between font-medium text-black mt-4 mb-4">
                                    <p>Seat</p>
                                    <p>className</p>
                                    <p>Price</p>
                                </div>

                                <div id="selected-seats-add">
                                    <div className="flex justify-between text-[rgba(3,7,18,0.6)] text-sm xl:text-xl mb-3">
                                        <p className="">C2</p>
                                        <p>Economoy</p>
                                        <p>550</p>
                                    </div> 
                                    
                                    
                                
                                </div>



                                <div className="flex justify-between font-bold text-sm lg:text-lg xl:text-xl text-black mb-4">

                                    <p>Total Price</p>
                                    <p>BDT 1100</p>

                                </div>


                                <div className="p-3 flex justify-center items-center mb-4">

                                    <p className="w-[80%] text-sm xl:text-xl 2xl:text-2xl ">
                                        <input className="w-full rounded-l-xl p-3 2xl:p-4 bg-white" type="text" placeholder="Have any coupon?"/>
                                    </p>
                                    
                                    <button className="text-sm xl:text-lg 2xl:text-2xl font-bold px-6 xl:px-7 py-3 lg:py-4 bg-[rgba(29,209,0,1)] rounded-xl text-white">Apply</button>

                                </div>

                                <div className="flex justify-between font-bold text-lg lg:text-xl mb-3">

                                    <p>Grand Total</p>
                                    <p>BDT 1100</p>
                        
                                </div>

                            </div>



                            <div className="mx-1 2xl:mx-6 mt-1 lg:mt-16 p-4">

                                <p className="text-[#030712] text-lg lg:text-2xl font-bold mb-2 lg:mb-5">Passenger Name*
                                </p>
                                <p>
                                    <input className="text-sm lg:text-xl p-3 mb-2 lg:mb-5 w-full text-black bg-[rgba(3,7,18,0.05)] rounded-xl" type="text" placeholder="Enter Your Name" />
                                    </p>


                                <p className="text-[#030712] text-lg lg:text-2xl font-bold mb-2 lg:mb-5">Phone Number*
                                </p>
                                <p>
                                    <input className="text-sm lg:text-xl p-3 mb-2 lg:mb-5 w-full text-black bg-[rgba(3,7,18,0.05)] rounded-xl" type="text" placeholder="Enter your phone number" />
                                    </p>

                                <p className="text-[#030712] text-lg lg:text-2xl font-bold mb-2 lg:mb-5">Email ID</p>
                                <p>
                                    <input className="text-sm lg:text-xl p-3 mb-2 lg:mb-5 w-full text-black bg-[rgba(3,7,18,0.05)] rounded-xl" type="text" placeholder="Enter your email id" />
                                    </p>

                                <div className="flex justify-center items-center mt-2 lg:mt-0 mb-5">
                                    <button className="bg-[#1DD100] w-full text-lg lg:text-3xl py-3 lg:py-4 rounded-2xl font-bold text-white">Next</button>
                                </div>
                                

                                <div className="flex justify-between font-medium text-[rgba(3,7,18,0.6)] mt-2 lg:mt-8 text-sm xl:text-lg 2xl:text-xl">

                                    <p className="border-b-2 border-b-gray-400">Terms and Conditions</p>
                                    <p className="border-b-2 border-b-gray-400">Cancellation Policy</p>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>

        </div>

        </div>
    );
};

export default TicketSelection;