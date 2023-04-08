import React from 'react'
import FrontCard from '../molecules/FrontCard'
import ImageCard from '../molecules/ImageCard'
import  MeaningResults  from '../molecules/MeaningResults'
import AddButtonResults from '../molecules/AddButtonResults'

export default function CardBox({searchParams}:Params) {
  return (
   <div className='flex flex-col items-center'>
    <div className='flex flex-shrink-0 mt-10'>
    <div className='flex overflow-x-auto rounded-lg drop-shadow-md bg-indigo-400 bg-opacity-10'>
      <FrontCard searchParams={searchParams}/>
      <ImageCard />
      <MeaningResults searchParams={searchParams}/>
    </div>
    </div>
    <AddButtonResults/>
    </div> 
  )
}
