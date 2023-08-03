import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Project from "./pages/Projects/project";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/work";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Project />
        <WorkExp />
        <Contact />
      </div>
    </div>
  );
}

export default App;
