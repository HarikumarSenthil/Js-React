import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import { useEffect ,useState} from "react"
import { db } from "@/lib/firebase"
import { Button } from "../ui/button"

interface Notes {
    id :string
    content: string
}

const GetNotes = () => {

   const [notes,setNotes] = useState<Notes[]>([])
    useEffect(()=>{
const unSubscribe = onSnapshot(collection(db,"notes"),(snapshot)=>{
    const notesData = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    })) as Notes[]
    setNotes(notesData)
})
return ()=> unSubscribe();

    },[])
   const deleteNotes = async(id:string)=>{
    console.log("Delete Button Clicked!!!....",id)
    await deleteDoc(doc(db,"notes",id));
   }
  return (
    <div>
       <h3 className = "text-bold text-gray-700 text-center"> My Notes</h3>
    {
      notes.map((eachnote)=>(
        <div key = {eachnote.id} className = "bg-gray-100 p-5 rounded-xl m-2 shadow-lg flex flex-row justify-between align-center">
          <p> {eachnote.content}</p>
          <Button variant={"destructive"} onClick = {()=> deleteNotes(eachnote.id)}> Delete</Button>
        </div>
      ))
    }  
    </div>
  )
}

export default GetNotes
