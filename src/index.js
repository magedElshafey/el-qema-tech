import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
// react query
import { QueryClientProvider, QueryClient } from "react-query";
// routes
import AppRouter from "./routes/AppRouter";
// toaster
import { Toaster } from "react-hot-toast";
// aos
import "aos/dist/aos.css";
// context
import GlobalContext from "./components/hooks/api/GlobalContext";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-center" reverseOrder={false} />
    <GlobalContext>
      <AppRouter />
    </GlobalContext>
  </QueryClientProvider>
);
