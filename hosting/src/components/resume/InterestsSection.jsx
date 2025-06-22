import clsx from "clsx";

export default function InterestsSection({ interests }) {
  return (
    <div aria-labelledby="interests-heading">
      <h2
        id="interests-heading"
        className={clsx(
          "text-3xl font-extrabold uppercase mb-8",
          "tracking-wide text-gray-900"
        )}
      >
        Interests
      </h2>
      <div className="grid gap-6">
        <article
          className={clsx(
            "border border-gray-200 rounded-xl shadow-sm",
            "hover:shadow-md transition-shadow duration-200",
            "p-6 bg-white"
          )}
        >
          <div className="text-gray-700 leading-relaxed">
            <p>{interests}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
