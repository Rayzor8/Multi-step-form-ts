import { ChangeEvent } from "react";
import FormWrapper from "../../UI/FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: number | string;
};
type UserFormProps = UserData & {
  // use Partial
  updateFields: (fields: Partial<UserData>) => void;
};

const UserInput = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        className="input_style"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        pattern="[A-Za-z]+$"
      />
      <p className="text-xs text-indigo-400">* Format Alphabeth only</p>
      <label>Last Name</label>
      <input
        required
        type="text"
        className="input_style"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        pattern="[A-Za-z]+$"
      />
      <p className="text-xs text-indigo-400">* Format Alphabeth only</p>
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        className="input_style"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => updateFields({ age: Number(e.target.value) })}
      />
      <p className="text-xs text-indigo-400">* Format Number only</p>
    </FormWrapper>
  );
};

export default UserInput;
