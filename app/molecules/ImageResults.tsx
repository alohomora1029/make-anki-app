"use client"
import React, { useEffect, useState } from 'react'
import { ImageBox } from './ImageBox';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export default function ImageResults({searchParams}:Params) {
  const [isLoading,setIsLoading] = useState(true)
  const [image,setImage] = useState([]);
  const getParams = useSearchParams();
  const term = getParams.get("searchTerm") || searchParams.searchTerm  
  useEffect(()=>{
    async function fetchImage(){
      try{
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_INSERT_YOUR_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTENT_KEY}&q=${term}&searchType=image`)
  
  if(!response){
    throw new Error('Something went wrong');
  }
  const data = await response.json();
  const results = data.items;
  setImage(results)
  setIsLoading(false)
  }catch(error){
    console.log(error)
  }
    }
    fetchImage()
  },[term])
  if(isLoading){
    return <h1>Loading...</h1>;
  }

  if(!image){
    return<h1>No results found</h1>
  }
   return(
    <>
    <ImageBox results={image}/>
    </>
    )
}
