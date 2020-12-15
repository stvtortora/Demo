import PropTypes from "prop-types";
import styled from "styled-components";
import { font } from "../../../utils/styleUtils/fontUtils";
import { memo } from "react";
import { sanitizeNumericVals } from "../../../utils/styleUtils/generalCSSUtils";

export const StyledText = styled.div`
  ${({ padding, margin, moreStyles, ...fontProps }) => {
    return `
    padding: ${padding};
    margin: ${margin};
    ${font(fontProps)};
    ${moreStyles};
    `;
  }}
`;

export const SimpleText = memo(
  ({
    children,
    style,
    size,
    color,
    backgroundColor,
    weight,
    lowerCase,
    padding,
    margin = "4px",
    moreStyles,
    ...props
  }) => {
    const {
      size: sanitizedSize,
      padding: sanitizedPadding,
      margin: sanitizedMargin,
    } = sanitizeNumericVals({ size, padding, margin });
    return (
      <StyledText
        family={style} // style is a reserved keyword for html elements, so we use 'family' here instead
        size={sanitizedSize}
        color={color}
        backgroundColor={backgroundColor}
        weight={weight}
        lowerCase={lowerCase}
        padding={sanitizedPadding}
        margin={sanitizedMargin}
        moreStyles={moreStyles}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);

SimpleText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  weight: PropTypes.number,
  lowerCase: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  moreStyles: PropTypes.string,
};
