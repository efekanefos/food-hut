import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

type MealCardTypes = {
  mealName: string;
  people: Array<string>;
  desc: string;
  rating: number;
  image: string;
  price: number;
};

const MealCard = ({ mealName, people, desc, rating, image, price }: MealCardTypes) => {
  return (
    <div className="max-w-[310px] min-w-[310px] relative poppins mt-[5rem]">
      <div className="bg-mealCard-linear-gradient rounded-[20px] min-h-[480px]  min-w-[310px] text-center p-8 flex flex-col justify-center items-center gap-5">
        <div className="relative w-full mx-auto mt-[-5rem]">
          <Image className="absolute top-[-1.6rem] w-full" src="/meal_card_effect.png" width={249} height={249} alt="meal card elips" />
          <Image className="mx-auto" src={image} width={198} height={207} alt="desc" />
          <span className="absolute bottom-0 right-8 bg-themeYellow w-[60px] h-[60px] rounded-full border-themeBlack border-4 font-semibold text-themeBlack flex justify-center items-center text-[20px] z-10">{price}$</span>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="w-fit mealCardStars flex gap-0">
            {people.map((person, index) => (
              <Image className="w-fit" key={index} src={person} width={38} height={38} alt="person" />
            ))}
          </div>

          <div className="flex justify-center items-center gap-1">
            <Image src="/meal_card_star.png" width={28} height={28} alt="star" />
            <p className="text-[18px] font-medium pt-1">({rating})</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-themeRed text-[24px] font-semibold mb-3">{mealName}</h3>
          <p className="text-white text-[16px] font-normal">{desc}</p>
        </div>
      </div>

      <div className="text-center mt-[-1.5rem]">
        <Button type="button" label="Order Now" />
      </div>
    </div>
  );
};

export default MealCard;
