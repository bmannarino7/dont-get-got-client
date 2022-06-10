// this component will be an individual mission
// each player's wallet can render 6 Mission components

import React from "react";
import { useState } from "react"


const Mission = (props) => {
    
    const [missionPassed, setMissionPassed] = useState(null);

    const onPass = () => {
        //fill in pass logic
        setMissionPassed(true);
    }

    const onFail = () => {
        //fill in fail logic
        setMissionPassed(false);
    }

    const renderMission = () => {
       
        if (missionPassed == null) {
            return (
                <div>
                    <button onClick={onPass}>PASS</button>
                    <button onClick={onFail}>FAIL</button>
                </div>
            );  
        } else if (missionPassed) {
            return (    
                <p>Mission Passed</p>
            );
        } else {
            return (
                <p>Mission Failed</p>
            );
        }
    
    }   
    return (
        <>
            {props.text}
            {renderMission()}
        </>
        
    );

    

}

export default Mission;
