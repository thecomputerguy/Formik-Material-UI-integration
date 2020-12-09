import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextFieldInput from "./TextFieldInput";
import { Select, MenuItem, Checkbox, Radio } from "@material-ui/core";
import CustomSelect from "./CustomSelect";
import RadioButton from "./RadioButton";
import MyCheckbox from "./MyCheckbox";
import { CheckboxWithLabel } from "formik-material-ui";

const ages = [
  {
    ageLabel: "Ten",
    ageValue: 10,
  },
  {
    ageLabel: "Twenty",
    ageValue: 20,
  },
  {
    ageLabel: "Thirty",
    ageValue: 30,
  },
  {
    ageLabel: "Fourty",
    ageValue: 40,
  },
];

const initialValues = {
  email: "",
  password: "",
  age: 0,
  gender: "",
  hobbies: [],
  friends: [
    {
      name: "Christina",
      email: "christina@gmail.com",
    },
    {
      name: "Eddy",
      email: "eddy@gmail.com",
    },
  ],
};

const UserForm = () => {
  return (
    <div>
      <div>What is happening?</div>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <TextFieldInput placeholder="email" name="email" type="text" />
            <TextFieldInput
              placeholder="password"
              name="password"
              type="password"
            />
            <RadioButton name="gender" value="male" type="radio" label="Male" />
            <RadioButton
              name="gender"
              value="female"
              type="radio"
              label="Female"
            />
            <RadioButton
              name="gender"
              value="other"
              type="radio"
              label="other"
            />
            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="hobbies"
              Label={{ label: "Cricket" }}
              value="cricket"
            />

            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="hobbies"
              Label={{ label: "Football" }}
              value="football"
            />

            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="hobbies"
              Label={{ label: "Skiing" }}
              value="skiing"
            />

            <CustomSelect name="age" ages={ages} />
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <>
                  <div>
                    {values.friends.length > 0 &&
                      values.friends.map((friend, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`friends.${index}.name`}>
                              name
                            </label>
                            <Field
                              name={`friends.${index}.name`}
                              placeholder="Varun Sharma"
                              type="text"
                              component={TextFieldInput}
                            />
                            <ErrorMessage
                              name={`friends.${index}.name`}
                              className="field-error"
                              component="div"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`friends.${index}.email`}>
                              email
                            </label>
                            <Field
                              name={`friends.${index}.email`}
                              placeholder="varunsharma12@outlook.com"
                              type="text"
                              component={TextFieldInput}
                            />
                            <ErrorMessage
                              name={`friends.${index}.email`}
                              className="field-error"
                              component="div"
                            />
                          </div>
                          <div className="col">
                            <Button
                              type="button"
                              variant="outlined"
                              color="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    onClick={() => push({ name: "", email: "" })}
                  >
                    Push
                  </Button>
                </>
              )}
            </FieldArray>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <div>{JSON.stringify(values, null, 2)}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
