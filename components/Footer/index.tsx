import { FC } from "react";
import Image from "next/image";
import { useWindowsBreakpoints } from "@/hooks";

const Footer: FC = () => {
  const { isMobileBreakpoint } = useWindowsBreakpoints();

  return (
    <footer className="mt-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-y-0">
      <div className="leading-relaxed text-center md:text-left text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} Vincent Suryakim. All rights
          reserved.
        </p>
        <p>
          Created by{" "}
          <a href="https://www.vincentsuryakim.com/" className="font-bold">
            Vincent Suryakim
          </a>
        </p>
      </div>
      <div className="flex items-center gap-x-4">
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
    </footer>
  );
};

export default Footer;
