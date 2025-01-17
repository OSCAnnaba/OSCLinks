import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import OSCLinks from "../assets/OSCLinks.png";
import WebEtu from "../assets/WebEtu.png";
import WebOSC from "../assets/WebOSC.png";

type Project = {
  name: string;
  description: string;
  tags?: string[];
  link: string | null;
  repo: string | null;
  image: string | null;
};

const projects: Project[] = [
  {
    name: "WebEtu",
    description: "Web-Based Platform for Progres WebEtu ",
    tags: ["NextJS", "TailwindCSS"],
    link: "https://webetu.univ-annaba.dz",
    repo: "https://github.com/OSCAnnaba/WebEtu",
    image: WebEtu,
  },
  {
    name: "WebOSC",
    description: "Web Advertising System",
    tags: ["NextJS", "TailwindCSS"],
    link: null,
    repo: "https://github.com/OSCAnnaba/WebOSC",
    image: WebOSC,
  },
  {
    name: "OSCLinks",
    description: "A simple links page for the Open Source Community Annaba",
    tags: ["React", "TailwindCSS"],
    link: "https://osca.univ-annaba.dz",
    repo: "https://github.com/OSCAnnaba/OSCLinks",
    image: OSCLinks,
  },
];

export default function ProjectsTab() {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white w-full p-4 border border-black rounded-md space-y-4"
        >
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold">{project.name}</h1>
              <p className="text-base">{project.description}</p>
            </div>
            <div className="flex items-center p-2 gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-gray-800"
                >
                  <BiLink className="text-3xl" />
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" className="text-black">
                  <BsGithub className="text-3xl" />
                </a>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {project.tags &&
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-300 font-semibold text-sm text-gray-800 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
          </div>
          {project.image && (
            <div className="border-1 border-black blur-sm hover:blur-0 transition duration-300 rounded-md">
              <img src={project.image} className="w-full rounded-md" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
