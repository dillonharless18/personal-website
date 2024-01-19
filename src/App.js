import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index.js';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TheLab from './components/TheLab'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="the-lab" element={<TheLab />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
