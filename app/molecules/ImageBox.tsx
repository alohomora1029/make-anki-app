'use client'
import { imageSelect } from '../atoms/recoil/imageSelect';
import { useRecoilState } from 'recoil';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export function ImageBox({results}:{results:any[]}) {
  const [select,setSelect] = useRecoilState(imageSelect);
  const [box,setBox] = useState(results);

 useEffect(()=>{
  setBox(results.slice(0,3))
 },[results])

     function handleSelect(e:any){
      setSelect([{key:e.target.index,alt:e.target.alt,src:e.target.src}])
      }
     return ( 
    <>
       <div className='flex justify-center flex-shrink-0 mt-10'>
        {box.map((result:any,index:number)=>(
           <div className='hover:translate-y-1'
                     onClick={handleSelect}
                     key={index}>
                   <Image
                         src = {result.link}
                         alt = {result.title}
                         width={250}
                         height={250}
                         />
                   </div>

        ))}
       </div>
    </>
      )

}
