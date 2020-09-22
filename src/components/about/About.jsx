import React from "react"
import { Container } from "reactstrap"
import styles from "./About.module.css"

const About = () => {
  return (
    <div id="about" className={styles.main}>
      <Container>
        <h2 className={styles.head}>About Me</h2>
        <p className={styles.para}>
          Love to talk in the language of JavaScript.{" "}
          <span className={styles.white}>3 Years</span> of experience in{" "}
          <span className={styles.white}>Web Development</span>. Love to code
          all night long. Google is My Best Friend. Stackoverflow is my mentor.
          React my favourite Framework
        </p>
      </Container>
    </div>
  )
}

export default About
