import "./App.css"
import {Home }from "./components/Home";
import BasicExample from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/project.tsx";
import "./index.css";
import { ContactUs } from "./components/Contact.tsx";
 
function App() {
 
  return (
    <div>
     <BasicExample />
     <Home />
     <Skills />
     <Project />
     <ContactUs/>
    </div>
  );
}

export default App;
