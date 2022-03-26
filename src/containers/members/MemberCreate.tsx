import MemberForm from "./MemberForm";

function MemberCreateForm() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return <MemberForm initialValues={{}} onSubmit={handleSubmit} />;
}

export default MemberCreateForm;
