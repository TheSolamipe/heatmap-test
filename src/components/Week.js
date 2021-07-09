import React from 'react';

const WeekDay = ({index})=>{
    let DayNames = {
        1: "Mon",
        3: "Wed",
        5: "Fri"
    }
    return(
        <div className="timeline-weekdays-weekday">{DayNames[index]}</div>
    )
}

export default WeekDay