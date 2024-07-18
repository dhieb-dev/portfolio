import { useEffect, useRef, useState } from "react";
import "../scss/components/switch_theme.scss";
const rootElement = document.documentElement;
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
const options = [
  {
    icon: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 256a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-85.333334 0v85.333333a42.666667 42.666667 0 0 0 42.666667 42.666667zM896 469.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 0-85.333334zM256 512a42.666667 42.666667 0 0 0-42.666667-42.666667H128a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 42.666667-42.666667zM265.386667 213.333333a42.666667 42.666667 0 0 0-59.306667 62.72l61.44 59.306667a42.666667 42.666667 0 0 0 31.146667 11.946667 42.666667 42.666667 0 0 0 30.72-13.226667 42.666667 42.666667 0 0 0 0-60.16zM725.333333 347.306667a42.666667 42.666667 0 0 0 29.44-11.946667l61.44-59.306667A42.666667 42.666667 0 0 0 758.613333 213.333333l-61.44 60.586667a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 28.16 13.226667zM512 768a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333a42.666667 42.666667 0 0 0 85.333334 0v-85.333333a42.666667 42.666667 0 0 0-42.666667-42.666667zM756.48 688.64a42.666667 42.666667 0 0 0-59.306667 61.44L758.613333 810.666667a42.666667 42.666667 0 0 0 29.44 11.946666 42.666667 42.666667 0 0 0 30.72-12.8 42.666667 42.666667 0 0 0 0-60.586666zM267.52 688.64l-61.44 59.306667a42.666667 42.666667 0 0 0 0 60.586666 42.666667 42.666667 0 0 0 30.72 12.8 42.666667 42.666667 0 0 0 28.586667-10.666666l61.44-59.306667a42.666667 42.666667 0 0 0-59.306667-61.44zM512 341.333333a170.666667 170.666667 0 1 0 170.666667 170.666667 170.666667 170.666667 0 0 0-170.666667-170.666667z" /></svg>,
    text: "light"
  },
  {
    icon: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M524.8 938.666667h-4.266667a439.893333 439.893333 0 0 1-313.173333-134.4 446.293333 446.293333 0 0 1-11.093333-597.333334 432.213333 432.213333 0 0 1 170.666666-116.906666 42.666667 42.666667 0 0 1 45.226667 9.386666 42.666667 42.666667 0 0 1 10.24 42.666667 358.4 358.4 0 0 0 82.773333 375.893333 361.386667 361.386667 0 0 0 376.746667 82.773334 42.666667 42.666667 0 0 1 54.186667 55.04A433.493333 433.493333 0 0 1 836.266667 810.666667a438.613333 438.613333 0 0 1-311.466667 128z" /></svg>,
    text: "dark"
  },
  {
    icon: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M91.83 661.86c1.87 34.09 30.28 60.65 64.43 60.22h331.23v91.74H360.74c-13.34 0-24.16 10.82-24.16 24.16s10.82 24.16 24.16 24.16h302.53c13.34 0 24.16-10.82 24.16-24.16s-10.82-24.16-24.16-24.16H536.51v-91.74h331.24c34.14 0.43 62.55-26.13 64.43-60.22v-55.32H91.83v55.32zM867.74 161.86H156.26c-34.93-0.39-63.66 27.41-64.43 62.33v328.43h840.34V224.19c-0.77-34.93-29.5-62.72-64.43-62.33z" /></svg>,
    text: "system"
  }
]
export default function SwitchTheme() {
  const [selectors, setSelectors] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system")
  const btnMenu = useRef()
  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      rootElement.classList.add("dark")
    } else {
      rootElement.classList.remove("dark")
    }
  }
  onWindowMatch()
  useEffect(() => {
    switch (theme) {
      case "dark":
        rootElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
        break;
      case "light":
        rootElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
        break
      default:
        localStorage.removeItem("theme")
        break;
    }
  }, [theme])
  rootElement.addEventListener("click", e => {
    if (e.target !== btnMenu.current) {
      setSelectors(false)
    }
  })
  darkQuery.addEventListener('change', e => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        rootElement.classList.add("dark")
      } else {
        rootElement.classList.remove("dark")
      }
    }
  })
  return (
    <div className="btn-theme">
      <div ref={btnMenu} className="btn-menu" onClick={() => setSelectors(!selectors)}>
        {theme === "light" ? options[0].icon : theme === "dark" ? options[1].icon : options[2].icon}
      </div>
      {selectors &&
        <div className="selector-theme">
          {options.map(({ icon, text }) => {
            return (
              <div key={text} className={text} onClick={(e) => { setTheme(text) }}>
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            )
          })}
        </div>}
    </div>
  )
};