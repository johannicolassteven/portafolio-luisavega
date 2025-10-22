import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, image, url }) {
  return (
    <div className="bg-pink-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-sm">
      <img
        src={image}
        alt={title}
        className="rounded-t-2xl object-cover h-48 w-full"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-pink-700">{title}</h3>
        <p className="text-sm text-pink-900/80">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2 text-pink-600 hover:text-pink-800"
        >
          <ExternalLink size={18} />
          Ver proyecto
        </a>
      </div>
    </div>
  );
}
