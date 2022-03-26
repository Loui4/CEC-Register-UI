import ChurchForm from "./ChurchForm";

export default function ChurchCreateForm() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const initialValues = {
    name: "",
    location: "",
  };
  return <ChurchForm initialValues={initialValues} onSubmit={handleSubmit} />;
}
