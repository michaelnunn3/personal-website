import clsx from "clsx";
import Card from "../layout/Card";

export default function ExperienceSection({ experience }) {
  return (
    <div aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className={clsx(
          "text-3xl sm:text-4xl font-extrabold uppercase mb-8",
          "tracking-wide text-slate-900"
        )}
      >
        Experience
      </h2>
      <div className="grid gap-6">
        {experience.map((role, index) => (
          <Card key={`${role.company}-${role.title}-${index}`}>
            {/* Card Header */}
            <header
              className={clsx(
                "flex flex-col sm:flex-row sm:justify-between",
                "sm:items-start mb-3 gap-2"
              )}
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {role.title}
                </h3>
                <p className="text-base text-slate-600 font-semibold">
                  {role.company}
                </p>
              </div>
              <time className="text-sm text-slate-500 font-medium">
                {role.start_date} – {role.end_date}
              </time>
            </header>

            {/* Description */}
            <div className="text-slate-700 leading-relaxed">
              {role.description}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
