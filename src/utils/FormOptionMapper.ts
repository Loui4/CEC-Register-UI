import { FormOption } from "../interfaces";

export default function formOptionMapper(
  data: Array<any>,
  { label, value }: FormOption
): Array<FormOption> {
  return data.map((item) => ({ label: item[label], value: item[value] }));
}
