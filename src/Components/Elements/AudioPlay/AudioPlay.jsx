import { FaPlay } from "react-icons/fa";
import { useDictionary } from "../../../DictionaryContext";

function AudioPlay() {
  const { data } = useDictionary();
  const { phonetics } = data || {};

  // Search for audio. If no audio found, return no component
  const audio = phonetics.find((p) => p.audio)?.audio || "";

  if (!audio) return null;

  return (
    <button>
      <FaPlay />
    </button>
  );
}
export default AudioPlay;
