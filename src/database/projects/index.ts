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

export const projects: T.IProject[] = [
  {
    id: uuid(),
    name: "Portifólio do Theus",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-theus-portfolio-typescript-next-tailwind",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Stock Manager",
    urlRepo:
      "https://github.com/thdev-matheus/fullstack-stockmanager-next-node",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Tela de Login Mais Bonita",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-mp-tela-login-next-typescript-tailwind",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Kenzie Hub 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-kenziehub2.0-react-typescript",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Barra Sucesso 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-barra-sucesso-v2-react-typescript",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "NuKenzie 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-nukenzie-react-typescript",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Álbum de Casamento",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-wedding-invite-html-css",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Controlador de Gastos",
    urlRepo:
      "https://github.com/thdev-matheus/mobile-expense-controller-flutter",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Ask Game",
    urlRepo: "https://github.com/thdev-matheus/mobile-ask-game-flutter",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Contact Portfolio",
    urlRepo:
      "https://github.com/thdev-matheus/fullstack-contact-portfolio-react-node-express",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Curiosidades Sobre Números",
    urlRepo:
      "https://github.com/thdev-matheus/th-matheus-curiosidades-sobre-numeros",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Calculadora de Antecipação",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-antecipation-calculator",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Talks - Django",
    urlRepo: "https://github.com/thdev-matheus/backend-talks-django",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Talks - Node.JS",
    urlRepo: "https://github.com/thdev-matheus/backend-talks-express-node",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "On Trip",
    urlRepo: "https://github.com/thdev-matheus/backend-on-trip-node-express",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Ticket Master",
    urlRepo: "https://github.com/thdev-matheus/backend-ticket-master-django",
    urlDeploy: "",
    languageIcons: [],
  },
  {
    id: uuid(),
    name: "Genius Game",
    urlRepo: "https://github.com/thdev-matheus/frontend-genius-vanilla.js",
    urlDeploy: "",
    languageIcons: [],
  },
];
