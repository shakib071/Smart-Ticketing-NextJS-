import React from 'react';

const Ticket = () => {
    return (
        <div>
            <div className="mt-16 md:mt-[150px] border-t-4 border-t-green-500 rounded-[40px] md:rounded-t-[75px]">

            

            <div className="w-[95%] lg:w-[90%] xl:w-[90%] mx-auto pt-16 md:pt-[80px] lg:pt-[175px] ">
    
    
                <div className="text-center">
                    <p className="text-xl md:text-3xl lg:text-6xl font-bold mb-7">S.S Paribahan</p>
                    <p className="w-[90%] md:w-[80%] lg:w-[60%] leading-normal mx-auto text-[16px] md:text-xl lg:text-2xl text-[rgba(3,7,18,0.6)]">Yes, you can run unit tests and view the results directly within the app. The integrated testing features allow for a streamlined .</p>
                </div>

                {/* <!-- From where to where 
                  --> */}
                {/* <!-- choose your Destination section --> */}
                <div className="w-[80%] xl:w-[70%] 2xl:w-[65%]  mx-auto mt-10 bg-[rgba(96,194,142,0.46)] rounded-xl p-6 md:p-20">

                    <p className=" text-center text-xl md:text-2xl font-medium">Choose Your Destination</p>

                    <div className="my-5 flex justify-center items-center gap-3 md:gap-10">
                        <div>

                            <select id="from" className="rounded-lg p-2  md:w-52 text-sm md:text-xl bg-[#f5f1f58c]" name="" >
                                <option disabled selected value="">From</option>

                            </select>

                        </div>

                        <div>

                            <select id="to" className="rounded-lg p-2 md:w-52 text-sm md:text-xl bg-[#f5f1f58c]" name="" >
                                <option disabled selected value="">To</option>
                            </select>

                        </div>
                    </div>



                    <div className="mt-7  flex justify-center">
                        <button id="getDestination" className="text-sm md:text-xl rounded-lg px-5 py-2 text-white font-medium bg-[#0f9d58]">Confirm</button>
                    </div>

                    

                </div>
    
                {/* <!-- ticket price section  --> */}
    
               
    
            </div>
            </div>
        </div>
    );
};

export default Ticket;