import BaseFormInput from "../../atoms/form-input/BaseFormInput";
import Label from "../../atoms/form-label/label";
import FormFieldWrapper from "../../atoms/FormFieldWrapper";
import ErrorText from "../../atoms/texts/ErrorText";

type PropTypes = {
  id: string;
  label: string;
  hasError?: boolean;
  name: string;
  value: string | number;
  errorMessage?: string;
};

export default function ({
  id,
  label,
  name,
  value,
  hasError = false,
  errorMessage,
}: PropTypes) {
  return (
    <FormFieldWrapper>
      <Label htmlFor={id} title={label} />
      <BaseFormInput name={name} value={value} hasError={hasError} />
      {errorMessage ? <ErrorText text={errorMessage} /> : null}
    </FormFieldWrapper>
  );
}
