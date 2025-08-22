import React from "react"
import GifGird from "@/components/Gif/GifGird"
import SearchBar from "@/components/Gif/SearchBar"
function GifSearch() {
    const [query, setquery] = React.useState("")


return (
    <div className = "w-xl">
        <h1 className = "text-lg font-bold"> Search GIF's</h1>
        <SearchBar query={query} setQuery={setquery}/>
        <GifGird query={query}/>
      
    </div>
  )
}

export default GifSearch
