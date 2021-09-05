import { useState,useEffect } from "react";
import Team1Icon from '../resources/Team1Icon.svg'
import Team2Icon from '../resources/Team2Icon.svg'
import './Field.css'
import '../resources/formations.css'

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

    }, [forms.HomeTeamFormation.Row,forms.AwayTeamFormation.Row]);

    return(
        <div className="field-pane">
                <div className="field-home-team">
                    <img src={Team1Icon} alt="team icon"/>
                </div>
                <div className="field-away-team">
                    <img src={Team2Icon} alt="team icon"/>
                </div>
        {console.log(homeTeam.length)
        }
        {
            homeTeam.map((row)=>{
                //do something with row

            })
        }
        </div>
    )
}
export default Field;