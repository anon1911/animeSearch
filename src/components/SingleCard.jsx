import './SingleCard.css';
import {useState} from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function SingleCard({ anime }) {
    const [flip, setFlip] = useState(false);

    return (
        <Card className='CardComp' border='light' bg={!flip ? "light" : "secondary"} text={!flip ? "dark" : "white"}  >
            {!flip &&
            <div className='front' onClick={() => setFlip(oldFlip => !oldFlip)}>
                <Card.Img variant="top" src={anime.images.webp.image_url} className='CardImgComp'/>
                <Card.Body className='CardBodyComp overflow'>
                    <Card.Text className='CardTxtComp'>{anime.title_english ? anime.title_english : anime.title}</Card.Text>
                    <Card.Text className='CardTxtComp CardTxtCompJap'>{anime.title_japanese}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='listGroupItemComp' variant={anime.score 
                                                                                    ? anime.score < 4 
                                                                                        ? 'danger' 
                                                                                        : anime.score < 8 
                                                                                            ? 'warning' 
                                                                                            : 'success'
                                                                                    : 'light'}>
                            <p>score</p> <p>{anime.score}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='listGroupItemComp' variant='secondary'>
                            <p>episodes</p> <p>{anime.episodes}</p>
                        </ListGroup.Item>                
                    </ListGroup>
                </Card.Footer>
            </div>}

            {flip && 
            <div onClick={() => setFlip(oldFlip => !oldFlip)}>
                <Card.Img variant="top" src={anime.images.webp.image_url} className='CardImgComp'/>
                <Card.Body className='CardBodyComp overflow'>
                    <Card.Text className='CardTxtComp'>{(anime.synopsis == null || anime.synopsis.lenght == 0) ? 'No synopsis found' : anime.synopsis}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='listGroupItemComp' variant='dark'>
                            <p>year</p> <p>{(anime.year == null || anime.year.lenght == 0) ? '---' : anime.year}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='listGroupItemComp overflow' variant='info'>
                                {anime.url ? <a href={anime.url} target='_blank'>My Anime List</a> : '---'}
                        </ListGroup.Item>                
                    </ListGroup>
                </Card.Footer>
            </div>}
            
        </Card>
    )
}

export default SingleCard