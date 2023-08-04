"use client";

import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/icon-nav.png";
import logo320 from "@/assets/img/icon-320.png";
import logoLight320 from "@/assets/img/icon-light-320.png";
import logoLight from "@/assets/img/icon-nav-light.png";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isDarkScreen, setIsDarkScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDarkScreen(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="justify-between px-10 py-5 p-4 text-neutral-content gap-4">
      <div className="border-t-2 flex lg:p-10 justify-between items-center w-full">
        {isSmallScreen ? (
          <>
            {isDarkScreen ? (
              <Image
                src={logo320}
                className="min-[320px]:max-w-none min-[320px]:m-2 hover:cursor-pointer "
                alt="chest"
              />
            ) : (
              <Image
                src={logoLight320}
                className="min-[320px]:max-w-none min-[320px]:m-2 hover:cursor-pointer "
                alt="chest"
              />
            )}
          </>
        ) : (
          <>
            {isDarkScreen ? (
              <Image
                src={logo}
                className="   hover:cursor-pointer "
                alt="chest"
              />
            ) : (
              <Image
                src={logoLight}
                className="   hover:cursor-pointer "
                alt="chest"
              />
            )}
          </>
        )}

        <div className="items-center grid-flow-col text-mn min-[540px]:text-xs md:text-base">
          <p> OmniKingdoms Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col flex gap-4 md:place-self-center md:justify-self-end">
          <Link href={"https://twitter.com/OmniKingdoms"} target={"_blank"}>
            <FaTwitter size={30} color="white" />
          </Link>
          <Link
            href={"https://discord.com/invite/NX3qZuAFvG"}
            target={"_blank"}
          >
            <FaDiscord size={30} color="white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
