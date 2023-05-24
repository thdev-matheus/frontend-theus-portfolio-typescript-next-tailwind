import * as T from "./types";
import { v4 as uuid } from "uuid";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
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
    urlDeploy: null,
    languageIcons: [SiNextdotjs, SiTailwindcss, SiTypescript],
  },
  {
    id: uuid(),
    name: "Stock Manager",
    urlRepo:
      "https://github.com/thdev-matheus/fullstack-stockmanager-next-node",
    urlDeploy: null,
    languageIcons: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      FaNode,
      FaDocker,
      SiPostgresql,
    ],
  },
  {
    id: uuid(),
    name: "Tela de Login Mais Bonita",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-mp-tela-login-next-typescript-tailwind",
    urlDeploy: "https://theus-tela-de-login-codante.vercel.app/",
    languageIcons: [SiNextdotjs, SiTypescript, SiTailwindcss],
  },
  {
    id: uuid(),
    name: "Kenzie Hub 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-kenziehub2.0-react-typescript",
    urlDeploy: null,
    languageIcons: [FaReact, SiTypescript, SiStyledcomponents, SiReactrouter],
  },
  {
    id: uuid(),
    name: "Barra Sucesso 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-barra-sucesso-v2-react-typescript",
    urlDeploy: "https://barra-sucesso-v2.vercel.app/",
    languageIcons: [FaReact, SiTypescript, SiStyledcomponents, SiReactrouter],
  },
  {
    id: uuid(),
    name: "NuKenzie 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-nukenzie-react-typescript",
    urlDeploy: "https://nukenzie-kappa.vercel.app/",
    languageIcons: [FaReact, SiTypescript, SiStyledcomponents, SiReactrouter],
  },
  {
    id: uuid(),
    name: "Álbum de Casamento",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-wedding-invite-html-css",
    urlDeploy:
      "https://thdev-matheus.github.io/frontend-wedding-invite-html-css/",
    languageIcons: [FaHtml5, FaCss3Alt],
  },
  {
    id: uuid(),
    name: "Controlador de Gastos",
    urlRepo:
      "https://github.com/thdev-matheus/mobile-expense-controller-flutter",
    urlDeploy: null,
    languageIcons: [SiDart, SiFlutter],
  },
  {
    id: uuid(),
    name: "Ask Game",
    urlRepo: "https://github.com/thdev-matheus/mobile-ask-game-flutter",
    urlDeploy: null,
    languageIcons: [SiDart, SiFlutter],
  },
  {
    id: uuid(),
    name: "Contact Portfolio",
    urlRepo:
      "https://github.com/thdev-matheus/fullstack-contact-portfolio-react-node-express",
    urlDeploy: null,
    languageIcons: [
      FaReact,
      FaNode,
      FaDocker,
      SiTypescript,
      SiStyledcomponents,
      SiReactrouter,
      SiPostgresql,
    ],
  },
  {
    id: uuid(),
    name: "Curiosidades Sobre Números",
    urlRepo:
      "https://github.com/thdev-matheus/th-matheus-curiosidades-sobre-numeros",
    urlDeploy:
      "https://thdev-matheus.github.io/th-matheus-curiosidades-sobre-numeros/",
    languageIcons: [FaJsSquare, FaHtml5, FaCss3Alt],
  },
  {
    id: uuid(),
    name: "Calculadora de Antecipação",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-antecipation-calculator",
    urlDeploy: "https://frontend-antecipation-calculator.vercel.app/",
    languageIcons: [FaReact, SiTypescript, SiStyledcomponents, SiReactrouter],
  },
  {
    id: uuid(),
    name: "Talks - Django",
    urlRepo: "https://github.com/thdev-matheus/backend-talks-django",
    urlDeploy: null,
    languageIcons: [SiPostgresql, SiDjango, SiSqlite, FaPython],
  },
  {
    id: uuid(),
    name: "Talks - Node.JS",
    urlRepo: "https://github.com/thdev-matheus/backend-talks-express-node",
    urlDeploy: null,
    languageIcons: [SiTypescript, SiPostgresql, FaNode, FaDocker],
  },
  {
    id: uuid(),
    name: "On Trip",
    urlRepo: "https://github.com/thdev-matheus/backend-on-trip-node-express",
    urlDeploy: null,
    languageIcons: [SiTypescript, SiPostgresql, FaNode, FaDocker],
  },
  {
    id: uuid(),
    name: "Ticket Master",
    urlRepo: "https://github.com/thdev-matheus/backend-ticket-master-django",
    urlDeploy: null,
    languageIcons: [SiPostgresql, SiDjango, SiSqlite, FaPython],
  },
  {
    id: uuid(),
    name: "Genius Game",
    urlRepo: "https://github.com/thdev-matheus/frontend-genius-vanilla.js",
    urlDeploy: "https://thdev-matheus.github.io/frontend-genius-vanilla.js/",
    languageIcons: [FaHtml5, FaCss3Alt, FaJsSquare],
  },
];
