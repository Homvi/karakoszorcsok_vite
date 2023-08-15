import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
