import { useFormikContext } from "formik";

function useFormFieldContext(fieldName: string) {
  const { handleChange, values, errors, touched } = useFormikContext();
  const fieldValues: any = values;
  const fieldTouched: any = touched;
  const fieldErrors: any = errors;

  const error = fieldTouched[fieldName] && fieldErrors[fieldName];

  return { error, handleChange, value: fieldValues[fieldName] };
}

export default useFormFieldContext;
