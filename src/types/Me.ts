import { skill } from "./Skill";
import { contact } from "./Contact";
import { history } from "./History";

export interface me {
  name: string;
  about: string;
  age: string;
  skills: [skill];
  histories: [history];
  contact: [contact];
}
