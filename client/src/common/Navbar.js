import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const currentPage = useLocation();
  const getClassName = (pagePath) =>
    `${currentPage.pathname === pagePath ? "active" : ""} nav-link`;
  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav variant="pills">
        <Nav.Link href="/students" bsPrefix={getClassName("/students")}>
          Students
        </Nav.Link>
        <Nav.Link href="/courses" bsPrefix={getClassName("/courses")}>
          Courses
        </Nav.Link>
        <Nav.Link
          href="/add-new-result"
          bsPrefix={getClassName("/add-new-result")}
        >
          Add New Result
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
