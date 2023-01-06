import React from "react";
import './robotCard.css'

const robotCard = ({url, name, username, description}) => {
/*
* ({a, b, c, d, ...}) this is called destructuring
* It allows me to not use pointed notation to use variables like I\'ve done before :
* props.name, props.username, props.varA, ... It's much cleaner !
*/
    return (
        <div
            className='tc dib br3 ma2 pa3 grow bw2 shadow-5-l'
            id='robotCard'
        >
            <img alt="robotCard" src={url}/>
            <div className='white'>
                <h2>{name} {username}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default robotCard;