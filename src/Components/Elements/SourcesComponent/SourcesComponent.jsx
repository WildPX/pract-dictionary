import { useDictionary } from "../../../DictionaryContext";

function SourcesComponent() {
  const { data } = useDictionary();
  const { sourceUrls } = data || {};

  console.log("Sources: ", sourceUrls);
  return <div>Sources: {sourceUrls}</div>;
}
export default SourcesComponent;
