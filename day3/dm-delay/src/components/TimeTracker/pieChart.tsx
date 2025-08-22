import { Pie } from "react-chartjs-2"
import { Chart as ChartJs , Legend, Tooltip, ArcElement } from "chart.js"


ChartJs.register(Legend, Tooltip, ArcElement)

interface props{
    data:({activity:string, hours:number}) []
}

function PieChart({data}:props) {
    const chartData  = {
         labels : data.map((d)=>d.activity),
         datasets:[
            {
                label:"Hour",
                data:data.map((d)=> d.hours),
                backgroundColor:["red","blue" , "green","yellow", "pink", "violet"],
                borderWidth:1
            }
         ],
    }
  return (
    <Pie data ={chartData}/>
  )
}
export default PieChart
