import { useElementDimensions } from "../../../hooks/useElementDimensions";
import { useId } from "react-id-generator";
import PropTypes from "prop-types";

export const WithContainerDimensions = ({ Component, componentProps = {} }) => {
  const elementId = useId()[0];

  const elementDimensions = useElementDimensions(elementId);

  if (!elementDimensions) {
    return <div id={elementId} style={{ height: "100%" }} />;
  }

  const { height, width } = elementDimensions;

  return <Component {...componentProps} height={height} width={width} />;
};

WithContainerDimensions.propTypes = {
  Component: PropTypes.func.isRequired,
  componentProps: PropTypes.object,
};
