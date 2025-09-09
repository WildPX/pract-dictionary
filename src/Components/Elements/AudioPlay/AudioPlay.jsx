import { useDictionary } from "../../../DictionaryContext";

function AudioPlay() {
  const { data } = useDictionary();
  const { phonetics } = data || {};

  console.log("AudioPlay props:", { phonetics });

  return <div>AudioPlay</div>;
}
export default AudioPlay;
