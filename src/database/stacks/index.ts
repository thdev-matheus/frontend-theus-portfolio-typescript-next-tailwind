import * as T from "./types";
import { v4 as uuid } from "uuid";

import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
  FaReact,
  FaSass,
  FaNode,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiDart,
  SiFlutter,
  SiReactrouter,
  SiRedux,
  SiPostgresql,
  SiSqlite,
  SiDjango,
} from "react-icons/si";

export const stacksFront: T.IStack[] = [
  {
    id: uuid(),
    name: "HTML 5",
    icon: FaHtml5,
  },
  {
    id: uuid(),
    name: "CSS 3",
    icon: FaCss3Alt,
  },
  {
    id: uuid(),
    name: "GIT",
    icon: FaGitAlt,
  },
  {
    id: uuid(),
    name: "Javascript",
    icon: FaJsSquare,
  },
  {
    id: uuid(),
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    id: uuid(),
    name: "Dart",
    icon: SiDart,
  },
  {
    id: uuid(),
    name: "React.JS",
    icon: FaReact,
  },
  {
    id: uuid(),
    name: "Next.JS",
    icon: SiNextdotjs,
  },
  {
    id: uuid(),
    name: "Flutter",
    icon: SiFlutter,
  },
  {
    id: uuid(),
    name: "Styled Components",
    icon: SiStyledcomponents,
  },
  {
    id: uuid(),
    name: "Tailwind.CSS",
    icon: SiTailwindcss,
  },
  {
    id: uuid(),
    name: "SASS",
    icon: FaSass,
  },
  {
    id: uuid(),
    name: "Redux",
    icon: SiRedux,
  },
  {
    id: uuid(),
    name: "React Router",
    icon: SiReactrouter,
  },
];

export const stacksBack: T.IStack[] = [
  {
    id: uuid(),
    name: "Node.JS",
    icon: FaNode,
  },
  {
    id: uuid(),
    name: "Python",
    icon: FaPython,
  },
  {
    id: uuid(),
    name: "Django",
    icon: SiDjango,
  },
  {
    id: uuid(),
    name: "SQLite",
    icon: SiSqlite,
  },
  {
    id: uuid(),
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    id: uuid(),
    name: "Docker",
    icon: FaDocker,
  },
];
