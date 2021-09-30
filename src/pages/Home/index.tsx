import { useEffect, useState } from "react";
import { CharactersCards } from "../../components/CharactersCards";
import { SearchCharacter } from "../../components/SearchCharacter";
import { Container } from "./styles";

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

    api.get(`characters?`)
      .then(result => {
        setCharacters(result.data.data.results);
        console.log("characters1", characters)
        setNumberOfPages(Math.ceil(result.data.data.total / 12));
        setLoading(false);
      });
  }, []);

  function searchCharacters(value: string): void {
    setLoading(true);
    console.log("characters2", characters)
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

    api.get(`characters?${nameSearch !== '' ? `nameStartsWith=${nameSearch}` : ''}&offset=${page * 10 - 10}`)
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
              <h2>We didn't find any character name: <strong>{nameSearch}</strong></h2>
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