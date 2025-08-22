
import { useState } from "react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

const MessageForm = ()=>{
    const [timer , setTimer]= useState<number>(3)
    const [userMessage, setUserMessage] = useState<string>("")
    const [UserLoading,setUserLoading] = useState<boolean>(false)
    const [sendMessage,setSendMessage] = useState<string>("")
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
    const MakeDelay = ()=>{
           setUserLoading(true);
    const id = setTimeout(()=>{
            setSendMessage(userMessage);
            setUserMessage("") 
            setUserLoading(false)       
        },timer * 1000)
        setTimerId(id)
    }

    const CancelMessage = ()=>{
       if (timerId) clearInterval(timerId);

        setUserLoading(false);
    }

    return (
        <>
        <div className = "border rounded-lg bg-gray-100 shadow-lg p-5 m-1">
         <Textarea placeholder="Enter Your Message" disabled={UserLoading} className = "mt-2" value={userMessage} onChange={(e)=>setUserMessage(e.target.value) } />
         <Input type = "Number" value={timer} disabled={UserLoading}  onChange = {(e)=> setTimer(Number(e.target.value))} className = "mt-2" />
          
        { !UserLoading ? 
        
        (<Button className="w-full mt-2" onClick = {MakeDelay} > Send Message   </Button>):
           <Button className="w-full mt-2" variant={"destructive"} onClick = {CancelMessage} > Cancel Message   </Button>
    }
           {
            sendMessage &&  <div className="bg-green-600 shadow-lg p-2 rounded mt-2"> <p className = "text-white"> Message Sent: {sendMessage} </p> </div>
           }

        </div>
        </>
    )
}

export default MessageForm 