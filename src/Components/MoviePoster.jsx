import { Figure } from "react-bootstrap";

const MoviePoster = (props) => {
    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt={props.movie.Title}
                src={props.movie.Poster}
            />
            <Figure.Caption>
                <h3>Title: {props.movie.Title}</h3>
                <h5>Year: {props.movie.Year}</h5>
                <h5>Genre: {props.movie.Genre}</h5>
                <h5>Plot: {props.movie.Plot}</h5>
            </Figure.Caption>
        </Figure>
    );
};

export default MoviePoster;
