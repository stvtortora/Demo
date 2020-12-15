import { SimpleText } from "./SimpleText";
import PropTypes from "prop-types";

export const MultiText = ({ textConfigs }) => {
  return textConfigs.map((config, i) => {
    const { content, ...rest } = config;
    return <SimpleText {...rest} key={i}>{content}</SimpleText>;
  });
};

MultiText.propTypes = {
  textConfigs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      style: PropTypes.string,
      size: PropTypes.string,
      color: PropTypes.string,
      backgroundColor: PropTypes.string,
      weight: PropTypes.number,
      lowerCase: PropTypes.bool,
      padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      moreStyles: PropTypes.string,
    })
  ),
};
