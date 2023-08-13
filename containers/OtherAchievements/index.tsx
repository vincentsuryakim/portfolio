import { FC, useState } from "react";
import Image from "next/image";

import { SKILLS } from "@/constants/skill";
import { PATENTS } from "@/constants/patent";

const OtherAchievements: FC = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div>
      <ul className="flex text-4xl md:text-5xl text-[#66666680] space-x-2 md:space-x-3">
        {["skills", "patents"].map((i, idx) => (
            <li
                key={idx}
                className={`${tab === idx && "text-neutral-500"} cursor-pointer`}
                onClick={() => setTab(idx)}
            >
                {i}
            </li>
        ))}
      </ul>

      {tab === 0 && (
        <div className="mt-6 flex flex-wrap gap-0.5">
            {Object.values(SKILLS).map((i, idx) => (
                <a
                  key={idx}
                  className="w-24 h-24 flex items-center justify-center bg-[#FFFFFF73] hover:bg-white border-[1px] border-[#E5E5E5E6] opacity-90 hover:opacity-100 cursor-pointer hover:shadow-xl hover:transform hover:scale-105 rounded-xl"
                  href={i.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={i.logo}
                    alt={i.name}
                    width={32}
                    height={32}
                  />
                </a>
            ))}
        </div>
      )}

      {tab === 1 && (
        <div className="mt-6">
            {PATENTS.map((i, idx) => (
                <div key={idx}>
                    <a
                        href={i.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="font-semibold underline text-lg inline align-middle mr-3">{i.name}</p>
                        <Image
                            className="inline align-middle"
                            src="/icons/external-link.svg"
                            alt="external-link"
                            width={16}
                            height={16}
                        />
                    </a>
                    <p>{i.number} &#183; Issued {i.date}</p>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default OtherAchievements;
