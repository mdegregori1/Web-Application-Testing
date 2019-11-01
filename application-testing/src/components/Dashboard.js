import React from "react";

import Display from "./Display";

const Dashboard = (props) => {
    return (
        <div>
            <button onClick={props.strike}>strike</button>
            <button onClick={props.ball}>ball</button>
            <button onClick={props.foul}>foul</button>
            <button onClick={props.hit}>hit</button>
            <Display
            balls={props.balls}
            strikes={props.strikes}
            />
        </div>
    )
}

export default Dashboard;




