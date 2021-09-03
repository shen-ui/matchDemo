import { useState, useEffect } from 'react';
import axios from 'axios';
import loading from './resources/loading.gif'
import './App.css';

import Banner from './Components/Banner';
import SubBoard from './Components/SubBoard';
import Field from './Components/Field';
import TeamBanner from './Components/TeamBanner';

const convert = require("xml-js");

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(' https://static.yinzcam.com/interviews/web/api/match1.xml', {
        'Content-Type': "applications/xml"
      })
      .then((res) => {
        const parser = JSON.parse(
          convert.xml2json(res.data, {compact: true, spaces: 2})
        );
        // Only need xml metadata for error handling.
        setData(parser.Formation);
        console.log(parser)
      })
      .catch((err) => {
        console.log("error: ", err);
      })
  }, []);

  return(
    <div className="App">
      { // empty state ? loading : app components
        data == null
        ? <img className="loading-icon" src={loading} alt='loading'/>
        : <div className="App-container">
              <Banner timeStamp={data.Timestamp._text} location={data.Venue._text}/>
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