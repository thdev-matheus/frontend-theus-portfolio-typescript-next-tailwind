import { IconType } from "react-icons";

export interface IProject {
  id: string;
  name: string;
  urlRepo: string;
  urlDeploy: string | null;
  languageIcons: IconType[];
}
