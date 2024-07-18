import { Box, Container, HeadingSection, Paraghraph, Title } from "../components/index";
import "../scss/layout/skills.scss";
const skills = [
  { skill: "Html", type: "Front-end", pathImg: "Html.png", info: "HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links , quotes, and other items." },
  { skill: "Css", type: "Front-end", pathImg: "Css.png", info: "CSS is designed to enable the separation of content and presentation , including layout , colors , and fonts ." },
  { skill: "Bootstrap", type: "Front-end", pathImg: "Bootstrap.png", info: "Bootstrap (formerly Twitter Bootstrap) is a free and open-source CSS framework directed at responsive, mobile-first front-end web development." },
  { skill: "Tailwindcss", type: "Front-end", pathImg: "Tailwindcss.png", info: "Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables" },
  { skill: "JavaScript", type: "Front-end", pathImg: "JavaScript.png", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellat, quos delectus eum velit autem?" },
  { skill: "React", type: "Front-end", pathImg: "React.js.png", info: "React can be used to develop single-page , mobile, or server-rendered applications with frameworks like Next.js ." },
  { skill: "Node.js", type: "Back-end", pathImg: "Node.js.png", info: "Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser." },
  { skill: "Exress.js", type: "Back-end", pathImg: "Express.js.png", info: "Express.js , or simply Express , is a back end web application framework for building REST ful APIs with Node.js , released as free and open-source software under the MIT License." },
];
export default function Header() {
  return (
    <section id="Skills" className="skills">
      <Container>
        <HeadingSection title="Skills" />
        <Title>To build a full web site you must have the necessary technologies to complete the project</Title>
        <div className="content-skills">
          <div className="row">
            {skills?.map(({ skill, type, pathImg, info }) => {
              return (
                <Box key={skill}>
                  <div className="type">
                    {type}
                  </div>
                  <div className="body">
                    <img loading="lazy" src={require(`../static/image/${pathImg}`)} alt={skill} />
                    <Paraghraph name="info">{info}</Paraghraph>
                  </div>
                  <div className="footer">
                    <h3>{skill}</h3>
                    <a href="xxx">More...</a>
                  </div>
                </Box>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
};