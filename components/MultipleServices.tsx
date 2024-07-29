import React from "react";
import Image from "next/image";
import { MULTIPLE_SERVICE_ICONS } from "@/constants";
import MultipleServiceRow from "./MultipleServiceRow";
import Button from "@/components/Button";

const MultipleServices = () => {
  return (
    <div className="container poppins grid grid-cols-[1.5fr_2fr] items-center max-md:grid-cols-1 max-md:justify-items-center">
      <Image src="/multiple_service_cheff.png" width={550} height={620} alt="cheff" />
      <div className="p-5">
        <h2 className="text-left text-[48px] font-bold">
          We are <span className="text-themeRed">more</span> than <span className="text-themeYellow">multiple</span> service
        </h2>
        <p className="text-[18px] text-white font-normal">This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>

        <div className="grid grid-cols-2 justify-start items-center gap-1 mt-3">
          {MULTIPLE_SERVICE_ICONS.map((row, index) => (
            <MultipleServiceRow key={index} icon={row.icon} text={row.text} />
          ))}
        </div>

        <div className="mt-4">
          <Button type="button" label="About Us" />
        </div>
      </div>
    </div>
  );
};

export default MultipleServices;
