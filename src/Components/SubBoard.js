import { useEffect, useState } from "react";
import Team1Icon from '../resources/Team1Icon.svg'
import Team2Icon from '../resources/Team2Icon.svg'
import './SubBoard.css'
const SubBoard = ({subs}) => {

    const[homeSubs, setHomeSubs] = useState([]);
    const[awaySubs, setAwaySubs] = useState([]);

    useEffect(() => {

        subs.HomeTeam.Player.forEach((player)=>{
            setHomeSubs(homeSubs => [player,...homeSubs])
        })
        subs.AwayTeam.Player.forEach((player)=>{
            setAwaySubs(awaySubs => [player,...awaySubs])
        })

    }, [subs.HomeTeam.Player, subs.AwayTeam.Player])
    function setCards(sub){
        console.log(sub)
        
        if(sub._attributes.RedCards){
            // display red card
        }
        else if(sub._attributes.YellowCards>=1){
            const fouls = sub._attributes.YellowCard;
            // display yellow cards accordingly
        }
        
    }
    return(
        <div className="sub-pane">
            {/* Game Banner */}
            <span className="sub-banner">
                    <img src={Team2Icon} type="svg" alt="Home"/>
                    SUBSTITUTES
                    <img src={Team1Icon} type="svg" alt="Away"/>
            </span>

            {/* Substitute Panel*/}
            <div className="sub-pane-container">
                <div className="team">
                {// set up home team: left side of panel
                    homeSubs.map((sub, index)=>{
                        setCards(sub);
                        return(
                            <ul className="home-sub-player" key={index}>
                                <div className="player-number">{sub._attributes.Number}</div>
                                <div className="player-name">{sub._attributes.Name}
                                <div className="home-cards">                              
                                        <div className="yellowcard-2"/>
                                        <div className="yellowcard-1"/>  
                                    </div>
                                </div>
                            </ul>

                        )
                    })
                }
                </div>
                
                <div className="team">
                {// set up away team: right side of panel
                    awaySubs.map((sub, index)=>{
                        setCards(sub);
                        return(
                            <ul className="away-sub-player" key={index}>
                                <div className="player-number">{sub._attributes.Number}</div>
                                <div className="player-name">
                                <div className="away-cards"> 
                                        <div className="redcard"/>    
                                        <div className="yellowcard-1"/>                           
                                        <div className="yellowcard-2"/>
                                    </div>
                                    {sub._attributes.Name}
                                </div>
                            </ul>
                        )
                    })
                }
                </div>
            </div>
        </div>
    ); 
}
export default SubBoard;