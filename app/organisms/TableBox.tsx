import React from 'react'
import TableChildren from '../molecules/TableChildren'
import CSVButton from '../atoms/CSVButton'
import SheetCreate from '../molecules/SheetCreate'

export default function TableBox() {
  return (
    <div className='flex flex-col'>
    <div className='flex overflow-auto justify-center mt-10'>
      <TableChildren/>
      </div> 
      <SheetCreate/>
   </div>
  )
}

