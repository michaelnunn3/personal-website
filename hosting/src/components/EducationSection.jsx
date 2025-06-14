export default function EducationSection({ education }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div>
        <h3 className="text-xl font-bold">
          {education.degree}, {education.major}
        </h3>
        <p className="text-sm text-gray-600">
          {education.school} ({education.start_year} – {education.end_year})
        </p>
        <p className="text-sm text-gray-500">Minor: {education.minor}</p>
      </div>
    </section>
  );
}
