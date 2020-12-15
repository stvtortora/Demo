import { SimpleText } from "../Text/SimpleText";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  align-items: left;
`;

const GridElementHeader = ({ children, theme }) => {
  return (
    <HeaderContainer>
      <SimpleText
        color={theme.text.colors.secondary}
        style={theme.text.styles.primary}
        size={theme.text.sizes.xlarge}
      >
        {children}
      </SimpleText>
    </HeaderContainer>
  );
};

export default GridElementHeader;
