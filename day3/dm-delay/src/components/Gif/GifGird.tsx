import React from 'react'
import { FetchGipsy } from '@/lib/Gipsy'

interface Props {
    query:string
}



const GifGird:React.FC<Props> = ({query}) => {
    const [gif,setGif] = React.useState([])
    const [loading, setLoading] = React.useState(true)
   React.useEffect(()=>{
    const fetchData  = async ()=>{
        setLoading(true)
        try{
        const Data = await FetchGipsy(query);
        setGif(Data)
        }
        catch(e){
            console.log("error Gif's", e)
        }finally{
         setLoading(false)
        }
    }
    fetchData()
   },[query])

  return (
    <>
    { loading ? (<h2 className='text-center'> Loading Gif!!!!..</h2>):

    
    (<div className='grid grid-cols-2 md:grid-cols-4 m-4'>
        {
            gif.map((eachgif)=>(
                <div className='m-2'>
                  <img  key={eachgif.id} src = {eachgif.images.fixed_height.url} alt ={eachgif.title} />              
        </div>
            ))
        }
    </div>)
    }
    </>
  )
}

export default GifGird
