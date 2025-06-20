import {
  HomeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import headshot from "../../assets/profile.jpg";

export default function Sidebar() {
  return (
    <nav className="w-64 bg-white shadow-md p-6 border-r border-gray-200 h-screen sticky top-0 hidden md:block">
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <img
          src={headshot}
          alt="Headshot"
          className="w-40 h-40 rounded-full border-4 border-blue-200 shadow"
        />
        <NavLink
          targetId="about"
          label="About"
          icon={<HomeIcon className="w-5 h-5" />}
        />
        <NavLink
          targetId="experience"
          label="Experience"
          icon={<BriefcaseIcon className="w-5 h-5" />}
        />
        <NavLink
          targetId="education"
          label="Education"
          icon={<AcademicCapIcon className="w-5 h-5" />}
        />
        <NavLink
          targetId="skills"
          label="Skills"
          icon={<LightBulbIcon className="w-5 h-5" />}
        />
        <NavLink
          targetId="interests"
          label="Interests"
          icon={<StarIcon className="w-5 h-5" />}
        />
      </div>
    </nav>
  );
}
