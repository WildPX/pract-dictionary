function DefinitionsList({ definitions }) {
  if (!definitions || definitions.length === 0) return null;

  return (
    <div>
      <h4>Meaning</h4>
      <ul>
        {definitions.map((data, index) => (
          <li key={index}>
            <div>
              <p>{data.definition}</p>
              {data.example && <blockquote>“{data.example}”</blockquote>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DefinitionsList;
