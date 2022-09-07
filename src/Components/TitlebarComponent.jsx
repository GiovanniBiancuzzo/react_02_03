import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";

const TitlebarComponent = (props) => (
    <Navbar variant="dark">
        <Navbar.Brand>TV Shows</Navbar.Brand>
        <Nav className="mr-auto">
            <NavDropdown title="Genres" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#comedy">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#drama">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#thriller">Thriller</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link>
                <FontAwesomeIcon icon={faThLarge} />
            </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faTh} />
            </Nav.Link>
        </Nav>
    </Navbar>
);

export default TitlebarComponent;
