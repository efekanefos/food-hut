import React from "react";
import Image from "next/image";

const MobileApp = () => {
  return (
    <div className="relative">
      <div className="yellowGradient poppins px-3">
        <div className="container flex items-center justify-between max-lg:flex-col max-lg:my-5">
          <div className="w-full">
            <h2 className="text-[48px] font-bold text-left mb-5 leading-tight">
              It's Now <span className="text-themeRed">More Easy</span> to <span className="text-themeYellow">Order</span> by Our Mobile
              <span className="text-themeRed"> App</span>
            </h2>
            <p className="text-[18px] text-white font-normal">All you need to do is downlode one of the best delivery apps, make a and most companies are opting for mobile app devlopment for food delivery</p>
            <div className="flex justify-start items-stretch gap-2 mt-5">
              <Image src="/google_play_button.png" width={120} height={40} alt="Google Play" />
              <Image src="/app_store_button.png" width={120} height={40} alt="App Store" />
            </div>
          </div>

          <div className="w-full ">
            <Image className="ml-auto max-lg:mx-auto" src="/mobile_app_cheff.png" width={476} height={476} alt="Mobile App" />
          </div>
        </div>
      </div>
      {/* 
      <Image className="absolute right-[15rem] bottom-[-50px] z-10" src="/mobile_app_cheff_green_decore.png" width={271} height={179} alt="Green Decore" />
      */}
    </div>
  );
};

export default MobileApp;
