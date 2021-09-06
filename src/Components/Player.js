import PlayerIcon from '../resources/PlayerIcon.svg'
import './Player.css'

const Player = ({attributes, imageURL, index}) => {
    //imageURL is empty for now
    return(
        <div className="player"
             key={index}
        >
            <div className="player-container">
                <img className="player-icon" src={PlayerIcon}/>
                <div>{attributes.Name}</div>
            </div>
        </div>
    )
}
export default Player;