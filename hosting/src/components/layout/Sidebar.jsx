import {
  HomeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  LightBulbIcon,
  StarIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";
import NavLink from "./NavLink";
import headshot from "../../assets/profile.jpg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className={clsx(
          "fixed top-4 left-4 z-50 p-3 rounded-lg",
          "bg-slate-700 text-white shadow-lg md:hidden"
        )}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className={clsx(
            "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          )}
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <nav
        className={clsx(
          // Base styles
          "bg-slate-700 shadow-md p-6 border-r border-slate-200",
          // Desktop styles
          "md:w-64 md:h-screen",
          // Mobile styles
          "fixed top-0 left-0 h-full w-72 sm:w-80 z-40 transform",
          "transition-transform duration-300 ease-in-out",
          "md:transform-none md:transition-none",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-center justify-center h-full space-y-6",
            "pt-12 md:pt-0"
          )}
        >
          <img
            src={headshot}
            alt="Headshot"
            className={clsx(
              "rounded-full border-4 border-slate-600 shadow",
              "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            )}
          />
          <div className="w-full space-y-2">
            <NavLink
              targetId="about"
              label="About"
              icon={<HomeIcon className="w-5 h-5" />}
              onClick={closeSidebar}
            />
            <NavLink
              targetId="experience"
              label="Experience"
              icon={<BriefcaseIcon className="w-5 h-5" />}
              onClick={closeSidebar}
            />
            <NavLink
              targetId="education"
              label="Education"
              icon={<AcademicCapIcon className="w-5 h-5" />}
              onClick={closeSidebar}
            />
            <NavLink
              targetId="skills"
              label="Skills"
              icon={<LightBulbIcon className="w-5 h-5" />}
              onClick={closeSidebar}
            />
            <NavLink
              targetId="interests"
              label="Interests"
              icon={<StarIcon className="w-5 h-5" />}
              onClick={closeSidebar}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
