import FormWrapper from "../../UI/FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string | number;
};

type AddressFormProps = AddressData & {
  updateFields: (field: Partial<AddressData>) => void;
};

const AddressInput = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        className="input_style"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        pattern="[a-zA-Z0-9]+$"
      />
      <p className="text-xs text-indigo-400">* Format Alphabeth and Number only</p>
      <label>City</label>
      <input
        required
        type="text"
        className="input_style"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        pattern="[a-zA-Z]+$"
      />
      <p className="text-xs text-indigo-400">* Format Alphabeth only</p>
      <label>State</label>
      <input
        required
        type="text"
        className="input_style"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
        pattern="[a-zA-Z]+$"
      />
       <p className="text-xs text-indigo-400">* Format Alphabeth only</p>
      <label>Zip</label>
      <input
        required
        min={0}
        
        type="number"
        className="input_style"
        value={zip}
        onChange={(e) => updateFields({ zip: Number(e.target.value) })}
      />
      <p className="text-xs text-indigo-400">* Format Number only</p>
    </FormWrapper>
  );
};

export default AddressInput;
