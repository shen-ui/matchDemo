import { useState } from "react";

const Field = ({forms}) => {
    
    const [awayTeam, setAwayTeam] = useState();
    const [homeTeam, setHomeTeam] = useState();

    function setPlayers(){
        forms.Formations.HomeTeam.map((player) => {
            console.log(player)
        })
    }

    return(
        <div className="field-pane">

        {//setPlayers()
        }
            
        </div>
    )
}
export default Field;