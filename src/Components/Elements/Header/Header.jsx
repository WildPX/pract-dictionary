import FontChanger from "../FontChanger/FontChanger";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.rightControls}>
        <FontChanger />
        <ThemeToggle />
      </div>
    </header>
  );
}
export default Header;
