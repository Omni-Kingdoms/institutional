
import Image from "next/image";

import icon1 from "@/assets/img/icon-footer/icon1.png"
import icon2 from "@/assets/img/icon-footer/icon2.png"
import icon3 from "@/assets/img/icon-footer/icon3.png"
import icon4 from "@/assets/img/icon-footer/icon4.png"
import icon5 from "@/assets/img/icon-footer/icon5.png"
import CardImage from "../CardImage";

export default function HowPlay() {
  return (
    <>
      <span className="w-full absolute h-16 bg-play-bottom"></span>
      <div className="py-40 bg-how-play">
        <div className="lg:ml-96 sm:ml-10 py-10 sm:px-44 min-[320px]:ml-28">
          <h1 className="
          text-2xl 
          font-bold 
          border-l-2
          border-white
          text-white
          px-4">
            How To Play
          </h1>
        </div>
      
      <div className="min-[1436px]:flex gap-8 xl:gap-14 items-center justify-center px-8">
      
        <CardImage/>
        <div className="flex flex-col max-w-[832px] gap-5 xl:gap-10">
          
          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="pt-4">
              <div className="flex">
                <Image
                    src={icon1}
                    alt="Paladin"
                  />
                <dt className="gap-2 font-semibold lg:text-3xl min-[320px]:text-2xl text-white">
                  Choose your character
                </dt>
              </div>
              <dd className="mt-2 text-lg text-white">Omni Kingdoms awaits your heroism. Will you be a fierce Warrior? Or perhaps a cunning Mage? Maybe a stealthy Rogue? Each path has its challenges, rewards, and lore. Your adventure begins now!</dd>
            </div>
            <div className="pt-4">
              <dt className="flex gap-2 font-semibold lg:text-3xl min-[320px]:text-2xl text-white">
                <Image
                  src={icon2}
                  alt="Paladin"
                />
                Quest
              </dt>
              <dd className="mt-2 text-lg text-white">Answer destiny&apos;s call and embark on an epic quest. Your choices will shape your journey, carving a path to glory or ruin in this vast world.</dd>
            </div>
            <div className="pt-4">
              <dt className="flex gap-2 font-semibold lg:text-3xl min-[320px]:text-2xl text-white">
                <Image
                  src={icon3}
                  alt="Paladin"
                />
                Arena
              </dt>
              <dd className="mt-2 text-lg text-white">Step into the arena, where bravery is measured and legends are born. Will your sword sway the balance of victory or defeat?</dd>
            </div>
            <div className="pt-4">
              <dt className="flex gap-2 font-semibold lg:text-3xl min-[320px]:text-2xl text-white">
                <Image
                  src={icon4}
                  alt="Paladin"
                />
                Training
              </dt>
              <dd className="mt-2 text-lg text-white">Hone your skills through rigorous training, for it&apos;s the key to survival. As you grow stronger, so does your legend in this epic tale.</dd>
            </div>
            <div className="pt-4">
              <dt className="flex gap-2 font-semibold lg:text-3xl min-[320px]:text-2xl text-white">
                <Image
                  src={icon5}
                  alt="Paladin"
                />
                Craft
              </dt>
              <dd className="mt-2 text-lg text-white">Forge weapons and armor that could turn the tides of battle. Your craftsmanship will be your edge in the heart of conflict.</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className=' w-full mt-16'>
        <div className='flex justify-center'>
          
        </div>
      </div>
    </div>
    </>
  );
}

