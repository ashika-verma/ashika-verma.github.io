import { FC } from "react";
import { Link } from "react-router-dom";
import {
  HOME_URL,
  PROJECTS_URL,
  CLASSES_URL,
  RESUME_URL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "./consts";

const links = [
  { to: HOME_URL, text: "home" },
  { to: PROJECTS_URL, text: "projects" },
  { to: CLASSES_URL, text: "classes" },
  { href: RESUME_URL, text: "resume" },
  { href: GITHUB_URL, text: "github" },
  { href: LINKEDIN_URL, text: "linkedin" },
];

const Navbar: FC = () => {
  return (
    <nav className="flex">
      <ul className="flex gap-4">
        {links.map((link, index) => (
          <li key={index}>
            {link.to ? (
              <Link to={link.to}>{link.text}</Link>
            ) : (
              <a href={link.href} target="_blank">
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
