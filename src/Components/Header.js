import LeagueIcon from '../resources/LeagueIcon.svg';

const Header = ({timeStamp, location}) => {
    function dateConfig(){
        let merid = '';
        let hour = timeStamp.slice(11,13);
        
        if(hour >= 12){
            hour -= 12;
            merid = "PM";
        }
        else merid = 'AM';
        
        let time = 
            timeStamp.slice(5,7) + "/" + 
            timeStamp.slice(8,10) + "/" + 
            timeStamp.slice(0,4)  + "\t" +
            hour + ":" + 
            timeStamp.slice(14,16) +  
            merid 


        return(time);    
    }

    return(
        <header>
            <img src={LeagueIcon} alt="League"/>
                <p className="title">
                    MATCH SUMMARY
                    <p className="timestamp">
                        {dateConfig()}{location}
                    </p>
                </p>
        </header>
    )
}
export default Header;