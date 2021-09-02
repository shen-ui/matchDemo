import { useEffect, useState } from "react";
import Team1Icon from '../resources/Team1Icon.svg'
import Team2Icon from '../resources/Team2Icon.svg'
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

    }, [])

    return(
        <div className="sub-pane">
            {/* Game Banner */}
            <span className="sub-banner">
                <img className="hometeam-icon" src={Team1Icon} type="svg"/>
                SUBSTITUTES
                <img className="awayteam-icon" src={Team2Icon} type="svg"/>
            </span>

            {/* Substitute Panel*/}
            <div className="sub-pane-container">
                <div className="hometeam">
                {// set up home team: left side of panel
                    homeSubs.map((sub, index)=>{
                        return(
                            <span className="home-sub-player" key={index}>
                                <ul className="sub-player">
                                    {sub._attributes.Number}
                                    {sub._attributes.Name}
                                </ul>
                            </span>
                        )
                    })
                }
                </div>
                
                <div className="awayteam">
                {// set up away team: right side of panel
                    awaySubs.map((sub, index)=>{
                        return(
                            <span className="away-sub-player" key={index}>
                                <ul>
                                    {sub._attributes.Name}
                                    {sub._attributes.Number}
                                </ul>
                            </span>
                        )
                    })
                }
                </div>
            </div>
        </div>
    ); 
}
export default SubBoard;