import FormWrapper from "../../UI/FormWrapper";

const AccountInput = () => {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input autoFocus required type="email" className="input_style" />
      <label>Password</label>
      <input required type="password" className="input_style" />
    </FormWrapper>
  );
};

export default AccountInput;
