import { createBrowserRouter } from "react-router-dom";
import { List, Detail } from "@/pages";
import { Layout, ErrorPage } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <List />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
