import {
  CodeBracketIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function AboutSection({ about }) {
  return (
    <div aria-labelledby="about-heading">
      {/* Name */}
      <h1
        id="about-heading"
        className="text-5xl font-extrabold uppercase text-gray-900"
      >
        {about.name}
      </h1>

      {/* Contact Line */}
      <div
        className={clsx(
          "flex flex-wrap items-center gap-4 mt-2",
          "text-gray-600 text-sm"
        )}
      >
        <div className="flex items-center gap-1">
          <EnvelopeIcon className="w-4 h-4" />
          <a
            href={`mailto:${about.email}`}
            className="hover:underline transition-colors duration-150"
          >
            {about.email}
          </a>
        </div>
        <div className="flex items-center gap-1">
          <PhoneIcon className="w-4 h-4" />
          <span>{about.phone}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPinIcon className="w-4 h-4" />
          <span>{about.address}</span>
        </div>
      </div>

      {/* Bio Card */}
      <div
        className={clsx(
          "border border-gray-200 rounded-xl shadow-sm",
          "hover:shadow-md transition-shadow duration-200",
          "p-6 bg-white mt-8"
        )}
      >
        <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
        <div className="text-gray-700 leading-relaxed">
          <p>{about.bio}</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <a
          href={about.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "p-2 rounded-lg border border-gray-200 bg-white",
            "hover:shadow-md hover:border-blue-300",
            "transition-all duration-200"
          )}
          aria-label="LinkedIn Profile"
        >
          <UserCircleIcon
            className={clsx(
              "w-6 h-6 text-gray-700 hover:text-blue-600",
              "transition-colors duration-150"
            )}
          />
        </a>
        <a
          href={about.github}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "p-2 rounded-lg border border-gray-200 bg-white",
            "hover:shadow-md hover:border-gray-400",
            "transition-all duration-200"
          )}
          aria-label="GitHub Profile"
        >
          <CodeBracketIcon
            className={clsx(
              "w-6 h-6 text-gray-700 hover:text-gray-900",
              "transition-colors duration-150"
            )}
          />
        </a>
      </div>
    </div>
  );
}
