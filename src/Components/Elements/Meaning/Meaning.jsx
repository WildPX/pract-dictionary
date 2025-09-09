function Meaning({ partOfSpeech, definitions, synonyms, antonyms }) {
  return (
    <div>
      Meaning.{" "}
      <span style={{ textTransform: "capitalize" }}>{partOfSpeech}</span>
    </div>
  );
}
export default Meaning;
