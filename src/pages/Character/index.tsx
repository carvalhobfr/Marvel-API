import { FormEvent,useEffect, useState } from "react";
import {
  Container,
  Content,
  CharacterInfo,
  ContainerMidia,
  MidiaBox,
  Nav,
  InputEdit,
  EditButton
} from "./styles";

import api from "../../services/api";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

interface CharacterData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Serie {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Event {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface ParamsProps {
  id: string;
}

export function Character() {
  const [characterData, setCharacterData] = useState<CharacterData>();
  const [comics, setComics] = useState<Comic[]>();
  const [series, setSeries] = useState<Serie[]>();
  const [events, setEvents] = useState<Event[]>();
  const [charName, setCharName] = useState("");
  const [charImage, setCharImage] = useState("");
  const [isToggled, setToggled] = useState(false);

  const [loading, setLoading] = useState(false);

  const { id }: ParamsProps = useParams();
  const toggleTrueFalse = () => setToggled(!isToggled);
  const localStorageCharacter =  localStorage.getItem('charactersLocal') as  string

  const charById = JSON.parse(localStorageCharacter).filter((x: { id: number; }) => x.id === parseInt(`${id}`))[0]

  useEffect(() => {
    setLoading(true);
    setCharacterData(charById);
    setCharName(charById.name)
    if (charById.imageUrl !== "" && charById.imageUrl !== undefined && charById.imageUrl !== "undefined/portrait_uncanny.undefined") {
      setCharImage(charById.imageUrl)
    } else {
      setCharImage(`${charById.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${charById.thumbnail.extension}`)
    }
    setLoading(false);
    api.get(`characters/${id}/comics`).then(result => {
      setComics(result.data.data.results);
    });

    api.get(`characters/${id}/series`).then(result => {
      setSeries(result.data.data.results);
    });


    api.get(`characters/${id}/events`).then(result => {
      setEvents(result.data.data.results);
    });

  }, [id]);

  useEffect(() => {
    charById.name = charName
    let oldLocalObject = JSON.parse(localStorageCharacter)
    let newNameObject = [charById]
    let newLocalObject= oldLocalObject.map((obj: { id: number; }) => newNameObject.find((o: { id: number; }) => o.id === obj.id) || obj)
    localStorage.setItem("charactersLocal", JSON.stringify(newLocalObject))
  }, [charName]);

  useEffect(() => {
    charById.imageUrl = charImage
    let oldLocalObjectImage = JSON.parse(localStorageCharacter)
    let newNameObjectImage = [charById]
    let newLocalObjectImage= oldLocalObjectImage.map((obj: { id: number; }) => newNameObjectImage.find((o: { id: number; }) => o.id === obj.id) || obj)
    localStorage.setItem("charactersLocal", JSON.stringify(newLocalObjectImage))
  }, [charImage]);


  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <Container>
        {loading && (
          <Loading />
        )}
        <Content>
          <CharacterInfo>
          <Nav>
            <Link to="/">
              ← home  
            </Link>
          </Nav>
            <img
              src={charImage}
              alt={characterData?.name}
            />
            <div>
              <h1>{charName}</h1>
      
        <EditButton onClick={toggleTrueFalse}>
          Edit
        </EditButton>
        { isToggled ?
        <>
            <InputEdit onSubmit={handleSubmit}>
        <label htmlFor="edit value">
          <div>
            <input
              type="text"
              id="changeName"
              placeholder="Change character name"
              onChange={e => {
                setCharName(e.target.value);
              }}
            />
          </div>
        </label>
      </InputEdit>
      <InputEdit onSubmit={handleSubmit}>
        <label htmlFor="edit value">
          <div>
            <input
              type="text"
              id="changePhoto"
              placeholder="Change character photo(url)"
              onChange={e => {
                setCharImage(e.target.value);
              }}
            />
          </div>
        </label>
      </InputEdit>
         </>  :   <></>
      }
  <p>{characterData?.description}</p>
            </div>
          </CharacterInfo>

          <h2>Comics</h2>
          <ContainerMidia>
            {comics?.map(comic => (
              <MidiaBox key={comic.id}>
                <header>
                  <img
                    src={`${comic.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                </header>

                <div>
                  <h3>
                    {comic.title}
                  </h3>

                  <p>
                    {comic.description}
                  </p>
                </div>
              </MidiaBox>
            ))}
          </ContainerMidia>

          {series && series.length > 0 && (
            <h2>Series</h2>
          )}
          <ContainerMidia>
            {series?.map(serie => (
              <MidiaBox key={serie.id}>
                <header>
                  <img
                    src={`${serie.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${serie.thumbnail.extension}`}
                    alt={serie.title}
                  />
                </header>

                <div>
                  <h3>
                    {serie.title}
                  </h3>

                  <p>
                    {serie.description}
                  </p>
                </div>
              </MidiaBox>
            ))}
          </ContainerMidia>

          {events && events.length > 0 && (
            <h2>Events</h2>
          )}
          <ContainerMidia>
            {events?.map(event => (
              <MidiaBox key={event.id}>
                <header>
                  <img
                    src={`${event.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${event.thumbnail.extension}`}
                    alt={event.title}
                  />
                </header>

                <div>
                  <h3>
                    {event.title}
                  </h3>

                  <p>
                    {event.description}
                  </p>
                </div>
              </MidiaBox>
            ))}
          </ContainerMidia>
        </Content>
      </Container>
    </>
  );
}