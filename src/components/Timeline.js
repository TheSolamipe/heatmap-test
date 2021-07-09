import React from 'react';
import WeekDay from './Week';
import Month from './Month';
import Cell from './Cell';
import moment from 'moment';



const Timeline = ({range, data})=>{
    let days = Math.abs(range[0].diff(range[1], 'days'));
    let cells = Array.from(new Array(days));
    let weekDays = Array.from(new Array(7));
    let months = Array.from(new Array(Math.floor(days / 7)));

    //getting the maximum and minimum values in the data
    let max = Math.max(0, ...data.map(d => d.amount));
    let min = Math.min(...data.map(d => d.amount));
    let startDate = range[0];
    const DayFormat = 'YYYY-MM-DD';
    
    let colorMultiplier = 2 / (max - min);

    return (
        <div className="timeline">
            <div className="timeline-months">
                {months.map((_, index) => <Month key={index} index={index} startDate={startDate} />)}
            </div>
            <div className="timeline-body">
                <div className="timeline-weekdays">
                    {weekDays.map((_,index)=> <WeekDay key={index} index={index} startDate={startDate} />)}
                </div>
                <div className="timeline-cells">
                    {cells.map((_, index)=> {
                        let date = moment(startDate).add(index, 'day');
                        let dataPoint = data.find(d => moment(date).format(DayFormat) === moment(d.date).format(DayFormat));
                        let colorValue = colorMultiplier * dataPoint?.amount

                        return (
                            <Cell 
                                key={index} 
                                index={index} 
                                date={date}
                                colorValue = {colorValue}
                                transactionType = {dataPoint?.transactionType}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline