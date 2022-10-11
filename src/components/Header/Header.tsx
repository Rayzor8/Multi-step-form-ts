const Header = () => {
  return (
    <header className="flex justify-center flex-col gap-2 w-full div_style">
      <h1 className="font-bold text-4xl text-indigo-700">
        MULTI STEP FORM
        <span className="text-[10px] bg-indigo-700 ml-2 px-2 py-1 text-white rounded-lg font-extralight">
          Mini Project
        </span>
      </h1>
      <p className="bg-white w-max px-2 py-1 text-indigo-700 font-semibold">
        Tech stack Lists
      </p>
      <ul className="list-disc hover:list-disc list-inside">
        <li>React</li>
        <li>Typescript</li>
        <li>TailwindCSS</li>
      </ul>
    </header>
  );
};

export default Header;
