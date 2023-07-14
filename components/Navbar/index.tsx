import { FC } from "react";
import Image from "next/image";

const Navbar: FC = () => (
  <nav className="py-4 flex justify-center">
    <Image src="/logo.svg" alt="logo" width={35} height={35} />
  </nav>
);

export default Navbar;
