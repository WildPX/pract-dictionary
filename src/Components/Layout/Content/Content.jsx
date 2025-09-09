import { useDictionary } from "../../../DictionaryContext";
import Error from "../../Elements/Error/Error";
import Loading from "../../Elements/Loading/Loading";
import Meanings from "../../Elements/Meanings/Meanings";
import SourcesComponent from "../../Elements/SourcesComponent/SourcesComponent";
import WordContainer from "../../Elements/WordContainer/WordContainer";

function Content() {
  const { loading, error } = useDictionary();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <WordContainer />
      <Meanings />
      <SourcesComponent />
    </div>
  );
}
export default Content;
