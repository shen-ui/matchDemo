import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

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
        console.log(parser.Formation);
        // potentially need to use more states
        setData(parser);
      })
      .catch((err) => {
        console.log("error: ", err);
      })
  }, []);

  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;
