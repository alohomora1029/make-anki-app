"use client";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Image from "next/image";
import { InputTableArray } from "../atoms/recoil/InputTableArray";
import { AddedState } from "../atoms/recoil/AddedState";
import TrashButton from "../atoms/TrashButton";
import { csvArrayState } from "../atoms/recoil/csvArrayState";

export default function TableChildren() {
  const inputArray = useRecoilValue(InputTableArray);
  const [csvArray, setCsvArray] = useRecoilState(csvArrayState);
  const isAdded = useRecoilValue(AddedState);

  useEffect(() => {
    setCsvArray(inputArray);
  }, [inputArray]);

  function handleTrash(props: any) {
    const removeItem = csvArray.filter((input: any) => {
      return input.key !== props;
    });
    setCsvArray(removeItem);
  }

  return (
    <div>
      {isAdded ? (
        <div className="flex flex-shrink-0 mt-5">
          <table className="m-10 rounded-lg drop-shadow-md bg-indigo-400 bg-opacity-10">
            <thead>
              <tr>
                <th className="font-light p-3">word</th>
                <th className="font-light p-3">image</th>
                <th className="font-light p-3">meaning</th>
              </tr>
            </thead>
            <tbody>
              {csvArray.map((add: any) => {
                return (
                  <tr key={add.key}>
                    <td className="p-10">{add.word}</td>
                    <td className="p-10">
                      {add.image.map((img: Img) => {
                        return (
                          <div key={img.alt}>
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={300}
                              height={300}
                            />
                          </div>
                        );
                      })}
                    </td>
                    <td className="p-10">{add.meaning}</td>
                    <td className="p-3">
                      <TrashButton
                        onClick={() => {
                          handleTrash(add.key);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
