import { Container, Row } from "react-bootstrap";
import MoviesList from "./MoviesList";

const Home = () => (
    <Container fluid>
        <Row>
            <h3>Star Wars</h3>
        </Row>
        <MoviesList movieSearch="star%20wars" />
        <Row>
            <h3>Harry Potter</h3>
        </Row>
        <MoviesList movieSearch="harry%20potter" />
        <Row>
            <h3>Avengers</h3>
        </Row>
        <MoviesList movieSearch="avengers" />
    </Container>
);

export default Home;
