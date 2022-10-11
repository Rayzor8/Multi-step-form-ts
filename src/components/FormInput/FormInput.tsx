import AccountInput from "./AccountInput";
import AddressInput from "./AddressInput";
import UserInput from "./UserInput";

const FormInput = () => {
  return (
    <form>
      <UserInput />
      <AddressInput />
      <AccountInput />
    </form>
  );
};

export default FormInput;
