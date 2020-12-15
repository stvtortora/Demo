import {
  TabSectionHeaderProps
} from "../../../utils/styleUtils/commonTextProps";
import { SimpleText } from "../../CoreUI/Text/SimpleText";
import { useState } from "react";
import { useThemeOptions } from "../../../hooks/useThemeOptions";
import { ThemeForm } from "./theme_form";
import buildTheme from "../../../themes/buildTheme";
import { ThemeListView } from "./theme_list";

export const ManageThemes = ({ theme: currentTheme, setTheme }) => {
  const [selectedThemeFormValues, setSelectedThemeFormValues] = useState(null);
  const { error, themeOptions, onUpdateTheme, onCreateTheme, onDeleteTheme } = useThemeOptions();

  if (error) {
    return <div>An error occured</div>;
  }

  const selectThemeForm = (formFields) => {
    setSelectedThemeFormValues(formFields);
  };

  const saveTheme = (theme) => {
    if (theme.id) {
      onUpdateTheme(theme);
    } else {
      onCreateTheme(theme);
    }
  };

  const applyTheme = (theme) => {
    const builtTheme = buildTheme(theme);
    setTheme(builtTheme);
  };

  const closeForm = () => {
    setSelectedThemeFormValues(null);
  };

  return (
    <React.Fragment>
      <SimpleText {...TabSectionHeaderProps(currentTheme)}>
        Manage Themes
      </SimpleText>
      {selectedThemeFormValues ? (
        <ThemeForm
          currentTheme={currentTheme}
          initialValues={selectedThemeFormValues}
          onSave={saveTheme}
          onApply={applyTheme}
          onDone={closeForm}
        />
      ) : (
        <ThemeListView
          themeOptions={themeOptions}
          currentTheme={currentTheme}
          onSelectTheme={applyTheme}
          onAddOrUpdateTheme={selectThemeForm}
          onDeleteTheme={onDeleteTheme}
        />
      )}
    </React.Fragment>
  );
};
