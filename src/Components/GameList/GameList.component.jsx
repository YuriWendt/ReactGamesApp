import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { AiOutlineMenu } from "react-icons/ai";
import './GameList.styles.css'

export function GameList({ game }) {
    
    return (

        <Card className="gamelist" style={{ width: '18rem' }}>
            <Card.Img className="poster" variant="top" src={game.background_image} />
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>
                    {game.genres.map(i => i.name).join(' | ')}
                </Card.Text>
                <Link to={{
                        pathname: `/game/${game.name}`,
                        gameProps: {
                            game: game
                        }
                    }}>
                        <Button className="btn-detail"><AiOutlineMenu/> Detail</Button>
                        
                    </Link>
            </Card.Body>
        </Card>
    )
}