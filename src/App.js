import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState(0);

  // useEffect updates dom when an event happens
  useEffect(() => {
    axios
      .get(' https://static.yinzcam.com/interviews/web/api/match1.xml', {
        'Content-Type': "applications/xml"
      })
      .then(function(res){
        console.log(res.data);
        setData(res.data);
      })
  });

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
