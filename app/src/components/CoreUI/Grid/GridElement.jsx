import styled from "styled-components";
import { gridPosition } from "../../../utils/styleUtils/gridUtils";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Wrapper = styled.div`
  ${(props) => {
    const { backgroundColor, boxShadow, customStyles } = props;
    return `
    display: flex; 
    flex-direction: column;
    background-color: ${backgroundColor};
    box-shadow: ${boxShadow};
    ${gridPosition(props)};
    ${customStyles}
    `;
  }}
`;

export const GridElement = ({ children, position, customStyles }) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper
      {...position}
      backgroundColor={theme.surface.colors.primary}
      boxShadow={theme.surface.boxShadows.primary}
      customStyles={customStyles}
    >
      {children}
    </Wrapper>
  );
};
