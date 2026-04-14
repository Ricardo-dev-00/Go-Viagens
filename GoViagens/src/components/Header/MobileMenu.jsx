import { navLinks } from "./navLinksData";
import { FiSearch, FiHeart } from "react-icons/fi";

function MobileMenu({ isOpen }) {
  return (
    <div
      className={[
        "absolute inset-x-0 top-full z-50 lg:hidden",
        "transition-all duration-300 ease-out",
        isOpen
          ? "pointer-events-auto visible opacity-100 translate-y-0"
          : "pointer-events-none invisible -translate-y-3 opacity-0",
      ].join(" ")}
    >
      <div className="bg-black/20 backdrop-blur-[1px]">
        <nav className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 shadow-xl">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-3 text-sm font-bold text-gray-700 transition-all duration-200 hover:pl-2 hover:text-blue-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center gap-4 border-t border-gray-100 pt-4 text-gray-700">
            <FiSearch className="cursor-pointer text-xl" />
            <FiHeart className="cursor-pointer text-xl" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
