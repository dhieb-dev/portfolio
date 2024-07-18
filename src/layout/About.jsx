import { Container, OverlayBottom, OverlayTop, HeadingSection, Paraghraph, Title } from "../components/index";
import "../scss/layout/about.scss";

export default function About() {
  return (
    <section id="About" className="about">
      <OverlayTop />
      <div className="top-about">
      </div>
      <Container>
        <HeadingSection title="About" />
        <Title>A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.</Title>
        <div className="content-about">
          <div className="plan">
            <Title>Who am I ?</Title>
            <Paraghraph>
              My name is Dhieb Rouissi and I am from Tunisia aged 27. I liked the idea of being a web developer and since then I want to get to the top of this specialty bikes
            </Paraghraph>
          </div>
          <div className="row">
            <div className="plan">
              <div className="box">
                <Title>Who is the Web Developer?</Title>
                <Paraghraph>The web developer is a specialist in IT software that programming for Web or Web application. The website consists of 3 levels. Based on the size of the team and development model, the web developer may work at one level or all three levels. The web developer that works on the logic and data layer on the spine of any web site.</Paraghraph>
                <br />
                <Paraghraph>Web development en compasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.</Paraghraph>
              </div><br />
              <div className="box">
                <Title>Importance of developing the time:</Title>
                <ul>
                  <li>
                    1. Strengthening digital precise:
                    <span>an advanced and effective Web site enhances your presence on the Internet and easy access to your products or services.</span>
                  </li>
                  <li>
                    2. Expected user experience:
                    <span>Web site is designed and well-used use increases customer satisfaction and encourages them to interact with your brand.</span>
                  </li>
                  <li>
                    3. Improved performance:
                    <span>a fast and stable Web site attracts more visitors and increases conversion rates.</span>
                  </li>
                  <li>
                    4. Integration with modern techniques:
                    <span>Continuous development allows you to take advantage of the latest technologies and tools to improve your site and functions.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan avatar">
              <img loading="lazy" src={require("../static/image/admin.png")} alt="admin" />
            </div>
          </div>
        </div>
      </Container>
      <OverlayBottom />
    </section>
  )
};