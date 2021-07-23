import { Button, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AiOutlineRollback } from "react-icons/ai";

import './GameDetail.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GameDetail = (props) => {

    const { game } = props.location.gameProps

    return (
        <>
        <Link to="/">
                <Button className="btn-back"><AiOutlineRollback /> Back</Button>
            </Link>
        <Container>
            
            <Row>
                <Col className="game-detail">
                    <h1>{game.name}</h1>
                    <h3>Released: {game.released}</h3>
                    <h3>Rating: {game.rating}</h3>
                    <h3>Genre(s):</h3>
                    {
                        game.genres.map(g => `${g.name} | `)
                    }

                    <h3>Platform(s):</h3>
                    {
                        game.platforms.map(p => `${p.platform.name} | `)
                    }
                </Col>
            </Row>
            <Row>
                <ListGroup>

                    <Col>
                        {
                            game.short_screenshots.map(ss => <Image className="posters" src={ss.image} alt='screenshot' fluid />)
                        }
                    </Col>
                </ListGroup>
            </Row>
        </Container>
        </>
    );
}

