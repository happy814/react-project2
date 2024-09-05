import About from "./component/About";
import Contact from "./component/Contact";
import Dishes from "./component/Dishes";
import Expertise from "./component/Expertise";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Mission from "./component/Mission";
import Navbar from "./component/Navbar";
import Review from "./component/Review";
import "./index.css";

function App() {
  return (
    <>
      <Hero></Hero>
      <Navbar></Navbar>
      <Dishes></Dishes>
      <About></About>
      <Mission></Mission>
      <Expertise></Expertise>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
