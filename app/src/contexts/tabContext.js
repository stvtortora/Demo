import { useContext, createContext } from "react";
import { SCREEN_SIZES } from "../hooks/useScreenSize";

export const TabContext = createContext({
  tabName: "Dashboard",
  screenSize: SCREEN_SIZES.XLARGE,
  setTheme: null
});

export const useTabContext = () => useContext(TabContext);
