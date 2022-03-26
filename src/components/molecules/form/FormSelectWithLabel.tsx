import { useFormFieldContext } from "../../../hooks";
import { FormOption } from "../../../interfaces";
import Label from "../../atoms/form-label/label";
import BaseFormSelect from "../../atoms/form-select/BaseFormSelect";
import FormFieldWrapper from "../../atoms/FormFieldWrapper";
import ErrorText from "../../atoms/texts/ErrorText";

type PropTypes = {
  id: string;
  name: string;
  options: FormOption[];
  label: string;
};

export default function ({ id, name, options, label }: PropTypes) {
  const { error, handleChange, value } = useFormFieldContext(name);
  return (
    <FormFieldWrapper>
      <Label htmlFor={id} title={label} />
      <BaseFormSelect
        id={id}
        name={name}
        options={options}
        value={value}
        hasError={error}
        onChange={handleChange}
      />
      {error ? <ErrorText text={error} /> : null}
    </FormFieldWrapper>
  );
}
