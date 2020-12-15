export const gridPosition = ({ startCol, endCol, startRow, endRow }) => {
  return `
    grid-column-start: ${startCol};
    grid-column-end: ${endCol};
    grid-row-start: ${startRow};
    grid-row-end: ${endRow};
    `;
};
