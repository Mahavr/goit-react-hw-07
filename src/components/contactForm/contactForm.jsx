import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

import * as Yup from "yup";
import css from "./contactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          name="phone"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="phone" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
