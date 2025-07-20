import clsx from "clsx";
import Card from "../layout/Card";

export default function EducationSection({ education }) {
  return (
    <div aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className={clsx(
          "text-3xl sm:text-4xl font-extrabold uppercase mb-8",
          "tracking-wide text-slate-900"
        )}
      >
        Education
      </h2>
      <div className="grid gap-6">
        <Card>
          {/* Card Header */}
          <div
            className={clsx(
              "flex flex-col sm:flex-row sm:justify-between sm:items-start",
              "mb-3 gap-2"
            )}
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {education.school}
              </h3>
              <p className="text-base text-slate-600 font-semibold">
                {education.degree}
              </p>
              <p className="text-slate-700">{education.major}</p>
              {education.minor && (
                <p className="text-slate-600 italic">
                  Minor in {education.minor}
                </p>
              )}
            </div>
            <p className={clsx("text-sm text-slate-500", "font-medium")}>
              {education.start_year} – {education.end_year}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
