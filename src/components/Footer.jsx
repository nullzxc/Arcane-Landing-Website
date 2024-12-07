import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaInstagram, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/null.andre/", icon: <FaInstagram /> },
  { href: "https://github.com/nullzxc", icon: <FaGithub /> },
  { href: "https://medium.com/@nullifier", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#e50098] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
        © 2024 | Website inspired by <a href="https://zentry.com/" target="_blank" className="hover:underline">Zentry.</a> 
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="https://www.youtube.com/@javascriptmastery"
          target="_blank"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Thanks to Javascript Mastery
        </a>
      </div>
    </footer>
  );
};

export default Footer;
