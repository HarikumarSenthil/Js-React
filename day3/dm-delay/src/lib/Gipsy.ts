export const FetchGipsy = async(query:string)=>{
    const api_key = import.meta.env.VITE_GIF_API_KEY
    const data = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=20`)
    const jsonData = await data.json()
    console.log(jsonData)
    return jsonData.data

}