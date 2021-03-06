import { useFormFieldContext } from "../../../hooks";
import BaseFormInput from "../../atoms/form-input/BaseFormInput";
import Label from "../../atoms/form-label/label";
import FormFieldWrapper from "../../atoms/FormFieldWrapper";
import ErrorText from "../../atoms/texts/ErrorText";

type PropTypes = {
  id: string;
  label: string;
  name: string;
  type?: "date" | "text";
};

export default function ({ id, label, name, type }: PropTypes) {
  const { error, handleChange, value } = useFormFieldContext(name);
  return (
    <FormFieldWrapper>
      <Label htmlFor={id} title={label} />
      <BaseFormInput
        name={name}
        type={type}
        value={value}
        hasError={error}
        onChange={handleChange}
      />
      {error ? <ErrorText text={error} /> : null}
    </FormFieldWrapper>
  );
}
