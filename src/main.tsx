import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qc = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client = {qc}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>,
);
