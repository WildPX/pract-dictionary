import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/reset.css";
import "./Styles/variables.css";
import "./Styles/global.css";
import MainPage from "./Components/Layout/MainPage/MainPage";
import { DictionaryProvider } from "./DictionaryProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DictionaryProvider>
      <MainPage />
    </DictionaryProvider>
  </StrictMode>
);
