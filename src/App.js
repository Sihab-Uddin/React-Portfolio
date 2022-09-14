
import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Error404 from './Components/Errors/Error404';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<Error404 />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
