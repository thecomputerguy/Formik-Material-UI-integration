import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

const TextFieldInput = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div>
      <TextField
        required
        id="standard-required"
        label="Required"
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

export default TextFieldInput;
