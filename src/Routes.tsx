import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Contact from "./pages/ContactUS/Contact";

const RouteConfig = () => {
  let routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  return  useRoutes(routes)
};

export default RouteConfig;
