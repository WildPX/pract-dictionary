function WordList({ title, words }) {
  if (words.length === 0 || !words) return null;

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {words.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}
export default WordList;
