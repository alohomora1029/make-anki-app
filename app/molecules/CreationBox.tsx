"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ChangeButton from "../atoms/ChangeButton";
import CancelButton from "../atoms/CancelButton";
import { useRecoilState } from "recoil";
import { InputTerm } from "../atoms/recoil/InputTerm";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useRecoilState(InputTerm);

  const defaultInputValue = "default Value";
  useEffect(() => {
    setTerm(searchTerm || defaultInputValue);
  }, [searchParams]);

  function handleSubmit() {
    if (!term.trim()) return;
    router.push(`/creation?searchTerm=${term}`);
  }
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center"
      >
        <div className="relative">
          <input
            className="flex items-center text-center h-16 mt-10 w-80 p-5 bg-indigo-300 bg-opacity-30 rounded-full hover:shadow-md hover:bg-opacity-10 !outline-none"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <div className="absolute inset-y-12 right-1 flex my-3">
            <CancelButton onClick={() => setTerm("")} />
          </div>
        </div>
      </form>
      <ChangeButton onClick={handleSubmit} />
    </div>
  );
}
