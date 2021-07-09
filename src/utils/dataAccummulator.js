const AccumulatedData = []

const getAccumulatedData =(data)=>{
for(let day = new Date("2019-01-01"); day <= new Date("2019-12-31"); day.setDate(day.getDate() + 1)){
  let currentDay = new Date(day).toDateString()
  let currentDayData = {"date":"", "transactionType": "", "amount": ""};
  let totalAmount = 0;
  for(let i = 0; i < data.length ; i++){
    // Check if current day exist in the array of data...
    if(currentDay === new Date(data[i].date).toDateString()){
       
        if(data[i].transactionType === "credit"){
          totalAmount += data[i].amount;
        }else if(data[i].transactionType === "debit"){
          totalAmount -= data[i].amount;
        }
    }else{
      totalAmount += 0
    }
  }
  currentDayData.date = currentDay;
  currentDayData.amount = Math.abs(totalAmount);
  if(Math.sign(totalAmount) === -1){
    currentDayData.transactionType = "debit"
  }else if(Math.sign(totalAmount) === 1){
    currentDayData.transactionType = "credit"
  }else{
    currentDayData.transactionType = "no transaction"
  }

  AccumulatedData.push(currentDayData)
}

return AccumulatedData;

}

export default getAccumulatedData;