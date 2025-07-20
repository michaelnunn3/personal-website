import clsx from "clsx";

export default function ExperienceSection({ experience }) {
  const formatDate = (dateString) => {
    if (dateString.toLowerCase() === "present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className={clsx(
          "text-3xl font-extrabold uppercase mb-8",
          "tracking-wide text-gray-900"
        )}
      >
        Experience
      </h2>
      <div className="grid gap-6">
        {experience.map((role, index) => (
          <article
            key={`${role.company}-${role.title}-${index}`}
            className={clsx(
              "border border-gray-200 rounded-xl shadow-sm",
              "hover:shadow-md transition-shadow duration-200",
              "p-6 bg-white"
            )}
          >
            {/* Card Header */}
            <header className="flex justify-between items-start mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {role.title}
                </h3>
                <p className="text-base text-gray-600 font-semibold">
                  {role.company}
                </p>
              </div>
              <time
                className={clsx(
                  "text-sm text-gray-500 whitespace-nowrap",
                  "ml-4 font-medium"
                )}
              >
                {formatDate(role.start_date)} – {formatDate(role.end_date)}
              </time>
            </header>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed">
              {role.description}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
