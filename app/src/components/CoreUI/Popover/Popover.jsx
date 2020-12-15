import styled from "styled-components";
import PropTypes from "prop-types";
import { sanitizeNumericVals } from "../../../utils/styleUtils/generalCSSUtils";

const PopoverBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const StyledPopover = styled.div`
  ${(props) => {
    return `
    height: ${props.height};
    width: ${props.width};
    background-color: ${props.backgroundColor};
    position: absolute; 
    right: ${props.position.horizontal}%;
    top: ${props.position.vertical}%;
    z-index: 1;
    box-shadow: 0px 2px 10px #00000027;
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        margin-left: -0.5em;
        left: 75%;
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

export const Popover = ({
  children,
  onClickAway,
  height = 200,
  width = 200,
  position,
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
    <div>
      <PopoverBackground onClick={onClickAway} {...props} />
      <StyledPopover
        onClick={onPopoverClick}
        height={sanitizedHeight}
        width={sanitizedWidth}
        position={position}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      >
        {children}
      </StyledPopover>
    </div>
  );
};

Popover.propTypes = {
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
};
