import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Authors from "./Authors";
import Quotes from "./Quotes";
import Home from "./Home"
import "./tab.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="titlebar">
      <center><h1>Software Quotes</h1></center>
      <div className="cbox">
        
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Home
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Author
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Quotes
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h3>Quote of the week</h3>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
            
            
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <Routes>
              <Route path="/" element={<Authors
                click={() => toggleTab(3)}             
              />} />
            </Routes>
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <Routes>
              <Route path="/" element={<Quotes />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;