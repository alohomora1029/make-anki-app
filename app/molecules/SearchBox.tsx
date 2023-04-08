"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import ChangeButton from '../atoms/ChangeButton';
import CancelButton from '../atoms/CancelButton';

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm")
  const [input ,setInput] = useState(searchTerm || "");
  function handleSubmit (e:InputType) {
    e.preventDefault();
    if(!input.trim())return;
    router.push(`/creation?searchTerm=${input}`)
  }
  return (
    <div className='flex flex-col items-center flex-auto'>
      <form onSubmit={handleSubmit} className='flex justify-center items-center'>
        <div className='relative'>
        <input className='flex items-center text-center h-16 mt-10 w-80 p-5 bg-indigo-300 bg-opacity-30 rounded-full hover:shadow-md hover:bg-opacity-10 !outline-none'
        id='search'
        type='text'
        value={input}
        placeholder='please write here !!'
        onChange={(e)=>setInput(e.target.value)}/>
       <div className='absolute inset-y-12 right-1 flex my-3'><CancelButton onClick={()=>setInput("")}/></div>  </div>
      </form>
     
      <ChangeButton onClick={handleSubmit}/>
      
    </div>
  )
}
