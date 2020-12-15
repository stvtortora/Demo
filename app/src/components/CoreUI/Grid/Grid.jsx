import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(
    ${(props) => props.numCols},
    [col-start] ${(props) => props.colUnit}
  );
  grid-template-rows: repeat(
    ${(props) => props.numRows},
    [col-end] ${(props) => props.rowUnit}
  );
`;

export const Grid = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
