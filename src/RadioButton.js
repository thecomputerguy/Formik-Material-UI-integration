import React from "react";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { useField } from "formik";

const RadioButton = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup aria-label="gender">
        <FormControlLabel control={<Radio />} {...field} />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
