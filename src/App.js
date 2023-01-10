import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import "./App.css";
import { Banner } from "./components/Banner.js";
import { Footer } from "./components/Footer.js";
import { Projects } from "./components/Projects.js";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
