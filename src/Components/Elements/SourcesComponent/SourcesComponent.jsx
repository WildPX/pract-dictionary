import { useDictionary } from "../../../DictionaryContext";

function SourcesComponent() {
  const { data } = useDictionary();
  const { sourceUrls } = data || {};

  return (
    <div>
      <h4>Sources</h4>
      <ul>
        {sourceUrls.map((url, index) => (
          <li key={index}>
            <a href={url} rel="noreferrer" target="_blank">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SourcesComponent;
