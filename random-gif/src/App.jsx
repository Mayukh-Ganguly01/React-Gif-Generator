import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-10 font-bold text-4xl px-10 py-2">RANDOM GIF</h1>
      <div className=" w-full flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
