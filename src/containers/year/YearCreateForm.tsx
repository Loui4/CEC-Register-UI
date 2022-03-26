import YearForm from "./YearForm";

function YearCreateForm() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const initialValues = {
    year: "",
    start: "",
    end: "",
  };
  return <YearForm initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default YearCreateForm;
