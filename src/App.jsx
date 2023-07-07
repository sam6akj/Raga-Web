import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./elements/components/navigation/NavBar";
import Footer from "./elements/components/navigation/Footer";
import Home from "./pages/Home";
import NoMatch from "./elements/components/navigation/sections/NoMatch";
import AboutPage from "./pages/AboutPage/AboutPage";
import SpecialService from "./pages/Special service/SpecialService";
import Portfolio from "./pages/PortfolioPage/Portfolio";
import Contact from "./pages/Contact";
import Project1 from "./pages/PortfolioPage/Project1";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<AboutPage />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/SpecialService" element={<SpecialService />}/> 
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Project1" element={<Project1 />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
      <Footer />
    </>
  );
}



export default App;
