import React from 'react'

export default function AddButton({onClick}:onClick) {
  return (
   <button className='btn mt-10 h-10 px-4 my-5 rounded-full bg-gray-200 transition ease-out delay-100  hover:shadow-lg hover:bg-blue-300 hover:-translate-y-1 hover:scale-125' onClick={onClick}
   type="submit"
   >Add</button>
  )
}
