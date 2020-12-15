import styled from "styled-components";
import { DecoratedText } from "../Text/DecoratedText";
import { DefaultTheme as theme } from "../../../themes/DefaultTheme";
import { MultiText } from "../../CoreUI/Text/MultiText";

export const ItemStyler = `
  background-color: ${theme.text.colors.secondary};
`;

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const MultiWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${theme.surface.colors.primary};
  text-align: center;
  width: 100%;
`;

const TextWrapper = styled.div`
  background-color: ${(props) => props.theme.background.colors.secondary};
  display: inline-block;
  text-align: center;
  color: ${(props) => props.theme.text.colors.other.a};
  padding: 5px 10px 5px 10px;
`;

export const FeaturedItem = ({
  icon,
  text,
  theme,
  brand,
  campaign,
  product,
}) => {
  return (
    <Container>
      <DecoratedText
        decoration={{ end: icon, endPadding: 20 }}
        width="100%"
        style={theme.text.styles.bold}
        size={theme.text.sizes.xsmall}
        margin="20px 0px 0px 0px"
        padding="0px 0px 0px 20px"
      >
        <TextWrapper theme={theme}>{text}</TextWrapper>
      </DecoratedText>
      <MultiWrapper>
        <MultiText
          textConfigs={[
            {
              content: brand,
              style: theme.text.styles.bold,
              size: theme.text.sizes.medium,
              padding: "10px 5px 0px 5px",
            },
            {
              content: campaign,
              style: theme.text.styles.primary,
              color: theme.text.colors.primary,
              size: theme.text.sizes.small,
              padding: "0px 5px 0px 5px",
            },
            {
              content: product,
              style: theme.text.styles.primary,
              size: theme.text.sizes.medium,
              padding: "0px 5px 10px 5px",
            },
          ]}
        />
      </MultiWrapper>
    </Container>
  );
};
