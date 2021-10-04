import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import { Container } from "./styles";


interface Character {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface CharactersCardsProps {
  characters: Character[];
}

export function CharactersCards({ characters }: CharactersCardsProps) {    
  return (
    <Container>
      <ul>
          {characters.map(character => (
          <li key={character.id}>
            <Card>
                <Link to={`character/${character.id}`}>
                  <CardImg top width="100%" src={character.imageUrl || `${character.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${character.thumbnail.extension}` } />
                </Link>
              <CardBody>
                <CardTitle tag="h5">             
                  <Link to={`character/${character.id}`}>
                        <strong> 
                          {character.name}
                          </strong>
                  </Link>
                </CardTitle>
                <CardText>
                  <Link to={`character/${character.id}`}>
                  {character.description}
                  </Link>
                </CardText> 
              </CardBody>
            </Card>
          </li> 
                ))}
      </ul>
    </Container>
  );
}