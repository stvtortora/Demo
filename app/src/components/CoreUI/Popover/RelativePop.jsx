import styled from "styled-components";
import PropTypes from "prop-types";
import { sanitizeNumericVals } from "../../../utils/styleUtils/generalCSSUtils";
import { CatchOutside } from '../Auxiliary/CatchOutside';

const StyledPopover = styled.div`
  ${(props) => {
    return `
    height: ${props.height};
    width: ${props.width};
    background-color: ${props.backgroundColor};
    position: relative; 
    right: ${props.horizontal}%;
    z-index: 2;
    box-shadow: 0px 2px 10px #00000027;
    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        margin-left: -0.5em;
        left: ${props.arrowPosition}%;
        box-sizing: border-box;
        border: .5em solid ${props.borderColor};
        border-color: ${props.backgroundColor} ${props.backgroundColor} transparent transparent;
        transform-origin: 0 0;
        transform: rotate(-45deg);
        box-shadow: .5px -.5px 1px 0 #00000027;
    }
    `;
  }}
`;

const PopoverContiner = styled.div`
  position: absolute;
  top: ${(props) => props.vertical}%;
  margin: ${(props) => props.margin};
`;

export const RelativePop = ({
  children,
  onClickAway,
  getParentRef, //returns parent ref, if child elements need to access it
  height = 200,
  width = 200,
  position,
  arrowPosition,
  margin,
  backgroundColor,
  borderColor,
  ...props
}) => {
  const {
    height: sanitizedHeight,
    width: sanitizedWidth,
  } = sanitizeNumericVals({ height, width });

  const onPopoverClick = (e) => {
    e.stopPropagation();
  };

  return (
      <CatchOutside getParentRef={getParentRef} handler={onClickAway}>
        <PopoverContiner vertical={position.vertical} margin={margin}>
        <StyledPopover
            onClick={onPopoverClick}
            height={sanitizedHeight}
            width={sanitizedWidth}
            horizontal={position.horizontal}
            arrowPosition={arrowPosition}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
        >
            {children}
        </StyledPopover>
        </PopoverContiner>

      </CatchOutside>
  );
};

RelativePop.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  position: PropTypes.shape({
    vertical: PropTypes.number,
    horizontal: PropTypes.number,
  }),
  arrowPosition: PropTypes.number,
  margin: PropTypes.string
};
