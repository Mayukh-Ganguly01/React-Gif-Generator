import React  from 'react'
import { useState } from 'react'

import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const Tag = () => {
    const[tag, setTag] = useState('car')
    

    const {gif, loading, fetchData} = useGif(tag);

  return (
    
    <div className='w-1/2 bg-blue-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-3xl underline font-bold uppercase '>Random {tag} Gif</h1>
        {
          loading ? (<Spinner/>) : (<img 
          className='text-center'
          src={gif} alt='gif' width="450px" />)
        }

        <input className='bg-white w-10/12 rounded-lg text-center py-2 text-lg border'
        onChange={(event) => {setTag(event.target.value)}}
        value={tag}/>

        
        
        <button
        className='w-10/12 bg-slate-300 text-lg py-2 rounded-lg hover:bg-slate-600 transition duration-300 ease-in-out hover:text-white mb-5 '
         onClick={() => {fetchData(tag)}}>Generate</button>
    </div>
  )
}

export default Tag