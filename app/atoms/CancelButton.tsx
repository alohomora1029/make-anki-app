import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

type Cancel = {
  onClick:()=>void
}

export default function CancelButton({onClick}:Cancel) {
  return (
    <div>
      <MdOutlineCancel className='mr-3 text-2xl text-slate-600 cursor-pointer transition hover:translate-y-1' onClick={onClick}/>
    </div>
  )
}
