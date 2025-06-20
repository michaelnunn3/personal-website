export default function AboutSection({ about }) {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold">{about.name}</h1>
      <p className="mt-2 text-gray-700">{about.bio}</p>
      <ul className="mt-4 text-sm text-gray-600 space-y-1">
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${about.email}`}>{about.email}</a>
        </li>
        <li>
          <strong>Phone:</strong> {about.phone}
        </li>
        <li>
          <strong>Address:</strong> {about.address}
        </li>
        <li>
          <strong>GitHub:</strong> <a href={about.github}>{about.github}</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a href={about.linkedin}>{about.linkedin}</a>
        </li>
      </ul>
    </section>
  );
}
