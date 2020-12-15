import {
  faPlusCircle,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { GridElement } from "../../CoreUI/Grid/GridElement";
import { Grid } from "../../CoreUI/Grid/Grid";
import defaultThemeValues from "../../../themes/defaultThemeValues";
import { SimpleText } from "../../CoreUI/Text/SimpleText";

const ThemeOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  width: 300px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor};
  }
`;

const OptionActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    padding: 0 10px 0 0;
  }
`;

const ThemeOption = ({
  theme,
  textStyle,
  hoverColor,
  editIconColor,
  deleteIconColor,
  onSelectTheme,
  onEditTheme,
  onDeleteTheme,
  editable,
}) => {
  const handleEditOrDelete = (method) => {
    return (e) => {
      e.stopPropagation();
      method();
    };
  };

  return (
    <ThemeOptionWrapper onClick={onSelectTheme} hoverColor={hoverColor}>
      <SimpleText {...textStyle}>{theme.name}</SimpleText>
      {editable && (
        <OptionActionsWrapper>
          {onEditTheme && (
            <FontAwesomeIcon
              color={editIconColor}
              onClick={handleEditOrDelete(onEditTheme)}
              icon={faEdit}
            />
          )}
          {onDeleteTheme && (
            <FontAwesomeIcon
              color={deleteIconColor}
              onClick={handleEditOrDelete(onDeleteTheme)}
              icon={faTrash}
            />
          )}
        </OptionActionsWrapper>
      )}
    </ThemeOptionWrapper>
  );
};

const ThemeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4px;
`;

const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ThemeListView = ({
  currentTheme,
  themeOptions,
  onAddOrUpdateTheme,
  onDeleteTheme,
  onSelectTheme,
}) => {
  const createTheme = () => {
    onAddOrUpdateTheme(defaultThemeValues);
  };

  const editTheme = (theme) => {
    return () => {
      onAddOrUpdateTheme(theme);
    };
  };

  const selectTheme = (theme) => {
    return () => {
      onSelectTheme(theme);
    };
  };

  const deleteTheme = (themeId) => {
    return () => {
      onDeleteTheme(themeId);
    };
  };

  const textStyle = {
    color: currentTheme.text.colors.primary,
    style: currentTheme.text.styles.primary,
    size: currentTheme.text.sizes.large,
    padding: "0 10px",
  };

  return (
    <Grid numCols={16} numRows={9} rowUnit="28px" colUnit="28px" key={0}>
      <GridElement
        position={{
          startCol: 1,
          endCol: 17,
          startRow: 1,
          endRow: 10,
        }}
      >
        <ThemeListWrapper>
          <AddButton onClick={createTheme}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              color={currentTheme.icon.colors.other.c}
            />
            <SimpleText {...textStyle} padding="0 0 0 4px">
              New Theme
            </SimpleText>
          </AddButton>

          <List>
            {themeOptions.map((themeOption) => {
              return (
                <ThemeOption
                  theme={themeOption}
                  textStyle={textStyle}
                  hoverColor={currentTheme.background.colors.primary}
                  editIconColor={currentTheme.icon.colors.other.d}
                  deleteIconColor={currentTheme.icon.colors.other.c}
                  onSelectTheme={selectTheme(themeOption)}
                  onEditTheme={editTheme(themeOption)}
                  onDeleteTheme={deleteTheme(themeOption.id)}
                  editable={Boolean(themeOption.id)}
                />
              );
            })}
          </List>
        </ThemeListWrapper>
      </GridElement>
    </Grid>
  );
};
