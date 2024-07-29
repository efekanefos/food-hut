import React from "react";
import Button from "./Button";
import { MENU_CATEGORIES, MEAL_CARDS } from "@/constants";
import MealCard from "./MealCard";

const Menu = () => {
  return (
    <div className="container poppins">
      <h2 className="text-[48px] font-bold text-center mb-5 leading-tight">
        <span className="text-themeRed">Menu</span> That <span className="text-themeYellow">Always</span> Make You <br /> Fall In
        <span className="text-themeRed"> Love</span>
      </h2>

      <div className="flex justify-center items-center gap-2 flex-wrap px-20">
        {MENU_CATEGORIES.map((category, index) => (
          <Button key={index} type="button" label={category} />
        ))}
      </div>

      <div className="flex items-start justify-center gap-4 flex-wrap">
        {MEAL_CARDS.map((card, index) => (
          <MealCard key={index} mealName={card.mealName} people={card.people} desc={card.desc} rating={card.rating} image={card.image} price={card.price} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
