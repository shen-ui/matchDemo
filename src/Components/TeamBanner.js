import LeagueIcon from '../resources/LeagueIcon.svg'
import Team1Icon from '../resources/Team1Icon.svg'
import Team2Icon from '../resources/Team2Icon.svg'

const TeamBanner = () => {
    return(
        <div className="team-banner">
            <div className = "icon-container">
                <img  src={LeagueIcon}/>
                <img  src={Team2Icon}/>
                <img  src={Team1Icon}/>
            </div>
        </div>
    )
}
export default TeamBanner;