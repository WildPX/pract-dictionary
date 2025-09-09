import { useDictionary } from "../../../DictionaryContext";
import AudioPlay from "../AudioPlay/AudioPlay";

function WordContainer() {
  const { data } = useDictionary();
  const { word, phonetic } = data || {};

  console.log("WordContainer props:", { word, phonetic });
  return (
    <section>
      <h1>{word}</h1>
      <h3>{phonetic}</h3>
      <AudioPlay />
    </section>
  );
}
export default WordContainer;
