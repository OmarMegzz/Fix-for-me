import React, { useRef } from "react";
import Aboutus from "./pages/AboutUs";
import Home from "./pages/Home";
import Contactus from "./pages/ContactUs";
import FormToEmail from "./components/FormToEmail";

function App() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Home scrollToForm={scrollToForm} />
      <Aboutus />
      <FormToEmail ref={formRef} />
      <Contactus />
    </>
  );
}

export default App;
