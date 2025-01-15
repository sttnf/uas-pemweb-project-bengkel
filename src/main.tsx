import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.tsx";
import SEO from "./components/Seo.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <HelmetProvider>
        <SEO />
        <App />
      </HelmetProvider>
    </BrowserRouter>,
  );
} else {
  console.error("Failed to find the root element");
}
