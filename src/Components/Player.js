import PlayerIcon from '../resources/PlayerIcon.svg'
import './Player.css'

const Player = ({attributes, imageURL, index}) => {
    function setCards(sub){
        
        if(sub.RedCards>0){
            return <div className='yellowcard-3'/>
        }
        // eslint-disable-next-line
        else if(sub.YellowCards==1){
            return <div className='yellowcard-1'/>
        }
        // eslint-disable-next-line
        else if(sub.YellowCards==2){
            return(
                <>
                    <div className='yellowcard-1'/>
                    <div className='yellowcard-2'/>
                </>
                )
        }
        else return;
        
    }
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    return(
        <div className="player"
             key={index}
        >
            <div className="player-container">
                    {
                        setCards(attributes)
                        
                    }

                <img className="player-icon" src={(imageURL===undefined || isEmpty(imageURL)) ? PlayerIcon : `url(${imageURL})`} alt="player icon"/>
                <div>{attributes.Name}</div>
            </div>
        </div>
    )
}
export default Player;