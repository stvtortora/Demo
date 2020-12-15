import { useScreenSize } from "../../src/hooks/useScreenSize";
import { useRouter } from "next/router";
import { useTheme } from "../../src/hooks/useTheme";
import { TabContext } from "../../src/contexts/tabContext";
import { AppBar } from "../../src/components/CoreUI/AppBar/AppBar";
import { Tab } from "../../src/components/CoreUI/Tab/Tab";
import { AppTheme } from "../../src/themes/DefaultTheme";
import { ThemeProvider } from "styled-components";

const TabRoute = () => {
  const screenSize = useScreenSize();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { tabName } = router.query;
  return (
    <TabContext.Provider value={{ screenSize, tabName, setTheme }}>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Tab />
      </ThemeProvider>
    </TabContext.Provider>
  );
};

export default TabRoute;
