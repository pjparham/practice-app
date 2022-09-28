import React, { useState } from "react";
import Comments from "./Comments";
import Counter from "./Counter";

function Timer (){
    const [paused, setPaused] = useState(false);

    function togglePaused() {
      setPaused((paused) => !paused);
    }
  
    function onChangePage(){
      console.log(paused)
    }
    return (
        <div>
            <h1>Redux DOM Challenge</h1>
            <Counter paused={paused} togglePaused={togglePaused} />
            <hr />
            <Comments paused={paused} />
        </div>
    )
}


export default Timer