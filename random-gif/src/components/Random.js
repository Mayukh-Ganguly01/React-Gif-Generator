import React from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const Random = () => {

    // const[gif, setGif] = useState('')
    // const[loading, setLoading] = useState(false)  

    // async function fetchData(){
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${YOUR_API_KEY}`
    //     const {data} = await axios.get(url);
    //     const imgSrc = data.data.images.downsized.url
    //     setGif(imgSrc)
    //     setLoading(false)
    // }

    // useEffect(()=>{
    //     fetchData()
    // }, [])

  const {gif, loading, fetchData} = useGif();

  return (
    
    <div className='w-1/2 bg-green-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-3xl underline font-bold uppercase '>Random Gif</h1>
        {
          loading ? (<Spinner/>) : (<img src={gif} alt='gif' width="450px" />)
        }
        
        <button
        className='w-10/12 bg-slate-300 text-lg py-2 rounded-lg hover:bg-slate-600 transition duration-300 ease-in-out hover:text-white mb-5 '
         onClick={() => {fetchData()}}>Generate</button>
    </div>
  )
}

export default Random