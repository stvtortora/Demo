// this component will abstract WithInternalWidth and be used in WithDecoration.
// it wil split a componet's width in two

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  ${(props) => `width: ${props.width}`}
`;

const Split = ({ itemA, itemB, widthA, widthB }) => {};
