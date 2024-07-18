import { Hero, NavBar } from "../components/index";
import "../scss/layout/header.scss";

export default function Header() {
  return (
    <header id="Home" className="header-app">
      <NavBar />
      <Hero />
    </header>
  )
};