import Team1Icon from '../resources/Team1Icon.svg'
import Team2Icon from '../resources/Team2Icon.svg'
import './TeamBanner.css'

const TeamBanner = () => {
    return(
        <div className="team-banner">
            <div className="team-banner-container">
                <div className="icon-container">
                    <img  src={Team2Icon} alt="Home Team"/>
                </div>
                <div className="icon-container">
                    <img  src={Team1Icon} alt="Away Team"/>
                </div>
            </div>
        </div>
    )
}
export default TeamBanner;