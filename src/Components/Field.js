import { useState,useEffect } from "react";

const Field = ({forms}) => {
    
    const [awayTeam, setAwayTeam] = useState([]);
    const [homeTeam, setHomeTeam] = useState([]);

    useEffect(() => {
        //const homeTeamFormation = forms.HomeTeamFormation._attributes.Name;
        //const awayTeamFormation = forms.AwayTeamFormation._attributes.Name;

        forms.HomeTeamFormation.Row.forEach((row)=>{
            setHomeTeam(homeTeam => [row,...homeTeam])
        })
        
        forms.AwayTeamFormation.Row.forEach((row)=>{
            setAwayTeam(awayTeam => [row,...awayTeam])
        })

    }, []);

    return(
        <div className="field-pane">
        {//console.log(awayTeam)
        }
        {//console.log(homeTeam)
        }
            
        </div>
    )
}
export default Field;