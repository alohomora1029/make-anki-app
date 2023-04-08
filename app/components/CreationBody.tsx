import React from 'react'
import CardBox from '../organisms/CardBox'
import CreationBox from '../molecules/CreationBox'
import  ImageResults  from '../molecules/ImageResults'
import InputCard from '../molecules/InputCard'
import TableBox from '../organisms/TableBox'


export default function CreationBody({searchParams}:Params) {
  return (
    <div>
      <CreationBox/>
      <ImageResults searchParams={searchParams}/>
      <CardBox searchParams={searchParams}/>
      <TableBox/>
    </div>
  )
}
