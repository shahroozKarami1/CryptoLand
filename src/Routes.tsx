import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

const RouteConfig = () => {
  let routes = [
    {
      path: "/",
      element: <HomePage />,
    },

  ];

  return  useRoutes(routes)
};

export default RouteConfig;
