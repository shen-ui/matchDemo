import LeagueIcon from '../resources/LeagueIcon.svg';

const Header = ({timeStamp, location}) => {
    function dateConfig(){
        let merid = '';
        let hour = timeStamp.slice(11,13);
        let day = timeStamp.slice(5,7);
        //remove 0 if day contains 0
        if(day.slice(0,1) === '0'){
           day = day.slice(1,2);
        }
        //set up meridian and hour
        if(hour >= 12){
            hour -= 12;
            merid = "PM";
        }
        else merid = 'AM';
        
        let time = 
            day + "/" + 
            timeStamp.slice(8,10) + "/" + 
            timeStamp.slice(0,4)  + "\t" +
            hour + ":" + 
            timeStamp.slice(14,16) +  " " +
            merid +"   "


        return(time);    
    }

    return(
        <header>
            <img src={LeagueIcon} alt="League"/>
                <div className="title">
                    MATCH SUMMARY
                    <p className="timestamp">
                        {dateConfig()}{location}
                    </p>
                </div>
        </header>
    )
}
export default Header;