import { useDictionary } from "../../../DictionaryContext";
import Error from "../../Elements/Error/Error";
import Loading from "../../Elements/Loading/Loading";
import Meanings from "../../Elements/Meanings/Meanings";
import SourcesComponent from "../../Elements/SourcesComponent/SourcesComponent";
import WordContainer from "../../Elements/WordContainer/WordContainer";
import classes from "./Content.module.css";

function Content() {
  const { data, loading, error } = useDictionary();

  if (!data) {
    return <div>Please, search a word for definitions.</div>;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={classes.contentContainer}>
      <WordContainer />
      <Meanings />
      <SourcesComponent />
    </div>
  );
}
export default Content;
