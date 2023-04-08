"use client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { InputMeaning } from "../atoms/recoil/InputMeaning";
import EditButton from "../atoms/EditButton";
import TrashButton from "../atoms/TrashButton";

export function MeaningCard({ meaning }: MeaningResult) {
  const [inputMeaning, setInputMeaning] = useRecoilState(InputMeaning || [""]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [input, setInput] = useState<string[]>([]);

  // function handleMeaningInput (){
  //   setIsEditing(true);
  //   setInputMeaning()
  // }
  useEffect(() => {
    let str = meaning[0].shortdef;
    setInput(str);
    setInputMeaning(str);
  }, [meaning]);

  function handleInput() {
    setInput(input);
    setInputMeaning(input);
    setIsEditing(false);
    setIsEdited(true);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <form
            onSubmit={handleInput}
            className="flex justify-center flex-col ml-3 p-10"
          >
            <textarea
              rows={3}
              className="h-auto w-80 row-3 rounded-lg"
              onChange={(e) => setInput([e.target.value])}
              value={input}
            />
          </form>
          <button type="submit" onClick={handleInput}>
            Change
          </button>
        </div>
      ) : (
        <div>
          {isEdited ? (
            <div className="ml-3 flex flex-col justify-center p-20">
              {input}
            <EditButton onClick={() => setIsEditing(true)} />
            </div>
          ) : (
            <div className="ml-3 flex flex-col justify-center p-20">
              {meaning[0].shortdef.map((def: string, index: number) => {
                return <div key={index}>{def}</div>;
              })}
              <EditButton onClick={() => setIsEditing(true)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
