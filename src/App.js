import React,{useState,useEffect} from 'react';
import moment from 'moment';
import './App.scss';
import Timeline from './components/Timeline';
import getAccumulatedData from './utils/dataAccummulator';

function App() {
  const [data,setData]= useState([]);
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
  

  return (
    <div className="App">
      <h1 className="heading">Financial Transaction Heatmap</h1>
      <Timeline range={dateRange} data={data}/> 
      <div className="keys">
        <h1 className="keys-heading">Heat map keys</h1>
        <div className="keys-item"><span className="keys-green keys-block"></span><span>Credit day</span></div>
        <div className="keys-item"><span className="keys-red keys-block"></span><span>Debit day</span></div>
        <div className="keys-item"><span className="keys-black keys-block"></span><span>Zero transaction day</span></div>
      </div>
    </div>
  );
}

export default App;
