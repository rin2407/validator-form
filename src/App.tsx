import "./App.css";
import { FastField, Form, Formik } from "formik";
import InputFieldComponent from "./components/common/input/InputFieldComponent";
import * as yup from "yup";

function App() {
  // validator input
  const validationSchema = yup.object({
    userName: yup.string().required("user name required"),
    email: yup.string().required("email required"),
  });
  const handleOnSubmit = (values: any, { setErrors }: any) => {
    console.log(values);
  };
  return (
    <div className="App">
      <Formik
        enableReinitialize
        initialValues={{
          userName: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {(formikProps) => {
          return (
            <Form>
              <FastField
                label={"user name"}
                name="userName"
                component={InputFieldComponent}
              />
              <FastField
                label={"email"}
                name="email"
                component={InputFieldComponent}
              />
              <button type="submit">submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
