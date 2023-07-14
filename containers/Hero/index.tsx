import { FC } from "react";
import Image from "next/image";
import { useWindowsBreakpoints } from "@/hooks";

const Hero: FC = () => {
  const { isMobileBreakpoint } = useWindowsBreakpoints();

  return (
    <div className="my-8 md:my-20">
      <p className="font-sacramento text-5xl md:text-7xl text-neutral-500">
        Hello!
      </p>
      <p className="font-bold text-4xl md:text-6xl mt-4">
        I&apos;m Vincent Suryakim, and I&apos;m a{" "}
        <span className="underline">software engineer</span>,{" "}
        <span className="underline">student</span>, and{" "}
        <span className="underline">full-stack developer</span>.
      </p>
      <div className="mt-8 md:mt-12 flex items-center gap-x-4">
        <a
          href="https://www.linkedin.com/in/vincentsuryakim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/linkedin-neutral.svg"
            alt="linkedin"
            width={isMobileBreakpoint ? 24 : 32}
            height={isMobileBreakpoint ? 24 : 32}
          />
        </a>
        <a
          href="https://github.com/vincentsuryakim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/github-neutral.svg"
            alt="github"
            width={isMobileBreakpoint ? 24 : 32}
            height={isMobileBreakpoint ? 24 : 32}
          />
        </a>
        <a
          href="https://www.instagram.com/vincentsuryakim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/instagram-neutral.svg"
            alt="instagram"
            width={isMobileBreakpoint ? 24 : 32}
            height={isMobileBreakpoint ? 24 : 32}
          />
        </a>
        <a
          href="https://gitlab.com/vincent.suryakim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/gitlab-neutral.svg"
            alt="gitlab"
            width={isMobileBreakpoint ? 24 : 32}
            height={isMobileBreakpoint ? 24 : 32}
          />
        </a>
        <a
          href="https://assets.vincentsuryakim.com/VincentSuryakim_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/pdf-neutral.svg"
            alt="pdf"
            width={isMobileBreakpoint ? 24 : 32}
            height={isMobileBreakpoint ? 24 : 32}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
