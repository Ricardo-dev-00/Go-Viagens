import { useState } from "react";
import { FiSearch, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { MdForest } from "react-icons/md";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <MdForest className="text-2xl text-green-900" />

        <nav className="hidden lg:block">
          <NavLinks className="flex items-center gap-6 text-sm font-bold text-gray-700" />
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <FiSearch className="cursor-pointer text-xl" />
          <FiHeart className="cursor-pointer text-xl" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
}

export default Header;
