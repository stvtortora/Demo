import { Home } from "./home";
import { Dashboard } from "./dashboard";
import { Help } from "./help";
import { ManageThemes } from "./manage_themes/manage_themes";
import {
  faHome,
  faSignal,
  faQuestion,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export const Tabs = {
  home: { body: Home, displayName: "Home", Icon: faHome },
  dashboard: {
    body: Dashboard,
    displayName: "Dashboard",
    Icon: faSignal,
  },
  theme: {
    body: ManageThemes,
    displayName: "Manage Themes",
    Icon: faPalette
  },  
  help: {
    body: Help,
    displayName: "Help Center",
    Icon: faQuestion
  }
};
