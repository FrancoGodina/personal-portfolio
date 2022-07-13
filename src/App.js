import { Routes, Route } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/projects" element={ <Projects />} />
        </Routes>
      </div>
  );
}

export default App;