import React from 'react'
import PlayerIcon from '../resources/PlayerIcon.svg'
import './Player.css'

const Player = ({attributes, imageURL}) => {
    function setCards(sub){
        if(sub.RedCards>0){
            return <div className='yellowcard-3'/>
        }
        // eslint-disable-next-line
        else if(sub.YellowCards==1){
            return (
                <React.Fragment key={sub.Number}>
                    <div className='yellowcard-1'/>
                </React.Fragment>        
            )
        }
        // eslint-disable-next-line
        else if(sub.YellowCards==2){
            return(
                <React.Fragment key={sub.Number}>
                    <div className='yellowcard-1'/>
                    <div className='yellowcard-2'/>
                </React.Fragment>
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
             key={attributes.Number}
        >
            <div className="player-container">
                    {
                        setCards(attributes)
                    }
                <img className="player-icon" src={
                                                (imageURL===undefined || isEmpty(imageURL)) 
                                                ? PlayerIcon 
                                                : `url(${imageURL})`
                                            } 
                alt="player icon"/>
                <div>{attributes.Name}</div>
            </div>
        </div>
    )
}
export default Player;