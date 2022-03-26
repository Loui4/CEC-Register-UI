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

function YearForm({ initialValues, onSubmit }: PropTypes) {
  const { FIELD_REQUIRED } = ValidationMessages;

  const validationSchema = Yup.object().shape({
    year: Yup.string().required(FIELD_REQUIRED).label("year"),
    start: Yup.date().required(FIELD_REQUIRED).label("Start Date"),
    end: Yup.date().required().label("End Date"),
  });

  return (
    <BaseForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormInputWithLabel id="year" label="year" name="year" />
      <FormInputWithLabel
        id="start"
        label="Start Date"
        name="start"
        type="date"
      />
      <FormInputWithLabel id="end" label="end Date" name="end" type="date" />
    </BaseForm>
  );
}

export default YearForm;
