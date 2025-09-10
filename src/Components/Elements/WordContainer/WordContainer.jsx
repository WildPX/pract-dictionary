import { useDictionary } from "../../../DictionaryContext";
import AudioPlay from "../AudioPlay/AudioPlay";
import classes from "./WordContainer.module.css";

function WordContainer() {
  const { data } = useDictionary();
  const { word, phonetic } = data || {};

  return (
    <section className={classes.wordContainer}>
      <div className={classes.word}>
        <h1>{word}</h1>
        <h3>{phonetic || "n/a"}</h3>
      </div>
      <AudioPlay />
    </section>
  );
}
export default WordContainer;
