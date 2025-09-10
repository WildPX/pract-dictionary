import { useDictionary } from "../../../DictionaryContext";
import Meaning from "../Meaning/Meaning";

function Meanings() {
  const { data } = useDictionary();
  const { meanings } = data || {};

  return (
    <section>
      {meanings &&
        meanings.map((meaning, index) => <Meaning key={index} {...meaning} />)}
    </section>
  );
}
export default Meanings;
