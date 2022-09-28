import React, { useState } from "react";
import Comments from "./Comments";
import Counter from "./Counter";
import NavBar from "./NavBar";
import About from "./About";
import Favorites from "./Favorites";
import Timer from "./Timer";
import "./App.css"
import { Routes , Route, Router } from "react-router-dom";

function App() {

  const [page, setPage] = useState('/')



  return (
    <div className="App">
     
      <NavBar onChangePage={setPage} />

        <Routes>
          <Route  path='/timer' element={<Timer/>}/>
          <Route  path='favorites' element={<Favorites/>}/>
          <Route path='/' exact={true} element={<About/>}/>
        </Routes>

      {/* <h1>Redux DOM Challenge</h1>
      <Counter paused={paused} togglePaused={togglePaused} />
      <hr />
      <Comments paused={paused} /> */}
  
    </div>
  );
}

export default App;



