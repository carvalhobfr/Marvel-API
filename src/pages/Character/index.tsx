import { useEffect, useState } from "react";
import {
  Container,
  Content,
  ContentHeader,
  ContainerMidia,
  MidiaBox,
  Nav
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

  const [loading, setLoading] = useState(false);

  const { id }: ParamsProps = useParams();

  useEffect(() => {
    setLoading(true);
    api.get(`characters?id=${id}`).then(result => {
      setCharacterData(result.data.data.results[0]);
      setLoading(false);
    });

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

  return (
    <>
      <Header />

      <Container>
        {loading && (
          <Loading />
        )}
        <Content>
        <Nav>
          <Link to="/">
            ← home
          </Link>
        </Nav>
          <ContentHeader>
            <img
              src={`${characterData?.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${characterData?.thumbnail.extension}`}
              alt={characterData?.name}
            />

            <div>
              <h1>{characterData?.name}</h1>
              <p>{characterData?.description}</p>
            </div>
          </ContentHeader>

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

        <Nav>
          <Link to="/">
            Home
          </Link>
        </Nav>
      </Container>
    </>
  );
}