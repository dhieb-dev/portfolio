import { useEffect, useState } from "react"
import "../scss/components/back_top.scss"
export default function BackTop() {
  const [backTop, setBackTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setBackTop(true)
      } else {
        setBackTop(false)
      }
    })
  }, [backTop])
  return (
    <>
    {backTop&&
        <div className="back-top" onClick={() => window.scroll({top: 0})}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>}
    </>
  )
}