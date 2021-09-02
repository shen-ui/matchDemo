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
                <div className="banner-icon-container">
                    <img className="hometeam-icon" src={Team1Icon} type="svg"/>
                </div>
                <p>SUBSTITUTES</p>
                <div className="banner-icon-container">
                    <img className="awayteam-icon" src={Team2Icon} type="svg"/>
                </div>
            </span>

            {/* Substitute Panel*/}
            <div className="sub-pane-container">
                <div className="hometeam">
                {// set up home team: left side of panel
                    homeSubs.map((sub, index)=>{
                        return(
                            <span className="home-sub-player" key={index}>
                                <ul className="home-sub-player">
                                    <div className="player-number">{sub._attributes.Number}</div>
                                     <div>{sub._attributes.Name}</div>

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
                                <ul className="away-sub-player">
                                    <div className="player-number">{sub._attributes.Number}</div>
                                     <div>{sub._attributes.Name}</div>
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