import React from 'react';
import moment from 'moment';

const Month = ({startDate, index})=>{
    let date = moment(startDate).add(index * 7, 'day');
    let monthName = date.format('MMM')
    // let MonthNames = {
    //     1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr",  5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep",
    //    10: "Oct", 11: "Nov", 12: "Dec"
    // }

    return(
        // <div className="timeline-months-month">{MonthNames[index]}</div>
        <div className={`timeline-months-month ${monthName}`}>
            {monthName}
        </div>
    )
}

export default Month