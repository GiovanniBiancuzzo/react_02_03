import { Accordion, Button, Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Movie = (props) => {
    const navigate = useNavigate();
    //prop si chiama movieItem
    return (
        <Accordion defaultActiveKey="1">
            <Figure>
                <Accordion.Toggle eventKey="0">
                    <Figure.Image
                        width={171}
                        height={180}
                        alt={props.movieItem.imdbID}
                        src={props.movieItem.Poster}
                    />
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                    <Figure.Caption>
                        <h5>{props.movieItem.Title}</h5>
                        <Button
                            onClick={() => {
                                console.log(
                                    "viaggio verso il moivedetails specifico attraverso useNavigate"
                                );
                                navigate(
                                    `/moviedetails/${props.movieItem.imdbID}`
                                );
                            }}
                        >
                            Vai ai dettagli del film
                        </Button>
                    </Figure.Caption>
                </Accordion.Collapse>
            </Figure>
        </Accordion>
    );
};

export default Movie;
