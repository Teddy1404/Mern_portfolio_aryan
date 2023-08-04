import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Project from "./pages/Projects/project";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/work";
import Contact from "./pages/Contact/Contact";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          -<h4 className="text-center">Made By Aryan &copy; 2023</h4>-
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
