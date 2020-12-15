import styled from "styled-components";
import { StyledText, SimpleText } from "../Text/SimpleText";
import { DecoratedText } from "../Text/DecoratedText";
import { WithDecoration } from "../Auxiliary/WithDecoration";
// import { Popover } from "../Popover/Popover";
import { RelativePop } from "../Popover/RelativePop";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { centerMixin } from "../../../utils/styleUtils/generalCSSUtils";
import { useState, useRef } from "react";

const PopoverContentWrapper = styled.div`
  ${centerMixin}
  flex-direction: column;
  padding: 10px 25px;
`;

const PopoverContent = ({ textTheme, borderColor }) => {
  const itemStyle = `
  border-bottom: 1px solid ${borderColor};
  width: 100%;
  text-align: center;
  `;

  const cursorStyle = itemStyle + `cursor: pointer;`;

  return (
    <PopoverContentWrapper>
      <SimpleText
        style={textTheme.styles.bold}
        weight="bold"
        color={textTheme.colors.other.f}
        size={textTheme.sizes.small}
        padding={10}
        moreStyles={itemStyle}
      >
        STREAMER
      </SimpleText>
      <SimpleText
        style={textTheme.styles.primary}
        color={textTheme.colors.other.f}
        size={textTheme.sizes.small}
        padding={10}
        moreStyles={cursorStyle}
      >
        Account Settings
      </SimpleText>
      <SimpleText
        style={textTheme.styles.primary}
        color={textTheme.colors.other.f}
        size={textTheme.sizes.small}
        padding={10}
        moreStyles={cursorStyle}
      >
        Feedback
      </SimpleText>
      <SimpleText
        style={textTheme.styles.primary}
        color={textTheme.colors.other.f}
        size={textTheme.sizes.small}
        padding={10}
        moreStyles={cursorStyle}
      >
        Logout
      </SimpleText>
    </PopoverContentWrapper>
  );
};

const Arrow = styled.div`
  ${(props) =>
    `transform: rotate(${props.direction === "up" ? "-135" : "45"}deg);`}
  border: solid ${(props) => props.color};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 5px;
`;


const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.hovBackgroundColor};
  }
  &:hover ${StyledText} {
    color: ${props => props.hovTextColor};
  }
`;

const UserMenu = () => {
  const { text, surface, border, background, icon } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const tabRef = useRef(null);

  const getTabRef = () => {
    return tabRef;
  }

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <StyledUserMenu ref={tabRef} onClick={toggleDropdown} hovBackgroundColor={background.colors.primary} hovTextColor={text.colors.primary}>
        <WithDecoration
          width="100%"
          height="100%"
          centered={true}
          decoration={{ end: <img src="/images/Avatar.png" />, endWidth: 50 }}
        >
          <DecoratedText
            decoration={{
              start: (
                <Arrow
                  direction={dropdownOpen ? "up" : "down"}
                  color={icon.colors.other.e}
                />
              ),
              startWidth: 18
            }}
            color={text.colors.primary}
            style={text.styles.primary}
            size={text.sizes.small}
            margin="4px 10px"
          >
            User
          </DecoratedText>
        </WithDecoration>
      </StyledUserMenu>
      {dropdownOpen && (
        <RelativePop
          height="200px"
          width="197px"
          arrowPosition={75}
          position={{
            horizontal: 127,
            vertical: 87,
          }}
          backgroundColor={surface.colors.primary}
          borderColor="black"
          onClickAway={() => setDropdownOpen(false)}
          getParentRef={getTabRef}
        >
          <PopoverContent
            textTheme={text}
            borderColor={border.colors.primary}
          />
        </RelativePop>
      )}
    </React.Fragment>
  );
};

const StyledAppBar = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
`;

const AppBarLeft = styled.div`
  min-width: 210px;
  background-color: ${(props) => props.backgroundColor};
  ${centerMixin}
`;

const AppBarRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const AppBar = () => {
  const theme = useContext(ThemeContext);
  const { tab, text } = theme;

  return (
    <StyledAppBar>
      <AppBarLeft backgroundColor={tab.colors.primary}>
        <SimpleText
          color={text.colors.menuItem}
          style={text.styles.bold}
          size={text.sizes.medium}
          weight={700}
        >
          STREAMER PORTAL
        </SimpleText>
      </AppBarLeft>
      <AppBarRight>
        <UserMenu />
      </AppBarRight>
    </StyledAppBar>
  );
};
