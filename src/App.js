import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import "./App.css";
import { Banner } from "./components/Banner.js";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
    </>
  );
}

export default App;
