type Meta = {
 uuid:string;
}

type Meaning = {
  meta : Meta;
  shortdef: string[];
}
 type MeaningResult = {
  meaning: Meaning[];
}