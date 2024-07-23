import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="container flex items-center justify-between">
      <div className="max-w-[530px] flex flex-col gap-3">
        <div className="flex items-center justify-start gap-1 rounded-[100px] bg-[rgba(246,95,95,0.2)] w-fit p-1.5">
          <Image src="/people_trust_us.svg" width={20} height={20} alt="People Trust Us" />
          <p>People Trust Us</p>
        </div>
        <h1 className="text-[58px] font-bold leading-snug max-w-[530px]">
          We're <span className="text-themeRed">Serious</span> For <span className="text-themeRed">Food</span> & <span className="text-themeYellow">Delivery</span>.
        </h1>

        <p className="text-[24px]">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>

        <div className="w-full relative">
          <input className="w-full bg-[transparent] rounded-full border-[0.5px] p-3 px-10" placeholder="Search food" type="text" name="searchFood" id="searchFood" />
          <Image className="absolute top-[12px] left-3" src="/search_white_icon.svg" width={24} height={24} alt="Search Food" />
          <Image src="/search_yellow_icon.svg" width={42} height={42} alt="Yellow Search Icon" />
        </div>

        <div className="flex gap-2">
          <Button type="button" label="Download App" />
          <Link className="flex items-center gap-2" href="/">
            <Image src="/play_button.svg" width={52} height={52} alt="Watch Video" />
            <p className="text-[17px]">Watch Video</p>
          </Link>
        </div>
      </div>

      <Image className="max-w-[600px] w-full" src="/hero.png" width={753} height={678} alt="Happy Customer" />
    </section>
  );
};

export default Hero;