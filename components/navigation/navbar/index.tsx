import Image from "next/image";
import Link from "next/link";

import MobileNav from "./MobileNav";
import { ThemePicker } from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          height={23}
          width={23}
          alt="devflow logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <ThemePicker />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
