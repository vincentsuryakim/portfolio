import { FC } from "react";
import Image from "next/image";
import { firebase } from "@/lib/firebase/firebaseClient";
import CurriculumVitaeImage from "./CurriculumVitaeImage";

const LeftSide: FC = () => (
  <div className="bg-neutral-200 w-full lg:w-3/5 rounded-xl py-12 px-8 h-full max-h-full overflow-y-scroll">
    {/* Description */}
    <div className="sticky top-0">
      <p className="text-neutral-800 font-black text-5xl">Get to know me</p>
      <p className="text-neutral-700 font-semibold mt-6">
        Hello! My name is Vincent, and I&apos;m a{" "}
        <span className="text-gradient-1">computer science</span> student at the
        University of Indonesia. I have a passion for Data Science, Artificial
        Intelligence, and Web Development. I am dedicated, motivated, highly
        inspired, and ready to adapt and overcome any obstacles!
      </p>
      <div className="flex justify-end mt-8">
        <a
          href="https://assets.vincentsuryakim.com/VincentSuryakim_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-cyan-400 flex gap-x-1 rounded-full text-white font-bold text-sm px-5 py-2"
            onClick={() => firebase.analytics().logEvent("opened_cv")}
          >
            <Image
              src="/icons/download.svg"
              alt="download"
              width={20}
              height={20}
            />
            Download CV
          </button>
        </a>
      </div>
    </div>

    <CurriculumVitaeImage />
  </div>
);

export default LeftSide;
