import Divider from "../Divider/Divider";

function MeaningHeader({ partOfSpeech }) {
  return (
    <div>
      <h2>{partOfSpeech}</h2>
      <Divider />
    </div>
  );
}
export default MeaningHeader;
