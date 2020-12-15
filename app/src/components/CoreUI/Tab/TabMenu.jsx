import styled from "styled-components";
import { DecoratedText } from "../Text/DecoratedText";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabOptions = styled.div`
  min-height: 100vh;
  min-width: 210px;
  background-color: ${(props) => props.theme.tab.colors.primary};
`;

const TabOption = styled.div`
  height: 53px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  border-left: ${(props) => props.borderLeft};
  &:hover {
    cursor: pointer;
  }
`;

export const TabMenu = ({ tabData, theme, currentTab }) => {
  return (
    <TabOptions>
      {Object.keys(tabData).map((tabName, i) => {
        const { displayName, Icon } = tabData[tabName];
        const isCurrentTab = tabName === currentTab;
        return (
          <Link href="/main/[tabName]" as={`/main/${tabName}`} key={i}>
            <TabOption
              borderLeft={
                isCurrentTab
                  ? `5px solid ${theme.icon.colors.activeMenuItem}`
                  : ""
              }
            >
              <DecoratedText
                color={theme.text.colors.menuItem}
                style={theme.text.styles.primary}
                weight={200}
                decoration={{
                  start: (
                    <FontAwesomeIcon
                      color={
                        isCurrentTab
                          ? theme.icon.colors.activeMenuItem
                          : theme.icon.colors.menuItem
                      }
                      icon={Icon}
                    />
                  ),
                  startWidth: 25,
                }}
              >
                {displayName}
              </DecoratedText>
            </TabOption>
          </Link>
        );
      })}
    </TabOptions>
  );
};
