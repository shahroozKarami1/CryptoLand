import { useEffect, useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import RouteConfig from "./Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import RefContext from "./Context/RefContext";
import 'swiper/css';
import 'swiper/css/pagination';

const App = () => {
  const ServicesRef = useRef<HTMLDivElement | null>(null);
  const MyTeamRef = useRef<HTMLDivElement | null>(null);
  const AboutUsRef = useRef<HTMLDivElement | null>(null);
  const MapRef = useRef<HTMLDivElement | null>(null);
  const QuestionsRef = useRef<HTMLDivElement | null>(null);
  const TokenRef = useRef<HTMLDivElement | null>(null);
  const GuideRef   =  useRef <HTMLDivElement | null>(null);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <RefContext.Provider
        value={{
          TokenRef,
          QuestionsRef,
          ServicesRef,
          MyTeamRef,
          AboutUsRef,
          MapRef,
          GuideRef
        }}
      >
        <NavBar />
        {RouteConfig()}
      </RefContext.Provider>
    </>
  );
};

export default App;
