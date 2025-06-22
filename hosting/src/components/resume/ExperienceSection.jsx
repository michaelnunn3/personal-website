import clsx from "clsx";

export default function ExperienceSection({ experience }) {
  const sortedExperience = [...experience].sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA;
  });

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2
        className={clsx(
          "text-3xl font-extrabold uppercase mb-8 tracking-wide text-gray-900"
        )}
      >
        Experience
      </h2>
      <div className="grid gap-6">
        {sortedExperience.map((role, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm p-6 bg-white"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {role.company}
                </p>
              </div>
              <p className="text-sm text-gray-500 whitespace-nowrap">
                {role.start_date} – {role.end_date}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
