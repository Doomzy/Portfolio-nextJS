import { Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  projectData: {
    name: string;
    stack: string;
    description: string;
    thumbnail: StaticImageData;
    fillThumbnail: boolean;
    link?: string;
    gitLink: string;
  };
  indexNum: number;
}

function ProjectCard({ projectData, indexNum }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-y-5 p-8 mx-2 h-full bg-neutral-800 bg-opacity-50 rounded-md relative">
      {/* project card header */}
      <div className="flex justify-center">
        <span className="text-4xl">
          {indexNum.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
      </div>
      {/* project thumbnail */}
      <div className="h-80 w-full border-2 border-white rounded-md relative content-center overflow-hidden group">
        <Image
          fill={projectData.fillThumbnail ? true : false}
          sizes=""
          alt={projectData.name}
          src={projectData.thumbnail}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 hover:opacity-0 transition-opacity"></div>
      </div>
      {/* project description */}
      <div>
        <h1 className="text-4xl text-yellow-500">{projectData.name}</h1>
        <p className="font-mono text-sm font-bold">{projectData.stack}</p>
        <p className="text-sm my-4 font-mono text-white">
          {projectData.description}
        </p>
      </div>
      {/* project git link */}
      <div className="absolute bottom-0 left-10 -mb-8 ">
        <Link target="/blank" href={projectData.gitLink}>
          <div
            className="bg-white text-black rounded-full p-4 hover:scale-105 transition-all"
            title="View"
          >
            <Github size={34} />
          </div>
        </Link>
      </div>
      {/* project preview link */}
      {projectData.link && (
        <div className="absolute bottom-0 right-10 -mb-6">
          <Link target="/blank" href={projectData.link}>
            <div
              className="text-black bg-yellow-500 px-4 py-3 rounded-md text-xl hover:scale-105 transition-all"
              title="View"
            >
              Preview
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
