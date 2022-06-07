// this component will be an individual mission
// each player's wallet can render 6 Mission components

import React from "react";
import { useState } from "react"


const Mission = (props) => {
  
    const [missionText, setMissionText] = useState("Sample Text");
  
    <div>
        {missionText}
    </div>
}

export default Mission;