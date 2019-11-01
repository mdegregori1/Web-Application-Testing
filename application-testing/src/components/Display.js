import React from "react";


const Display= (props) => {
    console.log('fuckkk', props)
    return (
        <div>
            <p>balls: {props.balls}</p>
            <p>strikes: {props.strikes}</p>
        </div>
    )
}

export default Display;



