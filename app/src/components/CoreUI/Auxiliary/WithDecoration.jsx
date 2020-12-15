import PropTypes from "prop-types";
import { isValidElement } from "react";
import styled from "styled-components";
import { WithInternalWidth } from "./WithInternalWidth";
import { sanitizeNumericVals } from "../../../utils/styleUtils/generalCSSUtils";

const Wrapper = styled.div`
  position: relative;
  ${(props) => `width: ${props.width};`}
  ${(props) => `height: ${props.height};`}
  ${(props) => props.centered && `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

const StyledDecoration = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  ${(props) => {
    return `${props.position === "end" ? "right" : "left"}: ${props.padding};`;
  }}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Decoration = ({ decoration, position, padding = "4px" }) => (
  <StyledDecoration position={position} padding={padding}>
    {decoration}
  </StyledDecoration>
);

Decoration.protoTypes = {
  decoration: PropTypes.node,
  position: PropTypes.string,
  padding: PropTypes.number,
};

export const WithDecoration = ({ children, width, decoration, ...props }) => {
  const { start, end, ...rest } =
    isValidElement(decoration) ||
    typeof decoration === "string" ||
    (typeof decoration === "object" && decoration.constructor === Array)
      ? { start: decoration }
      : decoration || {};

  const {
    startPadding,
    startWidth,
    endPadding,
    endWidth,
    width: wrapperWidth,
  } = sanitizeNumericVals({ ...rest, width });

  return (
    <Wrapper width={wrapperWidth} {...props}>
      <WithInternalWidth
        start={start}
        end={end}
        startWidth={startWidth}
        endWidth={endWidth}
      >
        {children}
      </WithInternalWidth>
      {start && (
        <Decoration
          decoration={start}
          padding={startPadding}
          position="start"
        />
      )}
      {end && (
        <Decoration decoration={end} padding={endPadding} position="end" />
      )}
    </Wrapper>
  );
};

WithDecoration.propTypes = {
  chilrdren: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  decoration: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      start: PropTypes.node,
      startWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      startPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      end: PropTypes.node,
      endWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      endPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ]),
};
