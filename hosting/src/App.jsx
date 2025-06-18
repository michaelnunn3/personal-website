import { useEffect, useState } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import InterestsSection from "./components/InterestsSection";

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("https://getresume-lqrykgpuka-uc.a.run.app")
      .then((res) => res.json())
      .then((data) => setResumeData(data));
  }, []);

  if (!resumeData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-white shadow-md p-6 border-r border-gray-200 h-screen sticky top-0">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <img
            src="/profile.jpg"
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

      {/* Main Content */}
      <main className="flex-1">
        <section id="about" className="min-h-screen flex items-center px-8">
          <AboutSection about={resumeData.about} />
        </section>
        <section
          id="experience"
          className="min-h-screen flex items-center px-8"
        >
          <ExperienceSection experience={resumeData.experience} />
        </section>
        <section id="education" className="min-h-screen flex items-center px-8">
          <EducationSection education={resumeData.education} />
        </section>
        <section id="skills" className="min-h-screen flex items-center px-8">
          <SkillsSection skills={resumeData.skills} />
        </section>
        <section id="interests" className="min-h-screen flex items-center px-8">
          <InterestsSection interests={resumeData.interests} />
        </section>
      </main>
    </div>
  );
}

// Sidebar Link Component
function NavLink({ targetId, label, icon }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition w-full text-left"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
