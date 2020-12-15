import { GridElement } from "../CoreUI/Grid/GridElement";
import { Grid } from "../CoreUI/Grid/Grid";
import ReactPlayer from "react-player/lazy";
import { TabSectionHeaderProps } from "../../utils/styleUtils/commonTextProps";
import { SimpleText } from "../CoreUI/Text/SimpleText";

const vidUrl = "https://www.youtube.com/watch?v=DHvZLI7Db8E";

const Unplayable = ({ theme }) => {
  const {
    text: {
      styles: { primary: textStyle },
      colors: { menuItem: textColor },
      sizes: { xxlarge },
    },
  } = theme;

  const moreStyles = `
        text-align: center;
    `;

  return (
    <SimpleText
      size={xxlarge}
      style={textStyle}
      color={textColor}
      moreStyles={moreStyles}
    >
      Video unavailable at this time
    </SimpleText>
  );
};

export const Help = ({ theme }) => {
  const customStyles = `
        background-color: ${theme.text.colors.secondary};
        justify-content: center;
        border-radius: 2px;
    `;

  return (
    <React.Fragment>
      <SimpleText {...TabSectionHeaderProps(theme)}>Help Center</SimpleText>
      <Grid numCols={16} numRows={9} rowUnit="28px" colUnit="28px" key={0}>
        <GridElement
          position={{
            startCol: 1,
            endCol: 17,
            startRow: 1,
            endRow: 10,
          }}
          customStyles={customStyles}
        >
          {ReactPlayer.canPlay(vidUrl) ? (
            <ReactPlayer url={vidUrl} controls width="100%" height="100%" />
          ) : (
            <Unplayable theme={theme} />
          )}
        </GridElement>
      </Grid>
    </React.Fragment>
  );
};
