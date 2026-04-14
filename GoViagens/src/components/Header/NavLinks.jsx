import { navLinks } from "./navLinksData";

function NavLinks({ className }) {
  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="transition-all duration-200 hover:text-blue-500 hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
