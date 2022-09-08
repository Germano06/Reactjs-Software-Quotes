
import './App.css';
import './quotes.css'
//import About from './components/About';
import { Routes, Route, Link } from "react-router-dom";
import Authors from './components/Authors';
import Quotes from './components/Quotes';

function App() {

  
  return (
    <>
        <Routes>
          <Route path="/" element={<Authors/>} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
    </>
  );
}

export default App;
