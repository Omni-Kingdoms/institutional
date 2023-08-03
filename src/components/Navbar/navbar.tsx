"use client";

import Image from "next/image";
import logo from "@/assets/img/icon-nav.png";
import logo320 from "@/assets/img/icon-320.png";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="flex lg:w-full justify-between px-10 py-5 items-center font-extrabold">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl  hover:bg-gray-600 "
        >
          {isSmallScreen ? (
            <Image
              src={logo320}
              className="hover:cursor-pointer min-[320px]:max-w-none min-[320px]:m-2"
              alt="chest"
            />
          ) : (
            <Image
              src={logo}
              className="hover:cursor-pointer min-[320px]:max-w-none min-[320px]:m-2"
              alt="chest"
            />
          )}
        </Link>
        <div>
          <ul className="flex px-1 gap-4">
            <li className="lg:px-3 py-2 rounded hover:bg-gray-600 "></li>
          </ul>
        </div>
        <div>
          <ul className="flex px-1 sm:gap-40 items-center max-[1200px]:sm:gap-20 max-[900px]:sm:gap-8">
            <li className="px-3 py-2 rounded text-white hover:bg-gray-600 ">
              <Link
                href={
                  "https://scroll-kingdoms-1.gitbook.io/game-play/game-play"
                }
                target="_blank"
              >
                Docs
              </Link>
            </li>
            <li className="px-3 py-2 rounded text-white hover:bg-gray-600 ">
              <Link href={"https://old.omnikingdoms.io/"} target="_blank">
                Old Version
              </Link>
            </li>
            <li className=" px-1 lg:px-1 py-3 rounded hover:bg-gray-600">
              <Link
                passHref
                href={"https://app.omnikingdoms.io/play"}
                target="_blank"
              >
                <button className="w-54 lg:w-64 px-1 py-2 rounded bg-white text-black">
                  Game Dashboard
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
