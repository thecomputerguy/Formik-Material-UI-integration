import React from "react";
import { useField } from "formik";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const MyCheckbox = ({ label, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);

  return (
    <div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox {...field} />} label={label} />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default MyCheckbox;
