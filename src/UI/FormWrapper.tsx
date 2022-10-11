import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: Props) => {
  return (
    <>
      <h1 className="text-xl text-center font-bold text-indigo-700 mb-4">{title}</h1>
      <div className="grid justify-start gap-2 grid-cols-1">{children}</div>
    </>
  );
};

export default FormWrapper;
