import { Box, Container, HeadingSection, Title, Map } from "../components";
import "../scss/layout/contact.scss";
export default function Contact() {
  return (
    <section id="Contact" className="contact">
      <Container>
        <HeadingSection title="Contact" />
        <Title>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia soluta magnam quasi dolorem placeat.</Title>
        <div className="content">
          <Box>
            <form>
              <Title>Contact Me</Title>
              <div className="first-name">
                <label htmlFor="fName">First Name</label>
                <input id="fName" type="text" />
              </div>
              <div className="last-name">
                <label htmlFor="lName">Last Name</label>
                <input id="lName" type="text" />
              </div>
              <div className="phone">
                <label htmlFor="num">Number Phone</label>
                <input id="num" type="number" />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" />
              </div>
              <div className="message">
                <label htmlFor="msg">Message</label>
                <textarea id="msg"></textarea>
              </div>
              <button type="submit" >Send</button>
            </form>
          </Box>
          <div className="box-map">
            <Title>Map</Title>
            <Map />
          </div>
        </div>
      </Container>
    </section>
  )
}