import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieComments from "./MovieComments";
import MoviePoster from "./MoviePoster";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const params = useParams();

    const fetchMovie = () => {
        console.log("Ottenimento del film");
        fetch(`http://www.omdbapi.com/?apikey=9570e6e6&i=${params.movieId}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => console.log("Qualcosa è andato storto", error));
    };

    useEffect(() => {
        console.log("didmount del singolo film");
        fetchMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            {movie ? (
                <Row>
                    <Col>
                        <MoviePoster movie={movie} />
                    </Col>
                    <Col>
                        <ListGroup>
                            {movie.Ratings.map((comment, index) => (
                                <MovieComments comment={comment} key={index} />
                            ))}
                        </ListGroup>
                    </Col>{" "}
                </Row>
            ) : (
                <div>
                    <Spinner animation="border" variant="danger" />{" "}
                    <h2>Caricamento film</h2>
                </div>
            )}
        </Container>
    );
};

export default MovieDetails;
