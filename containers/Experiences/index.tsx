import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { EXPERIENCES } from "@/constants/experience"
import { ExperiencesType, SingularExperienceType } from "@/constants/experience/types"
import ExperienceCard from "./ExperienceCard";

const Experiences: FC = () => {
  const [experienceTabs, setExperienceTabs] = useState<number>(0);
  const [mobileTabChangerOpen, setMobileTabChangerOpen] = useState<boolean>(false);

  const experienceKeys: (keyof ExperiencesType)[] = Object.keys(
    EXPERIENCES
  ) as (keyof ExperiencesType)[];
  const selectedExperience: SingularExperienceType[] =
    EXPERIENCES[experienceKeys[experienceTabs]];
  
  const mobileChangeTabs = (index: number) => {
    setExperienceTabs(index);
    setMobileTabChangerOpen(false);
  }

  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
      setMobileTabChangerOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>{
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [])

  return (
    <div>
      <div className="hidden md:flex w-full bg-neutral-200 rounded-full">
        <div
          className={`w-1/3 border-4 ${
            experienceTabs === 0
              ? "bg-cyan-400 border-[#FFFFFF7F] text-white"
              : "text-neutral-500 border-transparent"
          } rounded-full py-2 px-4 flex justify-center cursor-pointer`}
          onClick={() => setExperienceTabs(0)}
        >
          <p className="font-bold text-2xl">Work</p>
        </div>
        <div
          className={`w-1/3 border-4 ${
            experienceTabs === 1
              ? "bg-cyan-400 border-[#FFFFFF7F] text-white"
              : "text-neutral-500 border-transparent"
          } rounded-full py-2 px-4 flex justify-center cursor-pointer`}
          onClick={() => setExperienceTabs(1)}
        >
          <p className="font-bold text-2xl">Projects</p>
        </div>
        <div
          className={`w-1/3 border-4 ${
            experienceTabs === 2
              ? "bg-cyan-400 border-[#FFFFFF7F] text-white"
              : "text-neutral-500 border-transparent"
          } rounded-full py-2 px-4 flex justify-center cursor-pointer`}
          onClick={() => setExperienceTabs(2)}
        >
          <p className="font-bold text-2xl">Organizations</p>
        </div>
      </div>

      <div ref={mobileDropdownRef} className="relative">
        <div
          className="flex md:hidden items-center justify-center gap-x-2 py-2 px-4 w-full bg-cyan-400 border-4 border-cyan-100 rounded-full cursor-pointer"
          onClick={() => setMobileTabChangerOpen(x => !x)}
        >
          <p className="text-white font-bold text-2xl">{
            experienceTabs === 0 ? "Work" :
            experienceTabs === 1 ? "Projects" :
            "Organizations"
          }</p>
          <Image
            src="/icons/caret-down-fill.svg"
            alt="caret-down-fill"
            width={24}
            height={24}
            className={`${mobileTabChangerOpen && "rotate-180"}`}
          />
        </div>

        {mobileTabChangerOpen && (
          <div className="z-40 font-bold text-sm absolute top-full bg-neutral-100 text-black w-full rounded-2xl mt-1 shadow-2xl">
            <div className="bg-transparent rounded-t-2xl py-3 px-4 flex justify-center" onClick={() => mobileChangeTabs(0)}>
              <p>Work</p>
            </div>
            <div className="bg-transparent py-3 px-4 flex justify-center" onClick={() => mobileChangeTabs(1)}>
              <p>Projects</p>
            </div>
            <div className="bg-transparent rounded-b-2xl py-3 px-4 flex justify-center" onClick={() => mobileChangeTabs(2)}>
              <p>Organizations</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {selectedExperience.map((experience: SingularExperienceType, i) => (
          <ExperienceCard experience={experience} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
