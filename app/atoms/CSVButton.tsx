import React from 'react'

export default function CSVButton({onClick}:onClick) {
  return (
    <div className='flex justify-center'>
   <button className=' h-10 px-4 my-5 rounded-full bg-gray-200  hover:shadow-lg hover:bg-blue-300' onClick={onClick}>CSV</button>
   </div>
  )
}
