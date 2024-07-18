import { useState } from "react";
import { Box, Container, OverlayBottom, OverlayTop, HeadingSection, Title } from "../components/index";
import "../scss/layout/services.scss";

const services = [
  { service: "Frontend Development", pathImg: "frontend", article: "Brainvire excels in creating intuitive and responsive user interfaces, ensuring a seamless and engaging user experience. Our frontend development focuses on the latest technologies and languages, such as Mocha, HTML, Angular.js, Vue.js, Node.js, React.js, JavaScript, Bootstrap, CSS/SCSS, UI/UX, SPA, PWA development, and more." },
  { service: "Backend Development", pathImg: "backend", article: "Our backend development expertise ensures robust server-side logic and database management. We create scalable and efficient solutions that power your applications’ functionality with security, stability, and high speed. Our Full-Stack Developers use programming languages like Python, Java, PHP, ASP.NET, Node.js, and Laravel to deliver results." },
  { service: "Full-Stack Development", pathImg: "fullstack", article: "Full-stack development involves both front-end and backend development. Therefore, full-stack developers possess a broad skill set that allows them to handle all layers of web application development. They are proficient in multiple programming languages, frameworks, and technologies required to build end-to-end web solutions." },
  { service: "Responsive Web Development", pathImg: "responsive", article: "Responsive web development services yield websites that adapt and provide an optimal viewing experience across a variety of devices and screen sizes. This web solution utilizes flexible grids, media queries, and other techniques to ensure a consistent and user-friendly experience across different platforms." },
  { service: "API Development", pathImg: "api", article: "Brainvire excels in creating robust APIs that facilitate seamless communication between different software systems. Our API development ensures efficiency, scalability, and secure data transfer, enabling smooth integration with third-party services." },
  { service: "Database Development", pathImg: "database", article: "Brainvire designs and optimizes databases for high performance, security, and scalability. Our database development ensures seamless data management for your applications, with expertise in varied database technologies like PostgreSQL, MySQL, and QL. We help you choose what best suits your requirements." },
  { service: "Mobile App Development", pathImg: "mobile-dev", article: "Brainvire prioritizes user-centric design, ensuring a delightful and intuitive experience. Our UI/UX development focuses on creating visually appealing interfaces that enhance user engagement and satisfaction. Our experts are well-versed in developing UI/UX for all Full Stack App Development and web development across various industries and platforms." },
  { service: "Progressive Web App (PWA) Development", pathImg: "pwa", article: "Brainvire specializes in Progressive Web App (PWA) development, delivering fast, engaging, and reliable web applications that work seamlessly across devices. We enhance user experiences with offline capabilities, push notifications, and rapid loading times." },
];

export default function Services() {
  const [visibleArticles, setVisibleArticles] = useState(
    services.reduce((acc, service) => {
      acc[service.service] = false;
      return acc;
    }, {})
  );
  
  const toggleVisibility = (service) => {
    setVisibleArticles((prevVisibleArticles) => ({
      ...prevVisibleArticles,
      [service]: !prevVisibleArticles[service],
    }));
  };
  return (
    <section id="Services" className="services">
      <OverlayTop />
      <Container>
        <HeadingSection title="Services" />
        <Title>To build a full web site you must have the necessary technologies to complete the project</Title>
        <div className="content">
          {services.map(({ pathImg, service, article }) => (
            <Box key={service}>
              <div className="col">
                <div className="head">
                  <div className="img">
                    <img loading="lazy" src={require(`../static/image/${pathImg}.png`)} alt={service} />
                  </div>
                  <h3 className="service">{service}</h3>
                  <button onClick={() => toggleVisibility(service)} className={visibleArticles[service] ? "less" : "more"}>
                    <span></span>
                    <span></span>
                  </button>
                </div>
                {visibleArticles[service] && (
                  <div className="body">
                    <article>{article}</article>
                  </div>
                )}
              </div>
            </Box>
          ))}
        </div>
      </Container>
      <OverlayBottom />
    </section>
  );
}
