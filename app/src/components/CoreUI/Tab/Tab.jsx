import { useTabContext } from "../../../contexts/tabContext";
import styled from "styled-components";
import { TabMenu } from "./TabMenu";
import { Tabs } from "../../Tabs/index";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-top: ${(props) => `1px solid ${props.border}`};
  ${(props) => `background-color: ${props.backgroundColor}`};
`;

const TabBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  > * {
    margin-bottom: 30px;
  }
`;

export const Tab = () => {
  const { tabName, setTheme } = useTabContext();
  const theme = useContext(ThemeContext);

  const { body: TabBody } = Tabs[tabName] || {};

  return (
    <TabWrapper
      backgroundColor={theme.background.colors.primary}
      border={theme.border.colors.primary}
    >
      <TabMenu tabData={Tabs} theme={theme} currentTab={tabName} />
      <TabBodyWrapper>
        <div>{TabBody && <TabBody theme={theme} setTheme={setTheme}/>}</div>
      </TabBodyWrapper>
    </TabWrapper>
  );
};
