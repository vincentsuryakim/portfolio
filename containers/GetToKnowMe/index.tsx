import { FC } from "react";
import Image from "next/image";

const GetToKnowMe: FC = () => (
  <div className="flex gap-x-4 h-[600px]">

    {/* Left Side */}
    <div className="bg-neutral-200 w-full lg:w-3/5 rounded-xl py-12 px-8 h-full max-h-full overflow-y-scroll">

      {/* Description */}
      <div className="sticky top-0">
        <p className="text-neutral-800 font-black text-5xl">Get to know me</p>
        <p className="text-neutral-700 font-semibold mt-6">
          Hello! My name is Vincent, and I&apos;m a{" "}
          <span className="text-gradient-1">computer science</span> student at
          the University of Indonesia. I have a passion for Data Science,
          Artificial Intelligence, and Web Development. I am dedicated,
          motivated, highly inspired, and ready to adapt and overcome any
          obstacles!
        </p>
        <div className="flex justify-end mt-8">
          <a
            href="https://assets.vincentsuryakim.com/VincentSuryakim_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-cyan-400 flex gap-x-1 rounded-full text-white font-bold text-sm px-5 py-2">
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

      {/* Curriculum Vitae */}
      <div className="mt-10 relative bg-neutral-200">
        {[...Array(3)].map((_, i) => (
          <div className="mt-2 relative w-full aspect-[17/22]" key={i}>
            <Image
              src={`/images/cv/${i}.png`}
              alt={`cv-${i}`}
              objectFit="cover"
              className="rounded-xl"
              fill
            />
          </div>
        ))}
      </div>
    </div>

    {/* Right Side */}
    <div className="w-2/5 hidden lg:block rounded-xl relative h-full">
      <Image
        src="/images/vincent_suryakim.jpeg"
        alt="vincent_suryakim"
        objectFit="cover"
        className="rounded-xl"
        fill
        priority
      />
      <div className="w-4/5 xl:w-3/5 2xl:w-auto bg-[#26262666] border-[1px] border-white text-white absolute bottom-6 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-full flex items-center justify-center gap-x-4">
        <a
          href="https://www.linkedin.com/in/vincentsuryakim/"
          target="_blank"
          rel="noreferer noopener"
        >
          <div className="bg-[#FFFFFF33] p-2 rounded-full">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={28}
              height={28}
            />
          </div>
        </a>
        <a
          href="https://github.com/vincentsuryakim"
          target="_blank"
          rel="noreferer noopener"
        >
          <div className="bg-[#FFFFFF33] p-2 rounded-full">
            <Image
              src="/icons/github.svg"
              alt="github"
              width={28}
              height={28}
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/vincentsuryakim/"
          target="_blank"
          rel="noreferer noopener"
        >
          <div className="bg-[#FFFFFF33] p-2 rounded-full">
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={28}
              height={28}
            />
          </div>
        </a>
        <a
          href="https://gitlab.com/vincent.suryakim"
          target="_blank"
          rel="noreferer noopener"
        >
          <div className="bg-[#FFFFFF33] p-2 rounded-full">
            <Image
              src="/icons/gitlab.svg"
              alt="gitlab"
              width={28}
              height={28}
            />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default GetToKnowMe;
