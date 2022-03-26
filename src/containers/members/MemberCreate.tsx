import MemberForm from "./MemberForm";

function MemberCreateForm() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phoneNumber: "",
  };
  return <MemberForm initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default MemberCreateForm;
