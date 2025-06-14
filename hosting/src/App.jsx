import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import InterestsSection from "./components/InterestsSection";

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/personal-website-b0a21/us-central1/getResume")
      .then((res) => res.json())
      .then((data) => setResumeData(data));
  }, []);

  if (!resumeData) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-48 bg-gray-100 p-6 space-y-4 text-sm sticky top-0 h-screen">
        <a href="#about" className="block text-gray-700 hover:text-blue-600">
          About
        </a>
        <a
          href="#experience"
          className="block text-gray-700 hover:text-blue-600"
        >
          Experience
        </a>
        <a
          href="#education"
          className="block text-gray-700 hover:text-blue-600"
        >
          Education
        </a>
        <a href="#skills" className="block text-gray-700 hover:text-blue-600">
          Skills
        </a>
        <a
          href="#interests"
          className="block text-gray-700 hover:text-blue-600"
        >
          Interests
        </a>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-16">
        <section id="about">
          <AboutSection about={resumeData.about} />
        </section>
        <section id="experience">
          <ExperienceSection experience={resumeData.experience} />
        </section>
        <section id="education">
          <EducationSection education={resumeData.education} />
        </section>
        <section id="skills">
          <SkillsSection skills={resumeData.skills} />
        </section>
        <section id="interests">
          <InterestsSection interests={resumeData.interests} />
        </section>
      </main>
    </div>
  );
}
