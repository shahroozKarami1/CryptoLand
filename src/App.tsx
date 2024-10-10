import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import RouteConfig from "./Routes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <>
      <NavBar />
      {RouteConfig()}
    </>
  );
};

export default App;
