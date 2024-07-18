import { Container } from "./index";
import "../scss/components/hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="plan">
          <div className="row provision">
            <p>Hello! I'm <span>Dhieb Rouissi,</span></p>
            <p>Full Stack Development</p>
          </div>
          <div className="row">Scroll For More
            <button>
              <a href="#About">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 13L12 16M12 16L15 13M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </button>
          </div>
        </div>
        <div className="plan">
          <img loading="lazy" src={require("../static/image/dev.png")} alt="dev" />
        </div>
      </Container>
    </section>
  )
};