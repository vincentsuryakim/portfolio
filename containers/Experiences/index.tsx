import { FC, useState } from "react";

import { EXPERIENCES } from "@/constants/experience";
import { ExperiencesType, SingularExperienceType } from "@/constants/experience/types";
import ExperienceCard from "./ExperienceCard";
import Tab from "@/components/Tab";

const Experiences: FC = () => {
  const experienceKeys: (keyof ExperiencesType)[] = ['Work', 'Projects', 'Organizations']

  const [selectedExperience, setSelectedExperience] = useState<keyof ExperiencesType>(experienceKeys[0]);
  const selectedExperienceData: SingularExperienceType[] = EXPERIENCES[selectedExperience];

  return (
    <div>
      <Tab
        tabs={experienceKeys}
        selectedTab={selectedExperience}
        setSelectedTab={(tab: string) => {
          if (experienceKeys.includes(tab as keyof ExperiencesType)) {
            setSelectedExperience(tab as keyof ExperiencesType);
          }
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {selectedExperienceData.map((experience: SingularExperienceType, i) => (
          <ExperienceCard experience={experience} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
