import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink,
} from "reactstrap"
import logo from "../../images/logo.png"
import styles from "./NavBar.module.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={styles.main}>
      <Navbar className={styles.nav} light expand="md">
        <NavbarBrand href="/">
          <img className={styles.logo} src={logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="mr-auto"></div>
          <Nav navbar>
            <NavItem>
              <NavLink href="/#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
