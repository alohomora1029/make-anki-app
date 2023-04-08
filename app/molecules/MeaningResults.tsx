"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MeaningCard } from "./MeaningCard";

function MeaningResult({searchParams}:Params) {
  const [meaning, setMeaning] = useState(null);
  const getParams = useSearchParams();
  const term = getParams.get("searchTerm") || searchParams.searchTerm 
  useEffect(() => {
    async function fetchMeaning() {
      try {
        const res = await fetch(
          `https://dictionaryapi.com/api/v3/references/learners/json/${term}?key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await res.json();
        setMeaning(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMeaning();
  }, [term]);
  if (meaning) {
    return( <MeaningCard meaning={meaning}/>)
  } else {
    return <h1>Loading...</h1>;
  }
}

export default MeaningResult;
