"use client"
import React from 'react'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { imageSelect } from '../atoms/recoil/imageSelect'

export default function ImageCard() { 
  const select = useRecoilValue(imageSelect);
  return (
    <div className='p-10 ml-3'>
      {select.map((img:Img)=>{
      return(
      <div key={img.alt}>
       <Image 
      src = {img.src}
      alt = {img.alt}
      width={300}
      height={300}
      />
      </div>)
      })}
     </div>
  )
}
