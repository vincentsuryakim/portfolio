import { FC, useState } from "react";
import Image from "next/image";

import { EXPERIENCES } from "@/constants/experience"
import { ExperiencesType, SingularExperienceType } from "@/constants/experience_types"

const Experiences: FC = () => {
  const [experienceTabs, setExperienceTabs] = useState<number>(0);

  const experienceKeys: (keyof ExperiencesType)[] = Object.keys(
    EXPERIENCES
  ) as (keyof ExperiencesType)[];
  const selectedExperience: SingularExperienceType[] =
    EXPERIENCES[experienceKeys[experienceTabs]];

  return (
    <div>
      <div className="w-full bg-neutral-200 rounded-full flex">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {selectedExperience.map((experience: SingularExperienceType, i) => (
          <div
            className="bg-neutral-100 drop-shadow-lg p-4 rounded-lg flex items-start gap-x-6"
            key={i}
          >
            <Image
              src={experience.logo}
              alt={experience.name}
              width={40}
              height={40}
              className="ml-2"
            />
            <div className="w-full">
              <p className="text-neutral-700 font-black">{experience.name}</p>
              <p className="text-neutral-700 font-medium">
                {experience.headline_role ?? experience.history?.[0]?.role ?? ""}
              </p>
              <p className="text-neutral-700 italic font-medium">
                {experience.headline_date ?? experience.history?.[0]?.date ?? ""}
              </p>
              <div className="mt-5 mb-1 border-t-[1px] border-[#00000033] w-full" />
              <p className="text-neutral-700 font-medium underline cursor-pointer w-fit">
                Show more
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
