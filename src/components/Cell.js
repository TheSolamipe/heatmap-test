// import moment from 'moment';
import React from 'react';

const Cell = ({date, colorValue, transactionType})=>{
    let style;
    if(transactionType === "credit"){
        style={
            backgroundColor:  `rgba(0, 225, 0, ${colorValue})`,
        }
    }else if(transactionType === "debit"){
        style={
            backgroundColor:  `rgba(225, 0, 0, ${colorValue})`
        }
    }else{
        style={
            backgroundColor:  `rgba(0, 0, 0, 0)`
        }
    }
    
    return(
        <div className="timeline-cells-cell" style={style}></div>
    )
}

export default Cell