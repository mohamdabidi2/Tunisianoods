import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { withRouter } from "react-router-dom";

const BarChart = () => {
  const [chartData, setChartData] = useState({});


  const chart = async() => {
let UserPerDay=[]
let Days=[]
let colors=[]
let date=new Date()
let day=date.toISOString().substr(8,2)
let month=date.toISOString().substr(5,2)
let year=date.toISOString().substr(0,4)
await axios.post("http://localhost:4000/getChartUsers/"+month+"/"+day+"/"+year).then(res=>UserPerDay=res.data)
for(let i=0;i<day;i++){
    
colors.push("rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)")
  Days.push("DAY : "+(i+1))
}
console.log(colors)


console.log(Days)
console.log(UserPerDay)
    setTimeout(() => {
      
    }, 3000);
        setChartData({
          labels: Days,
          datasets: [
            {
           
              data:UserPerDay ,
              backgroundColor: colors,
            
            }
           
          ]
        });
      
   
    
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
  
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
          }}
        />
      </div>
    </div>
  );
};

export default withRouter(BarChart) ;