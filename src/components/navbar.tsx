import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Affiliate, Menu2 } from "tabler-icons-react";

import { Separator } from "./shadcn_ui/separator";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white p-4 text-black shadow-xl">
        <div className="mx-auto flex h-16">
          <Link href="/" className="mx-4 h-16 w-16">
            <Image
              src={"/assets/SWEC Logo.png"}
              alt={"SWEC Logo"}
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
            />
          </Link>
          <ul className="hidden grow items-stretch space-x-3 lg:flex">
            <Link href="/project" className="flex items-center p-2">
              <h1 className="tracking-none text-lg font-black uppercase transition duration-300 ease-in-out hover:text-secondary">
                All Projects
              </h1>
            </Link>
            <Separator orientation="vertical" className="bg-secondary" />
            <Link href="/open-applications" className="flex items-center p-2">
              <h1 className="tracking-none text-lg font-black uppercase transition duration-300 ease-in-out hover:text-secondary">
                Open Applications
              </h1>
            </Link>
            <Separator orientation="vertical" className="bg-secondary" />
            <Link href="/my-applications" className="flex items-center p-2">
              <h1 className="tracking-none text-lg font-black uppercase transition duration-300 ease-in-out hover:text-secondary">
                My Applications
              </h1>
            </Link>
            <Separator orientation="vertical" className="bg-secondary" />
            <Link href="/my-projects" className="flex items-center p-2">
              <h1 className="tracking-none text-lg font-black uppercase transition duration-300 ease-in-out hover:text-secondary">
                My Projects
              </h1>
            </Link>
          </ul>
          <div className="flex grow items-center justify-center md:space-x-4 lg:flex-none">
            <UserButton afterSignOutUrl="/" />
          </div>

          <button title="Open menu" type="button" className="p-4 lg:hidden">
            <Menu2 />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
