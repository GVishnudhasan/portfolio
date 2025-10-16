import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
  tags: string[];
}

const ProjectCard = ({ src, title, description, githubLink, tags }: Props) => {
  return (
    <div
      className="relative w-full max-w-sm flex-shrink-0 flex flex-col rounded-2xl overflow-hidden 
                 border border-[#7042f8]/40 bg-[#030014]/60 backdrop-blur-xl
                 shadow-[0_0_25px_rgba(112,66,248,0.3)] 
                 hover:shadow-[0_0_35px_rgba(112,66,248,0.45)]
                 hover:scale-[1.03] transition-all duration-300 ease-in-out z-10 pointer-events-auto"
      style={{
        background: "rgba(3, 0, 20, 0.45)",
        boxShadow: "0 0 25px rgba(112,66,248,0.3)",
      }}
    >
      {/* GitHub Button */}
     <a
  href={githubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-4 right-4 z-20 rounded-full 
             bg-[#1a1a1a] hover:bg-[#0e0e0e] 
             p-2 transition-all duration-300 transform hover:scale-110 
             cursor-pointer shadow-md"
  aria-label={`GitHub repository for ${title}`}
>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="text-white transform group-hover:rotate-[360deg] transition-transform duration-500"
        >
          <path d="M12 0C5.37 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.833 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.235-3.22-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.479 5.921.431.372.816 1.102.816 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.373-12-12-12z" />
        </svg>
      </a>

      {/* Project Image */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={800}
        className="w-full aspect-[2/1] object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 pt-4 pb-4 select-text gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white cursor-text">{title}</h2>
          <p className="mt-2 text-white/70 text-sm cursor-text leading-relaxed">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full text-white font-medium backdrop-blur-md shadow-md 
                         bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 
                         transition-all duration-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
