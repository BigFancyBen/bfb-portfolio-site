import './App.css'
import Nav from './Nav/Nav'
import Projects from './routes/Projects'
import Home from './routes/Home'
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location=useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
