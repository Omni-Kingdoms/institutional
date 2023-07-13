
import Image from "next/image";

import person1 from "@/assets/img/personas/person1.png";
import person2 from "@/assets/img/personas/person2.png";
import person3 from "@/assets/img/personas/person3.png";
import person4 from "@/assets/img/personas/person4.png";
import person5 from "@/assets/img/personas/person5.png";
import person6 from "@/assets/img/personas/person6.png";

import icon1 from "@/assets/img/icon-footer/icon1.png"
import icon2 from "@/assets/img/icon-footer/icon2.png"
import icon3 from "@/assets/img/icon-footer/icon3.png"
import icon4 from "@/assets/img/icon-footer/icon4.png"
import icon5 from "@/assets/img/icon-footer/icon5.png"

export default function HowPlay() {
  return (
    <>
      <span className="w-full absolute top-0 h-16 bg-play-bottom"></span>
      <div className='bg-3'>
        <div className="lg mx-auto grid grid-cols-2 items-center gap-y-16 px-4 py-24 sm:grid-cols-1 sm:px-6 sm:py-32 lg:grid-cols-2 lg:px-8">
          <div className="text-ml border-l-4 p-4 border-white pt-4 col-span-2">
            <h2 className="text-3xl font-bold ml-39 text-white sm:text-4xl">How To Play</h2>
          </div>    

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 w-2/3 m-auto">
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
            <div className="grid grid-cols-3 gap-4">
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
            <div className="grid grid-cols-2 gap-4 w-2/3 m-auto">
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
          <div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="pt-4">
                <div className="flex">
                  <Image
                      src={icon1}
                      alt="Paladin"
                    />
                  <dt className="gap-2 font-semibold text-3xl text-white">
                    Choose your character
                  </dt>
                </div>
                <dd className="mt-2 text-lg text-white">Omni Kingdoms awaits your heroism. Will you be a fierce Warrior? Or perhaps a cunning Mage? Maybe a stealthy Rogue? Each path has its challenges, rewards, and lore. Your adventure begins now!</dd>
              </div>
              <div className="pt-4">
                <dt className="flex gap-2 font-semibold text-3xl text-white">
                  <Image
                    src={icon2}
                    alt="Paladin"
                  />
                  Quest
                </dt>
                <dd className="mt-2 text-lg text-white">Answer destiny&apos;s call and embark on an epic quest. Your choices will shape your journey, carving a path to glory or ruin in this vast world.</dd>
              </div>
              <div className="pt-4">
                <dt className="flex gap-2 font-semibold text-3xl text-white">
                  <Image
                    src={icon3}
                    alt="Paladin"
                  />
                  Arena
                </dt>
                <dd className="mt-2 text-lg text-white">Step into the arena, where bravery is measured and legends are born. Will your sword sway the balance of victory or defeat?</dd>
              </div>
              <div className="pt-4">
                <dt className="flex gap-2 font-semibold text-3xl text-white">
                  <Image
                    src={icon4}
                    alt="Paladin"
                  />
                  Training
                </dt>
                <dd className="mt-2 text-lg text-white">Hone your skills through rigorous training, for it&apos;s the key to survival. As you grow stronger, so does your legend in this epic tale.</dd>
              </div>
              <div className="pt-4">
                <dt className="flex gap-2 font-semibold text-3xl text-white">
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
      </div>
    </>
  );
}

