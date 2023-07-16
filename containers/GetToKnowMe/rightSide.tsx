import { FC } from "react";
import Image from "next/image";

const RightSide: FC = () => (
  <div className="w-2/5 hidden lg:block rounded-xl relative h-full">
    <Image
      src="/images/vincent_suryakim.jpeg"
      alt="vincent_suryakim"
      className="object-cover rounded-xl"
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
          <Image src="/icons/github.svg" alt="github" width={28} height={28} />
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
          <Image src="/icons/gitlab.svg" alt="gitlab" width={28} height={28} />
        </div>
      </a>
    </div>
  </div>
);

export default RightSide;