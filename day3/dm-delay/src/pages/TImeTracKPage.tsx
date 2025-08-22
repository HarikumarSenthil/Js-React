import { useState } from 'react'
import TimeTracker from '@/components/TimeTracker/TimeTracker'
import PieChart from '@/components/TimeTracker/pieChart'




function TrackerPage() {
  const [data,setData] = useState<{activity:string, hours:number}[]>([])

  
const setActivity = (activity:string, hours:number)=>{
  setData((prev)=> [...prev, {activity,hours}])  
}
  return (
    <div>
      <TimeTracker onAdd = {setActivity}/>
      <PieChart data={data}/>

    </div>
  )
}

export default TrackerPage
