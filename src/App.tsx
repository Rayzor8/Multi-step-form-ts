import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 min-h-screen w-full font-mono p-8 text-indigo-700 font-semibold">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
