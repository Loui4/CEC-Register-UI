import * as Yup from "yup";
import {
  FormInputWithLabel,
  FormSelectWithLabel,
} from "../../components/molecules/form";
import { BaseForm } from "../../components/organisms";
import { formOptionMapper } from "../../utils";

type PropTypes = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

function BibleClassForm({ initialValues, onSubmit }: PropTypes) {
  const churches: any = [
    { id: "1", name: "church 1" },
    { id: "2", name: "church 2" },
  ];
  const formOptions = formOptionMapper(churches, {
    label: "name",
    value: "id",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("name"),
    venue: Yup.string().required().label("venue"),
    churchId: Yup.number().required().label("church"),
  });

  return (
    <BaseForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormInputWithLabel id="name" label="Name" name="name" />
      <FormInputWithLabel id="venue" label="venue" name="venue" />
      <FormSelectWithLabel
        id="church"
        name="churchId"
        options={formOptions}
        label="church"
      />
    </BaseForm>
  );
}

export default BibleClassForm;
