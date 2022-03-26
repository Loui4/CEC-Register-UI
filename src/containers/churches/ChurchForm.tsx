import * as Yup from "yup";
import { FormInputWithLabel } from "../../components/molecules/form";
import { BaseForm } from "../../components/organisms";

type PropTypes = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

function ChurchForm({ initialValues, onSubmit }: PropTypes) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("name"),
    location: Yup.string().required().label("location"),
  });

  return (
    <BaseForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormInputWithLabel id="name" label="Name" name="name" />
      <FormInputWithLabel id="location" label="location" name="location" />
    </BaseForm>
  );
}

export default ChurchForm;
