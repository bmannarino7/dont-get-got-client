import { useState, useEffect } from "react"

export default function Envelope() {
    const defaultPlayerList = ["Avishek Khan", "Brandon Mannarino", "Jeremy Morgan", "Lee Evans", "Jake Hoberg", "Joshua France", "Miles Todzo", "Luis Antillon"];
    const [playerList, setPlayerList] = useState(defaultPlayerList);


    function People() {

        const [active, setActive] = useState(playerList[0]);
        const [missionsIndexArray, setMissionsIndexArray] = useState([0, 0, 0, 0, 0, 0]);

        /*Notes about what I want to do here: 

        // setMissionsIndexArray() ={
            
        //    Necessary missions =  playerList.length * 6;

        //    shuffle the missions list: 
        //    pop from the top every time and put it onto the wallet 

        // }
        // }
        */

        return (
            <>
                {playerList.map((player) => (
                    <button
                        key={player}
                        active={active === player}
                        missionsIndexArray={active === player}
                        onClick={() => setActive(player)}
                    >
                        {player}
                    </button>
                ))}
                <p />
                <p> Current Selection:  {active} {missionsIndexArray} </p>

            </>
        );
    }


    return (
        <>
            <button
                onClick={() => setPlayerList(defaultPlayerList)}>Use Sample Player List</button>
            <button onClick={() => setPlayerList(["test"])}> Use My Own Player</button>
            
            <People> </People>
        </>

    )
}
