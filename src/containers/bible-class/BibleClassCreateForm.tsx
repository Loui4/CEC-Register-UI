import BibleClassForm from "./BibleClassForm";

export default function ChurchCreateForm() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const initialValues = {
    name: "",
    churchId: "",
    venue: "",
  };
  return (
    <BibleClassForm initialValues={initialValues} onSubmit={handleSubmit} />
  );
}
