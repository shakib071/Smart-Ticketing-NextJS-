import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className="mt-4 md:mt-10 w-full bg-[url('/image/banner.png')] bg-contain bg-no-repeat 2xl:bg-cover">

                <div className="w-[90%] md:w-[75%] lg:w-[75%] mx-auto flex flex-col items-center">
                    <p className="text-white font-bold leading-tight md:leading-normal text-lg md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center mt-5 md:mt-12">End-to-End Travel with <span className="text-[#1DD100]">SS Paribahan</span></p>
                    <p className="text-white mt-1 md:mt-5 md:leading-normal text-xs md:text-xl lg:text-2xl 2xl:text-3xl text-center">Yes, you can run unit tests and view the results directly within the app. The
                        integrated testing features allow for a streamlined </p>
                    <button className="mt-2 md:mt-10 font-bold text-xs lg:text-xl xl:text-3xl border p-2 md:px-5 lg:px-6 xl:px-8 2xl:px-10 py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-6 bg-[#1DD100] rounded-lg md:rounded-xl mb-[180px]">Buy tickets</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;