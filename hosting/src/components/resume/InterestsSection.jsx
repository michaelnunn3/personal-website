import clsx from "clsx";

export default function InterestsSection({ interests }) {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2
        className={clsx(
          "text-3xl font-extrabold uppercase mb-8 tracking-wide text-gray-900"
        )}
      >
        Interests
      </h2>
      <p className="text-gray-700">{interests}</p>
    </section>
  );
}
