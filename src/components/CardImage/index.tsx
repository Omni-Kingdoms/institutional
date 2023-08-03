'use client'

import Image from 'next/image';
import person1 from "@/assets/img/personas/person1.png";
import person2 from "@/assets/img/personas/person2.png";
import person3 from "@/assets/img/personas/person3.png";
import person4 from "@/assets/img/personas/person4.png";
import person5 from "@/assets/img/personas/person5.png";
import person6 from "@/assets/img/personas/person6.png";

export default function CardImage(){

  return(
    <>
      <div className="relative card-image-container">
        <div className="grid grid-cols-2 w-2/3 m-auto">
          <div>
            <Image
              src={person1}
              id="person1"
              className="w-full"
              alt="Paladin"
            />
          </div>
          <div>
            <Image
              src={person4}
              id="person2"
              className="w-full"
              alt="Mage"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-2/3">
          <div>
            <Image
              src={person2}
              id="person3"
              className="w-full"
              alt="Assassin"
            />
          </div>
          <div>
            <Image
              src={person3}
              id="person4"
              className="w-full"
              alt="Rogue"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-2/3 m-auto">
          <div>
            <Image
              src={person5}
              id="person5"
              className="w-full"
              alt="Knight"
            />
          </div>
          <div>
            <Image
              src={person6}
              id="person6"
              className="w-full"
              alt="Witch"
            />
          </div>
        </div>
      </div>
    </>
  )
}