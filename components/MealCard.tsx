import React from "react";
import Image from "next/image";

type MealCardTypes = {
  mealName: string;
  desc: string;
  rating: number;
  image: string;
  price: number;
};

const MealCard = ({ mealName, desc, rating, image, price }: MealCardTypes) => {
  return (
    <div>
      <Image src={image} width={198} height={198} alt="desc" />
    </div>
  );
};

export default MealCard;
