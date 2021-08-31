import axios from 'axios';
import loading from './resources/loading.gif'
import './App.css';
import { useState, useEffect } from 'react';
import SubBoard from './Components/SubBoard';
import Field from './Components/Field';

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
        setData(parser.Formation);
      })
      .catch((err) => {
        console.log("error: ", err);
      })
  }, []);

  return(
    <div className="App">
      {data == null
        ? <img src={loading} alt='loading'/>
        : <div>
            <Field forms={data.Formations}/>
            <SubBoard subs={data.Substitutes}/>
          </div>
      }
    </div>
  )
}

export default App;