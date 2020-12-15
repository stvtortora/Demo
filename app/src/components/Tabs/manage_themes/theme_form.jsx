import { Grid } from "../../CoreUI/Grid/Grid";
import { GridElement } from "../../CoreUI/Grid/GridElement";
import { GridElementHeaderProps } from "../../../utils/styleUtils/commonTextProps";
import { SimpleText } from "../../CoreUI/Text/SimpleText";
import { DecoratedText } from "../../CoreUI/Text/DecoratedText";
import { CompactPicker, SketchPicker } from "react-color";
import { RelativePop } from "../../CoreUI/Popover/RelativePop";
import { useState, useRef } from "react";
import styled from "styled-components";

const ColorPickerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConfirmButton = styled.div`
  padding: 8px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const ColorPicker = ({ value, onConfirm }) => {
  const [color, setColor] = useState(value);
  const handleChange = (newColor) => setColor(newColor.hex);
  const handleConfirm = () => onConfirm(color);

  return (
    <ColorPickerContent>
      <SketchPicker color={color} onChangeComplete={handleChange} />
      <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
    </ColorPickerContent>
  );
};

const ThemeFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const ColorSquare = styled.div`
  background-color: ${(props) => props.color};
  height: 15px;
  width: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const ThemeField = ({
  textConfig,
  popColor,
  displayName,
  value,
  fieldKey,
  updateTheme,
}) => {
  const fieldRef = useRef(null);
  const getFieldRef = () => {
    return fieldRef;
  };

  const [pickerOpen, setPickerOpen] = useState(false);

  const onConfirmColorChange = (newColor) => {
    updateTheme(fieldKey, newColor);
    setPickerOpen(false);
  };

  const onTogglePicker = () => setPickerOpen(!pickerOpen);

  return (
    <ThemeFieldWrapper ref={fieldRef}>
      {pickerOpen && (
        <RelativePop
          height="332px"
          width="220px"
          position={{
            horizontal: 0,
            vertical: 0,
          }}
          margin="20px 0 0 0"
          arrowPosition={3}
          backgroundColor={popColor}
          borderColor="black"
          onClickAway={onTogglePicker}
          getParentRef={getFieldRef}
        >
          <ColorPicker value={value} onConfirm={onConfirmColorChange} />
        </RelativePop>
      )}
      <DecoratedText
        {...textConfig}
        decoration={{
          start: <ColorSquare color={value} onClick={onTogglePicker} />,
          startWidth: 20,
        }}
      >
        {displayName}
      </DecoratedText>
    </ThemeFieldWrapper>
  );
};

const Button = styled.div`
  ${(props) => {
    return `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    border: 1px solid ${props.borderColor};
    border-radius: 4px;
    opacity: 1;
    background: ${props.backgroundColor} 0% 0% no-repeat padding-box;
    width: 100px;
    height: 50px;
    color: ${props.color};
    font-size: 18px;
    font-family: "Source Sans Pro", sans-serif;
    cursor: pointer;
    margin: 20px 20px 20px 0;
    &:hover {
      background-color: ${props.hoverBackground};
    }`;
  }}
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  margin: 25px;
`;

export const ThemeForm = ({
  currentTheme,
  initialValues,
  onSave,
  onApply,
  onDone,
}) => {
  const [themeValues, setThemeValues] = useState(initialValues);
  const updateTheme = (fieldKey, newVal) => {
    setThemeValues({
      ...themeValues,
      [fieldKey]: newVal,
    });
  };
  const updateName = (e) => updateTheme("name", e.target.value);

  const handleSave = () => onSave(themeValues);
  const handleApply = () => onApply(themeValues);

  const fields = Object.keys(themeValues).reduce((result, fieldKey) => {
    const fieldVal = themeValues[fieldKey];

    const fieldKeyParts = fieldKey.split("_");
    const fieldGroup = fieldKeyParts[0];
    const field = fieldKeyParts[fieldKeyParts.length - 1];

    if (!result[fieldGroup]) {
      result[fieldGroup] = {};
    }

    result[fieldGroup][field] = {
      fieldKey,
      displayName: field[0].toUpperCase() + field.slice(1),
      value: fieldVal,
    };

    return result;
  }, {});

  const {
    text: {
      styles: { primary: primaryStyle },
      colors: { primary: primaryColor },
      sizes: { small },
    },
    border: {
      colors: { primary: primaryBorderColor },
    },
    surface: {
      colors: { primary: primarySurfaceColor },
    },
    tab: {
      colors: { secondary: popColor },
    },
  } = currentTheme;

  const fieldTextConfig = {
    style: primaryStyle,
    size: small,
    color: primaryColor,
  };

  const getFieldsByGroup = (group) => {
    return Object.keys(group).map((fieldKey) => {
      const field = group[fieldKey];
      return (
        <ThemeField
          textConfig={fieldTextConfig}
          popColor={popColor}
          displayName={field.displayName}
          value={field.value}
          fieldKey={field.fieldKey}
          updateTheme={updateTheme}
        />
      );
    });
  };

  return (
    <>
      <ButtonsContainer>
        <Button
          color={primaryColor}
          backgroundColor={primarySurfaceColor}
          borderColor={primaryBorderColor}
          onClick={handleApply}
        >
          Apply
        </Button>
        <Button
          color={primaryColor}
          backgroundColor={primarySurfaceColor}
          borderColor={primaryBorderColor}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          color={primaryColor}
          backgroundColor={primarySurfaceColor}
          borderColor={primaryBorderColor}
          onClick={onDone}
        >
          Done
        </Button>
      </ButtonsContainer>
      <Grid numCols={12} numRows={4} rowUnit="135px" colUnit="56px" key={1}>
        <GridElement
          position={{
            startCol: 9,
            endCol: 13,
            startRow: 3,
            endRow: 4,
          }}
        >
          <SimpleText {...GridElementHeaderProps(currentTheme)}>
            Background
          </SimpleText>
          {getFieldsByGroup(fields.background)}
        </GridElement>
        <GridElement
          position={{
            startCol: 5,
            endCol: 9,
            startRow: 1,
            endRow: 2,
          }}
        >
          <SimpleText {...GridElementHeaderProps(currentTheme)}>
            Border
          </SimpleText>
          {getFieldsByGroup(fields.border)}
        </GridElement>
        <GridElement
          position={{
            startCol: 9,
            endCol: 13,
            startRow: 1,
            endRow: 2,
          }}
        >
          <SimpleText {...GridElementHeaderProps(currentTheme)}>
            Surface
          </SimpleText>
          {getFieldsByGroup(fields.surface)}
        </GridElement>
        <GridElement
          position={{
            startCol: 1,
            endCol: 5,
            startRow: 2,
            endRow: 5,
          }}
        >
          <SimpleText {...GridElementHeaderProps(currentTheme)}>
            Text
          </SimpleText>
          {getFieldsByGroup(fields.text)}
        </GridElement>
        <GridElement
          position={{
            startCol: 5,
            endCol: 9,
            startRow: 2,
            endRow: 4,
          }}
        >
          <SimpleText {...GridElementHeaderProps(currentTheme)}>
            Icon
          </SimpleText>
          {getFieldsByGroup(fields.icon)}
        </GridElement>
        <GridElement
          position={{
            startCol: 9,
            endCol: 13,
            startRow: 2,
            endRow: 3,
          }}
        >
          <SimpleText {...GridElementHeaderProps(currentTheme)}>Tab</SimpleText>
          {getFieldsByGroup(fields.tab)}
        </GridElement>
        <GridElement
          position={{
            startCol: 1,
            endCol: 5,
            startRow: 1,
            endRow: 2,
          }}
        >
          <SimpleText {...GridElementHeaderProps(currentTheme)}>
            Name
          </SimpleText>
          <Input type="text" onChange={updateName} value={themeValues.name} />
        </GridElement>
      </Grid>
    </>
  );
};
