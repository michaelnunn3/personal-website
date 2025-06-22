import { useEffect, useState } from "react";
import clsx from "clsx";
import AboutSection from "./components/resume/AboutSection";
import ExperienceSection from "./components/resume/ExperienceSection";
import EducationSection from "./components/resume/EducationSection";
import SkillsSection from "./components/resume/SkillsSection";
import InterestsSection from "./components/resume/InterestsSection";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://getresume-lqrykgpuka-uc.a.run.app")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setResumeData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        className={clsx(
          "min-h-screen flex items-center justify-center",
          "bg-gray-50"
        )}
      >
        <div className="text-center">
          <div
            className={clsx(
              "animate-spin rounded-full h-12 w-12 border-b-2",
              "border-gray-900 mx-auto mb-4"
            )}
          ></div>
          <p className="text-gray-600 text-lg">Running cloud functions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={clsx(
          "min-h-screen flex items-center justify-center",
          "bg-gray-50"
        )}
      >
        <div className="text-center">
          <p className="text-red-600 text-lg mb-2">
            Failed to load resume data
          </p>
          <p className="text-gray-500">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className={clsx(
              "mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg",
              "hover:bg-gray-800 transition-colors"
            )}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="flex min-h-screen">
        {/* Sidebar - responsive */}
        <div className="md:fixed md:left-0 md:top-0 md:h-screen md:z-10">
          <Sidebar />
        </div>

        {/* Main Content - responsive */}
        <main className="flex-1 md:ml-64 bg-gray-50 pt-16 md:pt-0">
          <section
            id="about"
            className={clsx(
              "min-h-screen flex items-center justify-center px-4 md:px-8",
              "py-8 md:py-12"
            )}
          >
            <div className="w-full max-w-4xl">
              <AboutSection about={resumeData.about} />
            </div>
          </section>
          <section
            id="experience"
            className={clsx(
              "min-h-screen flex items-center justify-center px-4 md:px-8",
              "py-8 md:py-12"
            )}
          >
            <div className="w-full max-w-4xl">
              <ExperienceSection experience={resumeData.experience} />
            </div>
          </section>
          <section
            id="education"
            className={clsx(
              "min-h-screen flex items-center justify-center px-4 md:px-8",
              "py-8 md:py-12"
            )}
          >
            <div className="w-full max-w-4xl">
              <EducationSection education={resumeData.education} />
            </div>
          </section>
          <section
            id="skills"
            className={clsx(
              "min-h-screen flex items-center justify-center px-4 md:px-8",
              "py-8 md:py-12"
            )}
          >
            <div className="w-full max-w-4xl">
              <SkillsSection skills={resumeData.skills} />
            </div>
          </section>
          <section
            id="interests"
            className={clsx(
              "min-h-screen flex items-center justify-center px-4 md:px-8",
              "py-8 md:py-12"
            )}
          >
            <div className="w-full max-w-4xl">
              <InterestsSection interests={resumeData.interests} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
