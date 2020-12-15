import { MultiText } from "./MultiText";
import PropTypes from "prop-types";
import { WithDecoration } from "../Auxiliary/WithDecoration";

export const DecoratedMultiText = ({ textConfigs, ...decorationProps }) => {
  return (
    <WithDecoration {...decorationProps}>
      <MultiText textConfigs={textConfigs} />
    </WithDecoration>
  );
};

DecoratedMultiText.propTypes = {
  textConfigs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      style: PropTypes.string,
      size: PropTypes.string,
      color: PropTypes.string,
      backgroundColor: PropTypes.string,
      weight: PropTypes.number,
      lowerCase: PropTypes.bool,
    })
  ),
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
      padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ]),
};
