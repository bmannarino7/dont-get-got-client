import { useState, useEffect } from "react";
import Mission from "./components/Mission";
import Wallet from "./components/Wallet";

export default function Envelope() {
    const defaultPlayerList = ["Avishek Khan", "Brandon Mannarino", "Jeremy Morgan", "Lee Evans", "Donovan Bendana", "Jake Hoberg", "Joshua France", "Miles Todzo", "Luis Antillon"];
    const [playerList, setPlayerList] = useState(defaultPlayerList);


    function People() {

        const [activePlayer, setActivePlayer] = useState(playerList[0]);
        const [missionsIndexArray, setMissionsIndexArray] = useState([0, 0, 0, 0, 0, 0]);

        return (
            <>
                {playerList.map((player) => (
                    <> 
                        <button
                            key={player}
                            player={activePlayer === player}
                            missionsIndexArray={activePlayer === player}
                            onClick={() => setActivePlayer(player)}
                        >
                            {player}
                        </button>
                    </>
                ))}
                
                <br />
                <p> Current Selection:  {activePlayer} {missionsIndexArray}  </p>
                <Wallet player={activePlayer}/>
            </>
        );
    }


    return (
        <>
            <button onClick={() => setPlayerList(defaultPlayerList)}>Use Sample Player List</button>
            <button onClick={() => setPlayerList(["test"])}> Use My Own Player</button>
            
            <People> </People>
        </>

    )
}
