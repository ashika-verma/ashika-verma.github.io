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
  { to: HOME_URL, text: "Home" },
  { to: PROJECTS_URL, text: "Projects" },
  { to: CLASSES_URL, text: "Classes" },
  { href: RESUME_URL, text: "Resume" },
  { href: GITHUB_URL, text: "GitHub" },
  { href: LINKEDIN_URL, text: "LinkedIn" },
];

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
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
