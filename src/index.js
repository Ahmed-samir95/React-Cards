import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Info from "./Components/info"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Info />
  </StrictMode>
);
