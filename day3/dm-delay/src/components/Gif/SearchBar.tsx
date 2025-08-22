import React from 'react'
import { Input } from '../ui/input'

interface Props {
    query :string, 
    setQuery : (value:string) => void;

}


const SearchBar:React.FC<Props> = ({query,setQuery}) => {
    const SetValue  = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)

    }
  return (
    <div>

        <Input type = "text" placeholder = "Enter Your Mood eg: (happy...!)" value = {query} onChange ={SetValue}/>
      
    </div>
  )
}

export default SearchBar
