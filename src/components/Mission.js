// this component will be an individual mission
// each player's wallet can render 6 Mission components

import React from "react";
import { useState } from "react"


const Mission = (props) => {
    
    const { text } = props;
    const [missionPassed, setMissionPassed] = useState(null);
    const [isMissionNeutral, setIsMissionNeutral] = useState(true);

    const onPass = () => {
        //fill in pass logic
        setMissionPassed(true);
        setIsMissionNeutral(false);
    }

    const onFail = () => {
        //fill in fail logic
        setMissionPassed(false);
        setIsMissionNeutral(false);
    }

    const resetMission = () => {
        setMissionPassed(null);
        setIsMissionNeutral(true);
    }

    return (
        <>
            {text}
            <button onClick={onPass}>PASS</button>
            <button onClick={onFail}>FAIL</button>
            <button onClick={resetMission}>Reset</button>
            <p>Status: {isMissionNeutral ? 'NEUTRAL' : 
                        missionPassed ? 'PASSED' : 'FAILED'}</p>
        </>
    )
}

export default Mission;
