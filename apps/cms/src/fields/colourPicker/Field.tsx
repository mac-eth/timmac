import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Props } from "payload/components/fields/Text";
import { Label, useFieldType } from "payload/components/forms";
import { usePreferences } from "payload/components/preferences";

import "./styles.scss";

import { HexColorInput, HexColorPicker } from "react-colorful";

import { validateHexColor } from ".";

const defaultColor = "#9A9A9A";

const baseClass = "custom-color-picker";

const preferenceKey = "color-picker-color";

const InputField: React.FC<Props> = (props) => {
  const { path, label, required, defaultValue } = props;

  const { value = "", setValue } = useFieldType({
    path,
    validate: validateHexColor,
  });

  const { getPreference, setPreference } = usePreferences();
  const [color, setColor] = useState(value ?? defaultValue ?? defaultColor);
  const [isAdding, setIsAdding] = useState(false);
  const [colorToAdd, setColorToAdd] = useState(
    value ?? defaultValue ?? defaultColor,
  );

  useEffect(() => {
    const mergeColorsFromPreferences = async () => {
      const colorPreference = await getPreference<string>(
        path + "-" + preferenceKey,
      );
      if (colorPreference) {
        setColor(colorPreference);
      }
    };
    mergeColorsFromPreferences();
  }, [getPreference, setColor]);

  const handleAddColor = useCallback(
    (val?: string) => {
      console.log(val);
      setIsAdding(false);
      setValue(colorToAdd);

      // update state with new colors
      setColor(colorToAdd);
      // store the user color preferences for future use
      setPreference(path + "-" + preferenceKey, colorToAdd);
    },
    [color, setPreference, colorToAdd, setIsAdding, setValue],
  );

  return (
    <div className={baseClass}>
      <Label htmlFor={path} label={label} required={required} />
      {isAdding && (
        <div>
          <HexColorPicker
            onBlur={(e) => {
              if (
                e.relatedTarget === null &&
                validateHexColor(colorToAdd) === true
              ) {
                handleAddColor();
              }
            }}
            onChange={setColorToAdd}
            color={colorToAdd}
          />

          <HexColorInput
            prefixed
            alpha
            onKeyDown={({ code }) => {
              if (code === "Enter") {
                if (validateHexColor(colorToAdd) === true) {
                  handleAddColor();
                }
              }
            }}
            onBlur={(e) => {
              if (
                e.relatedTarget === null &&
                validateHexColor(colorToAdd) === true
              ) {
                handleAddColor();
              }
            }}
            className={`${baseClass}__input`}
            color={colorToAdd}
            onChange={setColorToAdd}
          />
        </div>
      )}
      {!isAdding && (
        <Fragment>
          <button
            type="button"
            className={`chip chip--clickable`}
            style={{ backgroundColor: color }}
            aria-label={color}
            onClick={() => {
              setValue(color);
              setIsAdding(true);
            }}
          />
        </Fragment>
      )}
    </div>
  );
};
export default InputField;
