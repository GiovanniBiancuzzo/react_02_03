import { Form, FormControl, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
    const location = useLocation();

    return (
        <Navbar
            collapseOnSelect
            expand="md"
            className="navbar navbar-expand-lg navbar-dark"
        >
            <Link to="/">
                <Navbar.Brand>
                    <img
                        src="/public/logo.png"
                        width="100px"
                        height="50px"
                        className="d-inline-block align-top"
                        alt="Netflix logo"
                    />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link
                        to="/"
                        className={`nav-link +
                            ${location.pathname === "/new" ? " active" : ""}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/tvshows"
                        className={`nav-link +
                            ${location.pathname === "/new" ? " active" : ""}`}
                    >
                        Tv Shows
                    </Link>
                    <Link
                        to="/movies"
                        className={`nav-link +
                            ${location.pathname === "/new" ? " active" : ""}`}
                    >
                        Movies
                    </Link>
                    <Link
                        to="/recentlyAdded"
                        className={`nav-link +
                            ${location.pathname === "/new" ? " active" : ""}`}
                    >
                        Recently Added
                    </Link>
                    <Link
                        to="/myList"
                        className={`nav-link +
                            ${location.pathname === "/new" ? " active" : ""}`}
                    >
                        My List
                    </Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#search">
                        <FontAwesomeIcon icon={faSearch} />
                    </Nav.Link>
                    <NavDropdown title="Cerca" id="collasible-nav-dropdown">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                        </Form>
                    </NavDropdown>
                    <Nav.Link href="#kids" id="kids">
                        KIDS
                    </Nav.Link>
                    <Nav.Link href="#notifications">
                        <FontAwesomeIcon icon={faBell} />
                    </Nav.Link>
                    <Nav.Link href="#profile">
                        <FontAwesomeIcon icon={faUser} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
