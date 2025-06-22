export default function ExperienceSection({ experience }) {
  const sortedExperience = [...experience].sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA;
  });

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-extrabold uppercase mb-8 tracking-wide text-gray-900">
        Experience
      </h2>
      {sortedExperience.map((role, index) => (
        <div
          key={index}
          className="mb-10 border-b border-gray-200 pb-6 last:border-0 last:pb-0"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 className="text-xl font-bold text-gray-800">
              {role.title} – {role.company}
            </h3>
            <span className="text-sm text-gray-500 mt-1 md:mt-0 md:ml-6 min-w-[140px]">
              {role.start_date} – {role.end_date}
            </span>
          </div>
          <p className="mt-3 text-gray-700 leading-relaxed">
            {role.description}
          </p>
        </div>
      ))}
    </section>
  );
}
