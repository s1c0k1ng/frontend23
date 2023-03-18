import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './views/Home';
import Contact from './views/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
