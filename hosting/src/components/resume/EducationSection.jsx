import clsx from "clsx";

export default function EducationSection({ education }) {
  return (
    <div aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className={clsx(
          "text-3xl font-extrabold uppercase mb-8",
          "tracking-wide text-gray-900"
        )}
      >
        Education
      </h2>
      <div className="grid gap-6">
        <div
          className={clsx(
            "border border-gray-200 rounded-xl shadow-sm",
            "hover:shadow-md transition-shadow duration-200",
            "p-6 bg-white"
          )}
        >
          {/* Card Header */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {education.school}
              </h3>
              <p className="text-base text-gray-600 font-semibold">
                {education.degree}
              </p>
              <p className="text-gray-700">{education.major}</p>
              {education.minor && (
                <p className="text-gray-600 italic">
                  Minor in {education.minor}
                </p>
              )}
            </div>
            <p
              className={clsx(
                "text-sm text-gray-500 whitespace-nowrap",
                "ml-4 font-medium"
              )}
            >
              {education.start_year} – {education.end_year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
