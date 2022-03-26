import { FormOption } from "../../../interfaces";
import Label from "../../atoms/form-label/label";
import BaseFormSelect from "../../atoms/form-select/BaseFormSelect";
import FormFieldWrapper from "../../atoms/FormFieldWrapper";
import ErrorText from "../../atoms/texts/ErrorText";

type PropTypes = {
  id: string;
  value: string | number;
  name: string;
  hasError?: boolean;
  options: FormOption[];
  errorMessage?: string;
  label: string;
};

export default function ({
  id,
  value,
  name,
  options,
  hasError,
  errorMessage,
  label,
}: PropTypes) {
  return (
    <FormFieldWrapper>
      <Label htmlFor={id} title={label} />
      <BaseFormSelect
        id={id}
        name={name}
        options={options}
        value={value}
        hasError={hasError}
      />
      {errorMessage ? <ErrorText text={errorMessage} /> : null}
    </FormFieldWrapper>
  );
}
