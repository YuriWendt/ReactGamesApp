import React, { useEffect, useState } from "react";
import { GameList } from "../../Components/GameList/GameList.component"
import { Container, Row, Col } from 'react-bootstrap';

import './Home.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {

    const [games, setGames] = useState([]);


    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=e43fb5aaaf34492b8306969941a04f93')
            .then(response => response.json())
            .then(({ results }) => setGames(results))

    }, []);


    return (
        
        <Container className="Game-Cards">
            {games.map(game => {
                return <GameList key={game.id} game={game} />
            })}
        </Container>
    )
}
