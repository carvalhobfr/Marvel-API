import { useEffect, useState } from "react";
import { CharactersCards } from "../../components/CharactersCards";
import { SearchCharacter } from "../../components/SearchCharacter";
import { Container , Nav} from "./styles";

import api from "../../services/api";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Loading } from "../../components/Loading";

export function Home() {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [nameSearch, setNameSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    renderCharacters();
  }, []);
  
  function renderCharacters(): void {
    setLoading(true);
    api.get(`characters?`)
      .then(result => {
        setCharacters(result.data.data.results);
        setNumberOfPages(Math.ceil(result.data.data.total / 12));
        setLoading(false);
      });
  };

  function searchCharacters(value: string): void {
    setLoading(true);

    api.get(`characters?nameStartsWith=${value}`)
      .then(result => {
        setNameSearch(value);
        setCharacters(result.data.data.results);
        setNumberOfPages(Math.ceil(result.data.data.total / 12));
        setLoading(false);
      });
  };


  function searchPageCharacters(page: number): void {
    setLoading(true);

    api.get(`characters?${nameSearch !== '' ? `nameStartsWith=${nameSearch}` : ''}&offset=${page * 12 - 12}`)
      .then(result => {
        setCharacters(result.data.data.results);
        setNumberOfPages(Math.ceil(result.data.data.total / 12));
        setLoading(false);
      });
  };

  return (
    <>
      <Header />

      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <SearchCharacter onSearchCharacter={searchCharacters} />

            {characters.length === 0 ? (
              <>

              <h2>Character <strong>{nameSearch}</strong> not found</h2>
              <Nav>
                <a href="/">
                  ← home  
                </a>
              </Nav>
              </>
            ) : (
              <CharactersCards characters={characters} />
            )}
          </>
        )}
      </Container>

      <Pagination
        numberOfPages={numberOfPages}
        changePage={searchPageCharacters}
        characterName={nameSearch}
      />
    </>
  );
}