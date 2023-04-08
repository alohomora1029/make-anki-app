'use client'
import React from "react";
import { useRecoilValue } from "recoil";
import { csvArrayState } from "../atoms/recoil/csvArrayState";
import CSVButton from "../atoms/CSVButton";

export default function SheetCreate() {
  const csvArray = useRecoilValue(csvArrayState);
  function csvConvert() {
    const { Parser } = require("json2csv");

    const fields = [
      {label:"key",value:"key"},
      {label:"word",value:"word"},
      {label:"image",value:"image"},
      {label:"meaning",value:"meaning"},
    ]

    const json2csvParser = new Parser({fields:fields,header:true,withBOM: true});
    const data = json2csvParser.parse(csvArray);

    //ダウンロードするCSVファイル名を指定する
    const filename = "download.csv";
    //BOMを付与する（Excelでの文字化け対策）
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    //Blobでデータを作成する
    const blob = new Blob([bom, data], { type: "text/csv" });
    const nav = (window.navigator as any);
    if (nav.msSaveOrOpenBlob) {
      nav.msSaveOrOpenBlob(data, filename);
    }
    else {
        const url = (window.URL || window.webkitURL).createObjectURL(blob);
        const download = document.createElement("a");
        download.href = url;
        download.download = filename;
        download.click();
        (window.URL || window.webkitURL).revokeObjectURL(url);
    }
}
  return (
    <div>
      <CSVButton onClick={csvConvert}/>
    </div>
  );
}
