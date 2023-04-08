"use client";
import React, { useEffect, useState } from "react";
import EditButton from "../atoms/EditButton";
import { useRecoilState } from "recoil";
import { InputWord } from "../atoms/recoil/InputWord";
import { useSearchParams } from "next/navigation";

export default function FrontCard({ searchParams }: Params) {
  const [word, setWord] = useState(searchParams.searchTerm || "");
  const [isEditing, setIsEditing] = useState(false);
  const getParams = useSearchParams();
  const [inputWord, setInputWord] = useRecoilState(InputWord || searchParams.searchTerm || getParams.get('searchTerm'));
  
    useEffect(()=>{
      if(searchParams.searchTerm){
        setInputWord(searchParams.searchTerm);
        setWord(inputWord)
      }
    },[searchParams,searchParams.searchTerm])

  function handleEditWord() {
    setWord(word);
    setInputWord(word);
    setIsEditing(false);
  }

  return (
    <div className="p-28">
      {isEditing ? (
        <div>
          <form onSubmit={handleEditWord}>
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </form>
          <button type="submit" onClick={handleEditWord}>
            Change
          </button>
        </div>
      ) : (
        <div>
          <p>{word}</p>
          <EditButton onClick={() => setIsEditing(true)} />
        </div>
      )}
    </div>
  );
}
