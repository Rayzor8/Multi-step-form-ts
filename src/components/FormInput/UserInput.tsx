import FormWrapper from "../../UI/FormWrapper";

const UserInput = () => {
  return (
    <FormWrapper title="User Details">
      <label >First Name</label>
      <input
        autoFocus
        required
        type="text"
        className="input_style"
        placeholder="Enter First Name"
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        className="input_style"
        placeholder="Enter Last Name"
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        className="input_style"
        placeholder="Enter Age"
      />
    </FormWrapper>
  );
};

export default UserInput;
