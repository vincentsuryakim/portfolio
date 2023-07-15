import { FC } from "react";
import Image from "next/image";
import { SingularExperienceType } from "@/constants/experience_types";

interface ExperienceCardProps {
  experience: SingularExperienceType;
  i: number;
}
const ExperienceCard: FC<ExperienceCardProps> = ({ experience, i }) => {
  return (
    <>
      <div className="bg-neutral-100 drop-shadow-lg p-4 rounded-lg flex items-start gap-x-6">
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
          <p className="text-neutral-700 font-medium">
            {experience.headline_date ?? experience.history?.[0]?.date ?? ""}
          </p>
          <div className="mt-5 mb-1 border-t-[1px] border-[#00000033] w-full" />
          <p
            className="text-neutral-700 font-medium underline cursor-pointer w-fit"
            onClick={() => (window as any)[`my_modal_${i}`].showModal()}
          >
            Show more
          </p>
        </div>
      </div>

      {/* Modal */}
      <dialog id={`my_modal_${i}`} className="daisy-modal daisy-modal-bottom sm:daisy-modal-middle">
        <form method="dialog" className="daisy-modal-box sm:w-11/12 sm:max-w-5xl">
          {experience.images.length > 0 && (
            <div className="mb-7 overflow-x-scroll w-full flex gap-x-4">
              {experience.images?.map((image, i) => (
                <Image
                  src={image}
                  alt={experience.name}
                  width={560}
                  height={315}
                  key={i}
                  objectFit="cover"
                />
              ))}
            </div>
          )}
          
          <h3 className="font-black text-4xl mb-4">{experience.name}</h3>

          <div className="mb-6 flex flex-col gap-y-6">
            {experience.history?.map((history, i) => (
              <div key={i}>
                <p className="font-semibold">{history.role}</p>
                <p className="text-neutral-500 mb-1">{history.date}</p>
                <ul className="list-disc list-inside">
                  {history.job_desc?.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap w-full gap-x-8 gap-y-4">
            {experience.skills?.map((skill, i) => (
              <a href={skill.link} target="_blank" rel="noopener noreferrer" key={i}>
                <div className="flex items-center gap-x-2">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={24}
                    height={24}
                    objectFit="contain"
                  />
                  <p className="font-medium">{skill.name}</p>
                </div>
              </a>
            ))}
          </div>

          <a href={experience.link} target="_blank" rel="noopener noreferrer">
            <p className="font-bold text-gradient-1 text-sm">Find Out More →</p>
          </a>
          <p
            className="font-bold text-gradient-2 mt-2 text-sm cursor-pointer"
            onClick={() => (window as any)[`my_modal_${i}`].close()}
          >Close ✕</p>
        </form>
        <form method="dialog" className="daisy-modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ExperienceCard;
