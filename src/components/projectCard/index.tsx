import * as T from "./types";
import { FaGithub } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";

export default function ProjectCard({
  project: { languageIcons, name, urlDeploy, urlRepo },
}: T.IProjectCardProps) {
  return (
    <li className="flex min-w-[26rem] max-w-[26rem] min-h-[12rem] max-h-[12rem] rounded-3xl overflow-hidden border border-white max-lg:max-w-[17rem] max-lg:min-w-[17rem]">
      <div className="flex flex-col justify-between w-5/6 h-full px-4 py-4 overflow-hidden whitespace-nowrap overflow-ellipsis">
        <div className="flex flex-col gap-4 overflow-hidden whitespace-nowrap overflow-ellipsis">
          <h3
            className="overflow-hidden title-3 whitespace-nowrap overflow-ellipsis"
            title={name}
          >
            {name}
          </h3>

          <div className="flex gap-2 max-lg:gap-2">
            {languageIcons.map((Icon) => (
              <Icon className="text-[2rem] max-lg:text-[1.5rem]" />
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="w-fit link text-color-primary hover:text-color-secondary hover:btn-animation"
        >
          Saiba mais
        </a>
      </div>

      <div className="flex flex-col items-center justify-start w-1/6 h-full gap-4 pt-4">
        <a href={urlRepo} title="Ir para o repositório">
          <FaGithub className="text-[2rem] max-lg:text-[1.5rem] hover:text-color-primary hover:btn-animation transition-all" />
        </a>
        {urlDeploy && (
          <a href={urlDeploy} title="Ir para o deploy">
            <IoArrowRedoSharp className="text-[2rem] max-lg:text-[1.5rem] hover:text-color-primary hover:btn-animation transition-all" />
          </a>
        )}
      </div>
    </li>
  );
}
