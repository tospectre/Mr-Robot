import React from "react";
// import {render} from "react-dom";

const robot = (robot) => {
    return (
        <div className='bg-red dib br3 ma2 pa3 grow bw2 shadow-5-l'>
            <img alt="robot" src={robot.url}/>
            <div>
                <h2>{robot.name} {robot.username}</h2>
                <p>{robot.description}</p>
            </div>
        </div>
    );

}

export default robot;