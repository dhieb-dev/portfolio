import { useEffect, useRef, useState } from "react";
import { Container, Logo } from "./index";
import "../scss/components/navbar.scss";

const navList = [
  {
    name: "Home", svg:
      <svg fill="#000000" version="1.1" viewBox="0 0 495.398 495.398">
        <g>
          <g>
            <g>
              <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" />
              <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" />
            </g>
          </g>
        </g>
      </svg>
  },
  {
    name: "About", svg:
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
        <g>
          <g>
            <path fill="#000000" d="M218.9,180.1c-10.5-13.5-23.2-22.2-41.4-27.2l-17,58.7c0,5.4-4.5,9.8-10,9.8s-10-4.4-10-9.8v-46.7c0-6.8-5.6-12.3-12.5-12.3c-6.9,0-12.5,5.5-12.5,12.3v46.7c0,5.4-4.5,9.8-10,9.8c-5.5,0-10-4.4-10-9.8l-17-58.7c-18.2,5-30.9,13.7-41.4,27.2c-4.1,5.3-6.4,16-6.6,21.7v24.6c0,10.9,8.9,19.7,20,19.7h154.9c11,0,20-8.8,20-19.7v-24.6C225.3,196.1,223.1,185.4,218.9,180.1L218.9,180.1z M128,132.9c33.7,0,52.5-42.2,52.5-70.9c0-28.7-23.5-52-52.5-52c-29,0-52.5,23.3-52.5,52C75.5,90.7,93.7,132.9,128,132.9L128,132.9z" />
          </g>
        </g>
      </svg>
  },
  {
    name: "Skills", svg:
      <svg fill="#000000" version="1.1" viewBox="0 0 232.688 232.688">
        <g id="XMLID_350_">
          <g id="XMLID_351_">
            <path id="XMLID_352_" d="M97.688,61.344h120c8.284,0,15-6.716,15-15s-6.716-15-15-15h-120c-8.284,0-15,6.716-15,15
          S89.403,61.344,97.688,61.344z"/>
          </g>
          <g id="XMLID_439_">
            <path id="XMLID_440_" d="M217.688,101.344h-120c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15
          S225.972,101.344,217.688,101.344z"/>
          </g>
          <g id="XMLID_441_">
            <path id="XMLID_443_" d="M217.688,171.344h-120c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15
          C232.688,178.06,225.972,171.344,217.688,171.344z"/>
          </g>
          <g id="XMLID_444_">
            <path id="XMLID_445_" d="M48.785,104.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
          c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
          c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
          c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
          c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5
          c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688
          C53.958,106.797,51.61,104.818,48.785,104.408z"/>
          </g>
          <g id="XMLID_446_">
            <path id="XMLID_447_" d="M48.785,34.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
          c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
          c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
          c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
          c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142,0,7.499-3.358,7.499-7.5c0-0.629-0.077-1.241-0.223-1.825
          l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688C53.958,36.797,51.61,34.818,48.785,34.408z"/>
          </g>
          <g id="XMLID_448_">
            <path id="XMLID_449_" d="M48.785,174.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
          c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
          c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
          c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
          c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5
          c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688
          C53.958,176.797,51.61,174.818,48.785,174.408z"/>
          </g>
        </g>
      </svg>
  },
  {
    name: "Services", svg:
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
        <g>
          <g>
            <g>
              <path fill="#000000" d="M151.7,13.7c-0.3,0.3-1.1,3.9-1.8,8c-0.7,4.1-1.4,7.8-1.6,8.3c-0.3,0.6-1.6,1.2-4.8,2c-2.5,0.6-4.8,1.3-5.2,1.4c-0.5,0.2-2.4-1.7-6.3-6.3c-3-3.6-5.9-6.6-6.3-6.6c-1.2,0-15.4,8.4-15.4,9.1c0,0.3,1.3,4.2,2.9,8.5l2.9,7.9l-4,3.9l-4,3.9l-8-2.9c-4.4-1.6-8.3-2.8-8.6-2.7c-0.9,0.4-8.8,14.4-8.7,15.3c0.1,0.4,1.7,2.2,3.6,3.8c1.9,1.7,4.8,4.1,6.4,5.5l2.9,2.5l-1.3,5.1c-0.7,2.8-1.5,5.3-1.7,5.5c-0.2,0.1-3.9,0.9-8.2,1.7c-4.3,0.7-8.2,1.6-8.5,1.8c-0.5,0.4-0.6,2.9-0.6,9.3v8.8l1.9,0.5c1,0.2,4.8,0.9,8.5,1.6c3.6,0.6,6.8,1.2,7,1.4c0.2,0.2,1,2.7,1.7,5.5l1.3,5.1l-2.9,2.5c-1.6,1.3-4.5,3.8-6.4,5.5c-1.9,1.6-3.5,3.3-3.6,3.8c-0.1,0.4,0.6,2.3,1.6,4l1.8,3.2h3.9c8.3,0,18.4,1.7,27.5,4.5c2.6,0.8,8.8,3.4,13.8,5.8c10.4,5,11.7,5.3,27.3,6.6c13.1,1.1,26.8,3.7,33,6.3c3.8,1.6,8,4.3,10,6.6l1.6,1.8l2-1.1c4.2-2.3,5.2-3,5.2-4.1c0-0.6-1.2-4.5-2.8-8.6l-2.7-7.5l3.9-4l3.9-4l8.2,3c6.4,2.4,8.3,2.9,8.8,2.5c0.9-0.7,8.7-14.4,8.7-15.2c0-0.3-3-3-6.6-6.1c-5.5-4.5-6.6-5.8-6.4-6.5c0.1-0.5,0.8-2.9,1.4-5.3c0.7-2.7,1.4-4.4,1.8-4.5c0.4-0.1,4.2-0.8,8.4-1.6c4.2-0.7,7.9-1.5,8.3-1.8c0.4-0.4,0.6-2.8,0.6-9c0-6.2-0.1-8.6-0.6-9c-0.3-0.2-4.2-1.1-8.6-1.9c-4.4-0.7-8.2-1.5-8.4-1.6c-0.2-0.1-0.9-2.2-1.5-4.5c-0.6-2.3-1.2-4.6-1.4-5.2c-0.2-0.8,0.9-2,6.1-6.3c3.6-3,6.6-5.7,6.7-6c0.2-0.7-7.3-14.5-8.5-15.4c-0.5-0.4-2.6,0.1-8.8,2.4l-8.2,3l-3.9-3.9l-3.9-3.9l2.8-7.6c1.5-4.2,2.7-8.1,2.6-8.7c-0.2-1.4-13.9-9.4-15.3-9c-0.6,0.1-2,1.4-3.1,2.9c-1.1,1.4-3.5,4.2-5.3,6.3l-3.2,3.8l-4.1-1.1c-2.3-0.6-4.7-1.3-5.4-1.4c-1.2-0.2-1.3-0.5-2.6-8.3c-0.7-4.4-1.6-8.4-1.8-8.8c-0.4-0.8-1.4-0.9-9-0.9C154.4,13.1,152.1,13.2,151.7,13.7z M172,59.8c10.9,3.4,19.8,11,24.6,20.9c3.2,6.7,3.9,9.6,3.9,17.7s-0.6,11-3.9,17.7c-4.8,9.9-13.7,17.5-24.6,20.9c-4.9,1.6-14.4,1.9-19.7,0.7c-15.1-3.3-26.8-14.7-30.7-29.7c-1.4-5.2-1.4-14.2,0-19.3c3.9-14.6,15-25.8,29.6-29.5C156.3,57.9,167,58.2,172,59.8z" /><path fill="#000000" d="M13.6,142.3c-0.6,0.1-1.7,0.9-2.4,1.7l-1.2,1.5v35.3c0,25.4,0.1,35.7,0.5,36.6c1.1,2.5,3,2.9,13.5,2.7l9.6-0.1l1.3-1.4l1.4-1.3V181v-36.1l-1.4-1.3l-1.3-1.4l-9.5-0.1C18.9,142.1,14.2,142.1,13.6,142.3z" /><path fill="#000000" d="M78.3,146.9c-9.9,1.1-26.8,4.6-31.9,6.6c-3.6,1.5-3.6,0.9-3.4,28.1c0.1,22.3,0.2,24.1,1,25.3c1.1,1.5,2.8,2.2,7.2,2.6c6.7,0.6,9.9,1.9,37.1,15c20,9.6,33,15.4,38.3,17.3c3,1,4.3,1.2,10.1,1.1c6.9,0,8.5-0.2,33.2-4.1c8.4-1.3,17.4-2.7,19.9-3c8.9-1,10.6-1.8,26.5-12.5c19.6-13.1,23.6-17,23.6-22.9c0-1.6-0.4-2.2-2.4-3.1l-1.6-0.9l1.2-1.3c2.1-2.3,2.9-3.7,2.9-5.4c0-5.5-6.7-9.3-14.4-8c-6.4,1.1-11,3.4-18,9.3c-2,1.7-4.4,3.6-5.5,4.2c-6.8,4.3-20.3,6.8-36.9,6.8c-9.6,0-14.1-0.8-21.4-3.7c-2.7-1.1-6.8-2.8-9.1-3.6c-3.9-1.5-4.1-1.6-2.7-2c3.4-0.9,33.2,0,45.7,1.4c8.6,0.9,10.9,0.8,14-0.9c3-1.6,4.9-3.9,6.8-8.1c2.3-4.8,1.4-8.7-2.8-12.7c-4.6-4.4-22-8.4-43.3-9.9c-11.1-0.8-12-1.1-22.2-5.9c-16.1-7.7-24-9.8-38.5-10.1C86.7,146.5,80.7,146.6,78.3,146.9z" />
            </g>
          </g>
        </g>
      </svg>
  },
  {
    name: "Contact", svg:
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
        <g>
          <g>
            <g>
              <path fill="#000000" d="M21.3,40c-2.2,0.6-6.1,2.9-7.4,4.3c-0.6,0.8-1.7,2.4-2.4,3.7c-1.2,2.2-1.2,2.8-1.4,10L10,65.6l59,30.9l59,31l59-31l59-30.9l-0.1-7.6l-0.1-7.6l-1.6-2.9c-1.8-3.2-3.2-4.6-6.7-6.5l-2.3-1.2l-106.2-0.1C70.5,39.7,22.1,39.8,21.3,40z" /><path fill="#000000" d="M10.1,152.1l0.1,53.6l1.2,2.4c1.8,3.5,3.2,4.9,6.5,6.7l2.9,1.6H128h107.1l2.4-1.2c3.5-1.8,4.9-3.2,6.7-6.5l1.6-2.9l0.1-53.6l0.1-53.6l-4.7,2.5c-10,5.3-94,49.2-98.8,51.7c-6.5,3.2-11.3,4.9-14.4,4.9c-3.1,0-7.9-1.7-14.4-4.9c-4.9-2.5-88.8-46.3-98.8-51.7L10,98.5L10.1,152.1z" />
            </g>
          </g>
        </g>
      </svg>
  },
]
export default function Navbar() {

  const [displayMenubtn, setDisplayMenuBtn] = useState(false)
  const [displayList, setDisplayList] = useState(false)
  const menuRef = useRef()
  
  useEffect(() => {
    const rootElement = document.documentElement
    window.addEventListener("resize", handleDisplay)
    function handleDisplay() {
      if (window.innerWidth < 767) {
        setDisplayMenuBtn(true)
        setDisplayList(false)
      } else {
        setDisplayMenuBtn(false)
        setDisplayList(true)
      }
    }
    handleDisplay()

    document.documentElement.addEventListener("click", (e) => hiddenList(e))
    function hiddenList(click) {
      if (window.innerWidth < 767) {
        if (click.target !== menuRef.current) {
          setDisplayList(false)
        }
      }
    }

    return () => {
      window.removeEventListener("resize", handleDisplay)
      rootElement.removeEventListener("click", (e) => hiddenList(e))
    }
  }, [])
  return (
    <nav className="nav-app">
      <Container>
        <Logo />
        {displayList &&
          <ul className="nav-list">
            {navList.map(({ name, svg }) => {
              return (
                <li key={name} className="item-nav">
                  <a href={"#" + name}>
                    <span>
                      {svg}
                    </span>
                    <span>
                      {name}
                    </span>
                  </a>
                </li>)
            })}
          </ul>}
        {displayMenubtn &&
          <div ref={menuRef} className="menu-nav" onClick={() => setDisplayList(!displayList)}>
            <span></span>
            <span></span>
            <span></span>
          </div>}
      </Container>
    </nav>
  )
};