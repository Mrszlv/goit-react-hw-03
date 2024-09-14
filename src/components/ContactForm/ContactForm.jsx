import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = (addContact) => {
  const initialValue = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);

    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    options.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Min 3 characters!"),
    number: Yup.string().min(3).max(50).matches(/[0-9]/).required(),
  });

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <Field type="text" name="name" />
        <Field type="text" name="number" />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
