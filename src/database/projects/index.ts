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
  SiExpress,
  SiSocketdotio,
  SiFramer,
  SiVite,
} from "react-icons/si";

export const projects: T.IProject[] = [
  {
    id: uuid(),
    name: "[Full] Agenda de Contatos",
    urlRepo:
      "https://github.com/thdev-matheus/fullstack-contact-portfolio-react-node-express",
    urlDeploy: null,
    languageIcons: [
      FaReact,
      FaNode,
      SiExpress,
      FaDocker,
      SiTypescript,
      SiStyledcomponents,
      SiReactrouter,
      SiPostgresql,
    ],
  },
  {
    id: uuid(),
    name: "[Front] Portifólio do Theus",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-theus-portfolio-typescript-next-tailwind",
    urlDeploy: null,
    languageIcons: [SiNextdotjs, SiTailwindcss, SiTypescript],
  },
  {
    id: uuid(),
    name: "[Front] Curiosidades Sobre Números",
    urlRepo:
      "https://github.com/thdev-matheus/th-matheus-curiosidades-sobre-numeros",
    urlDeploy:
      "https://thdev-matheus.github.io/th-matheus-curiosidades-sobre-numeros/",
    languageIcons: [FaJsSquare, FaHtml5, FaCss3Alt],
  },
  {
    id: uuid(),
    name: "[Front] Calculadora de Antecipação",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-antecipation-calculator",
    urlDeploy: "https://frontend-antecipation-calculator.vercel.app/",
    languageIcons: [FaReact, SiTypescript, SiStyledcomponents, SiReactrouter],
  },
  {
    id: uuid(),
    name: "[Front] Tela de Login",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-mp-tela-login-next-typescript-tailwind",
    urlDeploy: "https://theus-tela-de-login-codante.vercel.app/",
    languageIcons: [SiNextdotjs, SiTypescript, SiTailwindcss],
  },

  {
    id: uuid(),
    name: "[Front] Souza's",
    urlRepo: "https://github.com/thdev-matheus/frontend-souzas-next-typescript",
    urlDeploy: "https://souza-s.vercel.app/",
    languageIcons: [
      SiNextdotjs,
      SiTypescript,
      SiStyledcomponents,
      SiSocketdotio,
      SiFramer,
    ],
  },
  {
    id: uuid(),
    name: "[Front] Kali Gráfica",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-kali-grafica-next-typescript",
    urlDeploy: "https://kali-grafica.vercel.app/",
    languageIcons: [SiNextdotjs, SiTypescript, SiStyledcomponents, SiFramer],
  },
  {
    id: uuid(),
    name: "[Front] Toggle Dark Mode",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-mp-toggle-dark-mode-react-typescrypt-tailwind",
    urlDeploy: "https://toggle-dark-mode-thdev-matheus.vercel.app/",
    languageIcons: [SiVite, SiTypescript, SiTailwindcss],
  },
  {
    id: uuid(),
    name: "[Front] Barra Sucesso 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-barra-sucesso-v2-react-typescript",
    urlDeploy: "https://barra-sucesso-v2.vercel.app/",
    languageIcons: [FaReact, SiTypescript, SiStyledcomponents, SiReactrouter],
  },
  {
    id: uuid(),
    name: "[Front] NuKenzie 2.0",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-nukenzie-react-typescript",
    urlDeploy: "https://nukenzie-kappa.vercel.app/",
    languageIcons: [FaReact, SiTypescript, SiStyledcomponents, SiReactrouter],
  },
  {
    id: uuid(),
    name: "[Front] Álbum de Casamento",
    urlRepo:
      "https://github.com/thdev-matheus/frontend-wedding-invite-html-css",
    urlDeploy:
      "https://thdev-matheus.github.io/frontend-wedding-invite-html-css/",
    languageIcons: [FaHtml5, FaCss3Alt],
  },
  {
    id: uuid(),
    name: "[Front] Genius Game",
    urlRepo: "https://github.com/thdev-matheus/frontend-genius-vanilla.js",
    urlDeploy: "https://thdev-matheus.github.io/frontend-genius-vanilla.js/",
    languageIcons: [FaHtml5, FaCss3Alt, FaJsSquare],
  },
  {
    id: uuid(),
    name: "[Mobile] Controlador de Gastos",
    urlRepo:
      "https://github.com/thdev-matheus/mobile-expense-controller-flutter",
    urlDeploy: null,
    languageIcons: [SiDart, SiFlutter],
  },
  {
    id: uuid(),
    name: "[Mobile] Cepz",
    urlRepo: "https://github.com/thdev-matheus/mobile-cepz-flutter",
    urlDeploy: null,
    languageIcons: [SiDart, SiFlutter],
  },
  {
    id: uuid(),
    name: "[Mobile] Contact App",
    urlRepo: "https://github.com/thdev-matheus/mobile-contactapp-flutter",
    urlDeploy: null,
    languageIcons: [SiDart, SiFlutter],
  },

  {
    id: uuid(),
    name: "[Back] Talks - Django",
    urlRepo: "https://github.com/thdev-matheus/backend-talks-django",
    urlDeploy: null,
    languageIcons: [SiPostgresql, SiDjango, SiSqlite, FaPython],
  },
  {
    id: uuid(),
    name: "[Back] CRUD de Usuário",
    urlRepo: "https://github.com/thdev-matheus/backend-talks-express-node",
    urlDeploy: null,
    languageIcons: [FaJsSquare, FaNode, SiExpress, FaDocker],
  },
  {
    id: uuid(),
    name: "[Back] Talks - Node.JS",
    urlRepo: "https://github.com/thdev-matheus/backend-talks-express-node",
    urlDeploy: null,
    languageIcons: [SiTypescript, SiPostgresql, FaNode, SiExpress, FaDocker],
  },
  {
    id: uuid(),
    name: "[Back] Souza's",
    urlRepo:
      "https://github.com/thdev-matheus/backend-souzas-express-typescript",
    urlDeploy: null,
    languageIcons: [SiTypescript, FaNode, SiExpress, SiSocketdotio, FaDocker],
  },
  {
    id: uuid(),
    name: "[Back] Whatsapp Bot",
    urlRepo:
      "https://github.com/thdev-matheus/console-whatsapp-bot-typescript-express",
    urlDeploy: null,
    languageIcons: [SiTypescript, FaNode, SiExpress],
  },
  {
    id: uuid(),
    name: "[Back] On Trip",
    urlRepo: "https://github.com/thdev-matheus/backend-on-trip-node-express",
    urlDeploy: null,
    languageIcons: [SiTypescript, SiPostgresql, FaNode, SiExpress, FaDocker],
  },
  {
    id: uuid(),
    name: "[Back] Ticket Master",
    urlRepo: "https://github.com/thdev-matheus/backend-ticket-master-django",
    urlDeploy: null,
    languageIcons: [SiPostgresql, SiDjango, SiSqlite, FaPython],
  },

  {
    id: uuid(),
    name: "[Back] Stock Manager",
    urlRepo: "https://github.com/theus-stock-manager/backend",
    urlDeploy: null,
    languageIcons: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      FaNode,
      SiExpress,
      FaDocker,
      SiPostgresql,
    ],
  },
];
