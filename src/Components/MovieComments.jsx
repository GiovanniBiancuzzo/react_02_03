import { Badge, ListGroup } from "react-bootstrap";

const MovieComments = (props) => {
    return (
        <ListGroup.Item>
            <Badge variant="success">{props.comment.Value}</Badge> -{" "}
            {props.comment.Source}
        </ListGroup.Item>
    );
};

export default MovieComments;
