import NavBar from "./components/NavBar/NavBar"
import RouteConfig from "./Routes"

const App = () => {
  return (
   <>
     <NavBar />
     {RouteConfig()}
   </>
  )
}

export default App
