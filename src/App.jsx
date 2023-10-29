// import { useState } from "react";
// import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { useDocL10n } from "./i18n/useDocL10n";

function App() {
  useDocL10n();
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
