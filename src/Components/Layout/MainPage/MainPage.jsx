import Content from "../Content/Content";
import Header from "./../../Elements/Header/Header";
import Search from "./../../Elements/Search/Search";
import Footer from "./../../Elements/Footer/Footer";
import classes from "./MainPage.module.css";

// TODO: Loading
function MainPage() {
  return (
    <div className={classes.mainPage}>
      <Header />
      <Search />
      <Content />
      <Footer />
    </div>
  );
}
export default MainPage;
