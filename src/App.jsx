import { useState } from "react";
import { BackTop, SwitchTheme, Loader } from "./components/index";
import { Header, About, Skills, Services, Contact, Footer } from "./layout/index";
import { Svgs } from "./assets/svg/Svgs"
import './App.scss';
export default function App() {
  const [load, setLoad] = useState(false)
  return (
    <div onLoad={() => setLoad(true)} className="App">
      <Loader getLoad={load} />
      {Svgs.bgApp}
      <div className="mode">
        <div>
          <BackTop />
        </div>
        <SwitchTheme />
      </div>
      <Header />
      <main>
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}