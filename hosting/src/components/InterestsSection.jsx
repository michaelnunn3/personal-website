export default function InterestsSection({ interests }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Interests</h2>
      <p className="text-gray-700">{interests}</p>
    </section>
  );
}
