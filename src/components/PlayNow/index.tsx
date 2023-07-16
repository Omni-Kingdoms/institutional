"use client";

import Link from "next/link";
import Navbar from "../Navbar/navbar";

export default function PlayHome() {
  return (
    <>
      <div className=" text-white bg-play-now relative">
        <Navbar />
        <div className="flex flex-col gap-10 items-start px-16 xl:px-52 pt-56 pb-40">
          <h1 className="uppercase font-bold text-3xl xl:text-5xl">
            Train, Craft <br />
            battle & earn
          </h1>

          <div className="max-w-[493px] py-2 border-t border-white">
            <p className="font-light">
              Welcome to OmniKingdoms, a medieval land where danger and wonder
              intertwine. Here, every choice you make shapes your destiny in
              this grand tale of swords and sorcery.
            </p>
          </div>

          <Link passHref href={"https://app.omnikingdoms.io/"} target="_blank">
            <button className="uppercase text-black py-4 px-12 bg-white font-bold rounded-[8px] mt-4 text-sm">
              play now
            </button>
          </Link>
        </div>

        <span className="w-full absolute bottom-0 h-16 bg-play-top"></span>
      </div>
    </>
  );
}
