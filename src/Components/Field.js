import { useState,useEffect } from "react";
import Player from './Player'
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

    function setPlayerRow(row){

        if(row.Player._attributes){
            //console.log(row.Player._attributes)
            return <Player 
                        attributes={row.Player._attributes} 
                        imageURL={row.Player.ImageUrl}

                    />
        }
        else{
            return row.Player.map((player) => {
                console.log(player._attributes);
                return (
                    <Player 
                        attributes={player._attributes} 
                        imageURL={player.Image} 

                    />

                )
            })
        }
        
    };

    return(
        <div className="field-pane">
            <div className="field-home-team">
                {   //render Home Team
                    homeTeam.map((row,index) => {
                        return(
                            <div className={`home-row-${index}`} key={index}>
                            {
                                setPlayerRow(row)
                            }
                            </div>
                        )    
                    })
                }
            </div>
            <div className="field-away-team">
                {    // Render Away Team
                    awayTeam.map((row,index) => {
                        return(
                            <div className={`away-row-${index}`} key={index}>
                            {
                                setPlayerRow(row)
                            }
                            </div>
                        )    
                    })
                }
            </div>
        </div>
    )
}
export default Field;

/* 
            <div className="field-home-team">
                <img src={Team1Icon} alt="team icon"/>
            </div>
            <div className="field-away-team">
                <img src={Team2Icon} alt="team icon"/>
            </div>
*/
