import DefinitionsList from "./DefinitionsList";
import MeaningHeader from "./MeaningHeader";
import WordList from "./Wordlist";

function Meaning({ partOfSpeech, definitions, synonyms, antonyms }) {
  return (
    <article>
      <MeaningHeader partOfSpeech={partOfSpeech} />
      <DefinitionsList definitions={definitions} />
      <WordList title="Synonyms" words={synonyms} />
      <WordList title="Antonyms" words={antonyms} />
    </article>
  );
}

export default Meaning;
