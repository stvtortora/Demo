import styled from "styled-components";

export const WithInternalWidth = styled.div`
  ${({ start, end, startWidth, endWidth }) => {
    return `
        padding: ${`0 ${end ? `${endWidth}` : "0"} 0 ${
          start ? `${startWidth}` : "0"
        }`}
    `;
  }}
`;
