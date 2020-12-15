import PropTypes from "prop-types";
import { SimpleText } from "./SimpleText";
import { WithDecoration } from "../Auxiliary/WithDecoration";

export const DecoratedText = ({
  children,
  style,
  size,
  color,
  backgroundColor,
  weight,
  lowerCase,
  width,
  margin,
  padding,
  decoration,
  textProps,
  ...props
}) => {
  return (
    <WithDecoration decoration={decoration} width={width} {...props}>
      <SimpleText
        style={style}
        size={size}
        color={color}
        backgroundColor={backgroundColor}
        weight={weight}
        lowerCase={lowerCase}
        margin={margin}
        padding={padding}
        {...textProps}
      >
        {children}
      </SimpleText>
    </WithDecoration>
  );
};

DecoratedText.propTypes = {
  chilrdren: PropTypes.node,
  style: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  weight: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lowerCase: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
