import { FC, useState } from "react";
import Image from "next/image";
import { SingularExperienceType } from "@/constants/experience/types";
import { firebase } from "@/lib/firebase/firebaseClient";
import Modal from "@/components/Modal";

interface ExperienceCardProps {
  experience: SingularExperienceType;
}
const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // General Function to Open Modal
  const handleOpenModal = () => {
    setOpenModal(true);
    firebase.analytics().logEvent('opened_experience_modal', {
      experience: experience.name,
    });
  }

  // General Function to Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  }

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
            onClick={() => handleOpenModal()}
          >
            Show more
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={openModal} onClose={handleCloseModal}>
        {experience.images.length > 0 && (
          <div className="mb-7 overflow-x-auto w-full flex gap-x-4">
            {experience.images?.map((image, i) => (
              <div key={i} className="relative h-[180px] min-h-[180px] w-[320px] min-w-[320px] md:h-[315px] md:min-h-[315px] md:w-[560px] md:min-w-[560px]">
                <Image
                  src={image}
                  alt={experience.name}
                  loading="lazy"
                  className="object-cover"
                  fill
                />
              </div>
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
                  className="object-contain"
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
          onClick={() => handleCloseModal()}
        >Close ✕</p>
      </Modal>
    </>
  );
};

export default ExperienceCard;
