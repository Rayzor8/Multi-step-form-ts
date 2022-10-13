import FormWrapper from "../../UI/FormWrapper";

type AcountData = {
  email: string;
  password: string;
};

type AccountFormProps = AcountData & {
  updateFields: (fields: Partial<AcountData>) => void;
};

const AccountInput = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        className="input_style"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
      />
      <p className="text-xs text-indigo-400">* Must be a valid email address</p>
      <label>Password</label>
      <input
        required
        type="password"
        className="input_style"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      />
      <p className="text-xs text-indigo-400">
        * Format Minimum 8 characters, at least one Letter and one Number
      </p>
    </FormWrapper>
  );
};

export default AccountInput;
