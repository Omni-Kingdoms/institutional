"use client";
import Image from "next/image";
import dragon from "../../assets/img/dragon.png";
import Carousel from "../Carousel";

export default function About() {
  return (
    <div className="py-9 bg-brown-50">
      <div className="flex gap-8 xl:gap-14 items-center justify-center px-8">
        <Image className="w-36" src={dragon} alt="dragon" />
        <div className="flex flex-col max-w-[832px] gap-5 xl:gap-10">
          <h1
            className="
          text-2xl 
          font-bold 
          border-l-2
          border-brown-100 
          text-brown-100 
          px-4"
          >
            About OmniKingdoms
          </h1>
          <p className="text-xs xl:text-base">
            {`   OmniKingdoms is the ultimate Layer2 multichain RPG game that will 
              take you on an epic adventure through a mystical world filled with 
              dangerous creatures, ancient relics, and treacherous dungeons. As 
              you play, you'll level up your hero, gaining new skills, weapons, 
              and spells to help you on your quest. But the journey won't be easy, 
              as you'll face fierce opponents in the Arena, fighting for a place 
              at the top of the leaderboard. So what are you waiting for? Dive 
              into the world of OmniKingdoms today and become a legend!`}
          </p>
        </div>
      </div>
      <div className="bg-about w-full mt-16">
        <div className="flex justify-center">
          <button
            className="
            w-slide-28
            max-w-[316px]
            h-[133px] 

            bg-button-plate 
            text-white 
            font-bold 
            text-xs 
            md:text-base
            lg:text-xl
            xl:text-2xl
            mb-14"
          >
            Explore the realm
          </button>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
