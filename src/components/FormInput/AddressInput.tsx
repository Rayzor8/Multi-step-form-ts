import FormWrapper from "../../UI/FormWrapper";

const AddressInput = () => {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input autoFocus required type="text" className="input_style" />
      <label>City</label>
      <input required type="text" className="input_style" />
      <label>State</label>
      <input required type="text" className="input_style" />
      <label>Zip</label>
      <input required type="text" className="input_style" />
    </FormWrapper>
  );
};

export default AddressInput;
