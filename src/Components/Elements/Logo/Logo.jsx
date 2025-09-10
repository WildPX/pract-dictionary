import { FaBook } from "react-icons/fa";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <FaBook />
      Dicty
    </div>
  );
}
export default Logo;
