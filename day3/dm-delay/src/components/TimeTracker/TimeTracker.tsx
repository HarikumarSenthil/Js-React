import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface props {
onAdd:(Activity:string, hours:number) => void
}

const TimeTracker = ({onAdd}:props) => {
const [activity,setActivity] = useState<string>("")
const [hour,setHour] = useState<number>(2)

const AddActivity = ()=>{
    onAdd(activity,hour)

}



  return (
    <div className="p-10 border border-amber-200 rounded-lg shadow-lg">
        <h1 className = "font-bold text-center"> Time Tracker</h1>
        <Input type = "string" placeholder="Activity eg: (eat)" value = {activity} className = "mt-2" onChange = {(e)=> setActivity(e.target.value)}/>
        <Input type = "number" placeholder = "Hours" value = {hour} className = "mt-2" onChange={(e)=> setHour(Number(e.target.value))}/>
        <Button className = "w-full mt-2" onClick = {AddActivity} > Add Activity</Button>
    </div>
  )
}

export default TimeTracker
