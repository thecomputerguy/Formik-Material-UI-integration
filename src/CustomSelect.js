import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Select } from "@material-ui/core";
import { useField } from "formik";

const CustomSelect = (props) => {
  const { ages } = props;
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <FormControl>
      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
      <Select native {...field}>
        <option value=""></option>
        {ages.map((ageObj, index) => (
          <option key={index} value={ageObj.ageValue}>
            {ageObj.ageLabel}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
