import React, { useEffect } from "react"
import styles from "./Home.module.css"
import TypeIt from "typeit"
import { Col, Container, Row } from "reactstrap"
import me from "../../images/me.jpeg"

const Home = () => {
  useEffect(() => {
    new TypeIt("#head", {
      speed: 50,
      startDelay: 900,
    })
      .type("AJ", { delay: 2000 })
      .delete()
      .type("Aravind Jaimon", { delay: 2000 })
      .go()
    new TypeIt("#subhead", {
      speed: 40,
      startDelay: 5000,
      loop: true,
    })
      .type("Developer", { delay: 3000 })
      .delete()
      .type("Photographer", { delay: 3000 })
      .go()
  })
  return (
    <div className={`${styles.main} center`}>
      <Container>
        <Row>
          <Col className={styles.vcenter} md={8}>
            <h1 className={`${styles.head}`}>
              Hai it's Me, <span className={styles.name} id="head"></span>
            </h1>
            <h2>
              I am a <span className={styles.subhead} id="subhead"></span>
            </h2>
          </Col>
          <Col className={`center`} md={4}>
            <img className={styles.me} src={me} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
