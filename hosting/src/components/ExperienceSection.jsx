export default function ExperienceSection({ experience }) {
  const sortedExperience = [...experience].sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA;
  });

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      {sortedExperience.map((role, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">
            {role.title} – {role.company}
          </h3>
          <p className="text-sm text-gray-500">
            {role.start_date} – {role.end_date}
          </p>
          <p className="mt-1">{role.description}</p>
        </div>
      ))}
    </section>
  );
}
