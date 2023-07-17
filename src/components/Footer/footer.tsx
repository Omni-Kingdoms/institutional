"use client";

import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/icon-nav.png";

export default function Footer() {
  return (
    <footer className="justify-between px-10 py-5 p-4 text-neutral-content gap-4">
      <div className="border-t-2 flex lg:p-10 justify-between items-center w-full">
        {isDarkScreen ? (
          <Image src={logo} className="   hover:cursor-pointer " alt="chest" />
        ) : (
          <Image
            src={logoLight}
            className="   hover:cursor-pointer "
            alt="chest"
          />
        )}
        <div className="items-center grid-flow-col">
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
