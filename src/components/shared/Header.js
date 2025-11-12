import HeaderClient from "./HeaderClient";
import Logo from "./Logo";

export default function Header() {
  return <HeaderClient desktopLogo={<Logo />} drawerLogo={<Logo />} />;
}
