import { motion } from "framer-motion";

import BrandLogo from "../assets/brand-logo.svg";
import BlurDot from "../assets/BlurDot.svg";

import NavLink from "./primitives/NavLink";
import ButtonFillDiagonal from "./primitives/Button/FillDiagonal";

export default function Navbar() {
  // The NavLink data can come from an external source or from props but we are hardcoding it as of now
  const navLinkData = [
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Services",
      to: "/services",
    },
    {
      title: "Process",
      to: "/process",
    },
    {
      title: "Work",
      to: "/work",
    },
    {
      title: "Pricing",
      to: "/pricing",
    },
    {
      title: "FAQs",
      to: "/faqs",
    },
  ];
  return (
    <header className="w-full bg-[rgba(0,0,0,0.2)] backdrop-blur-lg">
      <motion.nav
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear", duration: 0.4 }}
        className="container mx-auto flex items-center justify-between py-2 tracking-[-0.16px] px-10"
      >
        {/* This brand logo image could be wrapped in a Link component too for navigation */}
        <img src={BrandLogo} alt="Logo of brand" />

        <div className="relative flex items-center gap-28">
          {/* Blue Blur Shadow on top Start*/}
          <img
            src={BlurDot}
            alt=""
            className="absolute h-[450px] left-[-50%] top-[-150px] -z-10 pointer-events-none"
          />
          <img
            src={BlurDot}
            alt=""
            className="absolute h-[450px] left-[-25%] top-[-100px] -z-10 pointer-events-none"
          />
          <img
            src={BlurDot}
            alt=""
            className="absolute h-[450px] left-[10%] top-[-80px] -z-10 pointer-events-none"
          />
          <img
            src={BlurDot}
            alt=""
            className="absolute h-[450px] right-[-50%] top-[-75px] -z-10"
          />
          {/* Blue Blur Shadow on top End */}

          <ul className="flex items-center gap-7 text-clrWhite2 font-normal text-[18px]">
            {navLinkData.map((navLink, i) => (
              <NavLink key={i} to={navLink.to}>
                {navLink.title}
              </NavLink>
            ))}
          </ul>
          <ButtonFillDiagonal>Book a call</ButtonFillDiagonal>
        </div>
      </motion.nav>
    </header>
  );
}
