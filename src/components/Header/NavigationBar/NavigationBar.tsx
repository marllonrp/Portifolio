import { Navbar, Nav } from "react-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-scroll";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const Navigationbar = () => {
  const { InitialState }: any = useContext(GlobalContext);
  const { constantes } = InitialState;
  const { darkMode } = constantes;

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="transparent"
      variant={darkMode ? "dark" : "light"}
    >
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink eventKey={"1"} as={Link} to="home">
            Home
          </NavLink>
          <NavLink eventKey={"2"} as={Link} to="aboutMe">
            About Me
          </NavLink>
          <NavLink eventKey={"3"} as={Link} to="skills">
            Skills
          </NavLink>
          <NavLink eventKey={"4"} as={Link} to="projects">
            Projects
          </NavLink>
          <NavLink eventKey={"5"} as={Link} to="contact">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
