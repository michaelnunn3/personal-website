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
    <section className="py-20 max-w-6xl mx-auto px-4">
      {/* Name */}
      <h1 className="text-5xl font-extrabold uppercase text-gray-900">
        {about.name}
      </h1>
      {/* Contact Line */}
      <div
        className={clsx(
          "flex flex-wrap items-center gap-4 mt-2 text-gray-600 text-sm"
        )}
      >
        <div className="flex items-center gap-1">
          <EnvelopeIcon className="w-4 h-4" />
          <a href={`mailto:${about.email}`} className="hover:underline">
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
      {/* Bio */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>{about.bio}</p>
      </div>
      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
          <UserCircleIcon
            className={clsx("w-8 h-8 text-gray-700 hover:text-blue-600")}
          />
        </a>
        <a href={about.github} target="_blank" rel="noopener noreferrer">
          <CodeBracketIcon
            className={clsx("w-8 h-8 text-gray-700 hover:text-blue-600")}
          />
        </a>
      </div>
    </section>
  );
}
