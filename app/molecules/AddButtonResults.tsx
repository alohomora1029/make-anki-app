'use client'
import React from 'react'
import AddButton from '../atoms/AddButton'
import { useRecoilState, useRecoilValue } from 'recoil';
import { InputWord } from '../atoms/recoil/InputWord';
import { imageSelect } from '../atoms/recoil/imageSelect';
import { InputMeaning } from '../atoms/recoil/InputMeaning';
import { InputTableArray } from '../atoms/recoil/InputTableArray';
import { AddedState } from '../atoms/recoil/AddedState';
import { Router, useRouter } from 'next/router';
import TableChildren from './TableChildren';

function AddButtonResults() {
  const inputWord = useRecoilValue(InputWord);
  const select = useRecoilValue(imageSelect);
  const inputMeaning = useRecoilValue(InputMeaning);
  const [inputArray,setInputArray] = useRecoilState(InputTableArray);
  const [isAdded,setIsAdded] = useRecoilState(AddedState);

  function handleAdd (){
    const add = {key:inputArray.length,word:inputWord,image:select,meaning:inputMeaning}
    setInputArray([...inputArray,add]);
    setIsAdded(true);
    window.scrollTo(0,1525)
  }
  return (
    <div>{<AddButton onClick = {handleAdd}/>}</div>
  )
}

export default AddButtonResults