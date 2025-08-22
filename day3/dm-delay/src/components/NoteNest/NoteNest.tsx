import { useState } from "react"
import { db} from "@/lib/firebase"
import { addDoc ,serverTimestamp, collection} from "firebase/firestore"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import GetNotes from "./GetNotes"
const NoteNest = () => {
    const [notes,setNotes] = useState("")
    const [loading, setLoading] = useState(false)


    const submitNotes = async()=>{

        if (!notes.trim()){
            alert("Enter valid Notes!!!...")
        }
        else{
        setLoading(true);
      await addDoc(collection(db,"notes"),{
        content:notes,
        createdAt:serverTimestamp()
      })
    setLoading(false)
    setNotes("")
        }
    }

  return (
    <>
    <div className = "border p-5 rounded-lg shadow-lg md:w-dvh">
        <h1 className = "font-bold text-center">📝 NoteNest</h1>
        <Input 
        placeholder = "Enter Your Notes"
        type = "text" className = "w-full mt-4" 
        value = {notes}
        onChange = {(e)=> setNotes(e.target.value)}/>
        <Button 
        className = "w-full mt-4"
        onClick={submitNotes}>
        {loading ? "Saving!!...." :"Add notes"} </Button>
      
    </div>
    <GetNotes/>
    </>
  )
}

export default NoteNest
