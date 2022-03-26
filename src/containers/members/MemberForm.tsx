import * as Yup from "yup";
import {
  FormInputWithLabel,
  FormSelectWithLabel,
} from "../../components/molecules/form";
import { BaseForm } from "../../components/organisms";
import { FormOptions, ValidationMessages } from "../../constants";

type PropTypes = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

function MemberForm({ initialValues, onSubmit }: PropTypes) {
  const { FIELD_REQUIRED } = ValidationMessages;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(FIELD_REQUIRED).label("First Name"),
    lastName: Yup.string().required(FIELD_REQUIRED).label("Last Name"),
    dateOfBirth: Yup.date().required(FIELD_REQUIRED).label("Date Of Birth"),
    gender: Yup.date().required(FIELD_REQUIRED).label("Gender"),
    email: Yup.string().email().label("Email"),
    phoneNumber: Yup.string().label("Phone Number"),
  });

  return (
    <BaseForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormInputWithLabel id="firstName" label="First Name" name="firstName" />
      <FormInputWithLabel id="lastName" label="Last Name" name="lastName" />
      <FormSelectWithLabel
        options={FormOptions.gender}
        id="gender"
        label="Gender"
        name="gender"
      />
      <FormInputWithLabel
        id="phoneNumber"
        label="Phone Number"
        name="phoneNumber"
      />
    </BaseForm>
  );
}

export default MemberForm;
