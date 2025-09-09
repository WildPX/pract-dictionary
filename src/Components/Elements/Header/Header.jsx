import FontChanger from "../FontChanger/FontChanger";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  return (
    <header>
      <Logo />
      <div className="">
        <FontChanger />
        <ThemeToggle />
      </div>
    </header>
  );
}
export default Header;
