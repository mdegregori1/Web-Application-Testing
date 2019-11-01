import React, {useState} from "react";

const Dashboard = () => {
const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);
const [fouls, setFouls] = useState(0);
const [hits, setHits] = useState(0);
    return (
        <div>
            <button>strike</button>
            <button>ball</button>
            <button>foul</button>
            <button>hit</button>
        </div>
    )
}

export default Dashboard;




// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.