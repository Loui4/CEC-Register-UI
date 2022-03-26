import { Formik } from "formik";
import { FC } from "react";
import { BaseButton } from "../atoms";

type PropsTypes = {
  initialValues: any;
  onSubmit: (values: any) => any;
  validationSchema: any;
};

const BaseForm: FC<PropsTypes> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      ß
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            {children}
            <BaseButton
              type="submit"
              title={isSubmitting ? "submitting..." : "submit"}
              color="primary"
            />
          </form>
        );
      }}
    </Formik>
  );
};
