import React from "react";
import Image from "next/image";

type MultipleServiceTypes = {
  icon: string;
  text: string;
};

const MultipleServiceRow = ({ icon, text }: MultipleServiceTypes) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <Image src={icon} width={26} height={26} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default MultipleServiceRow;
