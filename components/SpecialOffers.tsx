import React from "react";
import { MEAL_CARDS } from "@/constants";
import MealCard from "./MealCard";

const SpecialOffers = () => {
  return (
    <div>
      <h2 className="text-[48px] font-bold poppins text-center">
        Today's <span className="text-themeRed">Special</span> Offers
      </h2>
      <p className="poppins text-[18px] text-center max-w-[850px] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      {MEAL_CARDS.map((item, index) => (
        <MealCard key={index} mealName={item.mealName} desc={item.desc} rating={item.rating} image={item.image} price={item.price} />
      ))}
    </div>
  );
};

export default SpecialOffers;
