import React,{useState,useEffect} from 'react';
import moment from 'moment';
import './App.scss';
import Timeline from './components/Timeline';
import getAccumulatedData from './utils/dataAccummulator';

function App() {
  const [data,setData]=useState([]);
  // getting raw data from json file
  const getData=()=>{
    fetch('transactions-carter.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //get accumulated data for the year
        return getAccumulatedData(myJson)
      }).then(function(myAccum) {
        setData(myAccum)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  // 1 year range
  let startDate = moment("2019-01-01");
  let dateRange = [startDate, moment("2020-01-01")];
  // let startDate = moment().add(-365, 'days');
  // let dateRange = [startDate, moment()];

  return (
    <div className="App">
      <Timeline range={dateRange} data={data}/>
    </div>
  );
}

export default App;
