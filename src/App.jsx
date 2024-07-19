// import React from "react";//
import "./App.css";
import FormModal from "./components/FormModal";

const App = () => {
  return (
    <div className="App">
      <h1 className=" text-sm md:text-3xl  flex items-center justify-center mt-24 font-bold">
        Persona Verification Example
      </h1>
      <FormModal />
    </div>
  );
};

export default App;
