import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import './App.css';

import LeagueIcon from './resources/LeagueIcon.svg'
import Header from './Components/Header';
import SubBoard from './Components/SubBoard';
import Field from './Components/Field';
import TeamBanner from './Components/TeamBanner';

const convert = require("xml-js");

function App() {
  const [data, setData] = useState();
  const [match, setMatch] = useState();
  const inputRef = useRef();

  useEffect(() => {
    try{
        axios
          .get(`https://static.yinzcam.com/interviews/web/api/${match}.xml`, {
            'Content-Type': "applications/xml",
            'Cache-Control': 'max-age=30',
            // header is max-age=30, should I have dynamically called this somehow?
          })
          .then((res) => {
            const parser = JSON.parse(
              convert.xml2json(res.data, {compact: true, spaces: 2})
            );
            // Only need xml metadata for error handling.
            if(parser.Formation == data){
                return;
            }
            else{
              console.log("rerender");
              setData([]);
              setData(parser.Formation);
            }
          })
          .catch((err) => {
            console.log("error: ", err);
          })
        }catch(e){
          console.log(e);
        }


  }, [data, match]);

  return(
    <div className="App">
      { // empty state ? loading : app components
        data == null
        ? <div className="search-pane">

              <img src={LeagueIcon}/>

            <input placeholder='match 1, 2, 3'
                   ref={inputRef}
                   value={match}
                   onChange={e => setMatch(e.target.value)}>
            </input>
          </div>
        : <div className="App-container">
              <Header timeStamp={data.Timestamp._text} location={data.Venue._text}/>
              <div className="components">
                <TeamBanner/>
                <Field forms={data.Formations}/>
                <SubBoard subs={data.Substitutes}/>
              </div>
          </div>
      }
    </div>
  )
}

export default App;