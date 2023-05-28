import { createBrowserRouter } from "react-router-dom";
import { List, Detail } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);
