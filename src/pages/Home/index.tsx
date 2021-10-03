import { useEffect, useState } from "react";
import { CharactersCards } from "../../components/CharactersCards";
import { SearchCharacter } from "../../components/SearchCharacter";
import { Container , Nav} from "./styles";

import api from "../../services/api";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Loading } from "../../components/Loading";

export function Home() {
  let [numberOfPages, setNumberOfPages] = useState(0);
  let [charLocalList, setCharLocalList] = useState<any[]>([]);
  let [characters, setCharacters ] = useState<any[]>([]);
  const [nameSearch, setNameSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    renderCharactersList()
  }, []);

    async function totalOfPages() {
      await api.get(`characters`)
          .then(result => {
          numberOfPages = (Math.ceil(result.data.data.total / 15))
          setCharacters(result.data.data.results.slice(0,15))
          localStorage.setItem("numberOfPages", JSON.stringify(numberOfPages))
        });
        setLoading(false)
        return numberOfPages;
    }

//função para pegar dados da api:
  async function renderCharactersList() {
    if (localStorage.getItem('charactersLocal') && localStorage.getItem('numberOfPages')) {
      const localStorageCharacter =  localStorage.getItem('charactersLocal') as  string
      const localNumberOfPages =  localStorage.getItem('numberOfPages') as  string

      let numberOfPagesLocal = parseInt(localNumberOfPages)
      let charJsonLocalList = JSON.parse(localStorageCharacter)
      setCharLocalList(charJsonLocalList);
      setNumberOfPages(numberOfPagesLocal)
      setCharacters(charJsonLocalList.slice(0,15))
    } else {
      await totalOfPages();
      let charApi:any[] = []
      console.log("numberOfPages222", numberOfPages)
      for (let i = 1; i <= Math.ceil(numberOfPages/10); i++) {
        await api.get(`characters?offset=${i*100}`)
          // eslint-disable-next-line no-loop-func
          .then(result => {
          charApi = charApi.concat(result.data.data.results);
          console.log(i);
        });
      }
      await setCharLocalList(charApi)
      console.log("charApi",charApi)
      localStorage.setItem("charactersLocal", JSON.stringify(charApi))
    }
    setLoading(false) 
  };

    //  async function renderAllCharacters() {
    //    let charApi:any[] = []
    //    await totalOfPages();
    //    console.log("numberOfPages222", numberOfPages)
    //   for (let i = 1; i <= numberOfPages; i++) {
    //     await api.get(`characters?offset=${i*100}`)
    //       // eslint-disable-next-line no-loop-func
    //       .then(result => {
    //       charApi = charApi.concat(result.data.data.results);
    //     });
    //   }
    //   setCharacters(charApi.slice(0,15)) 
    //   setCharLocalList(charApi)
    //   console.log("charApi", charApi)
     
    // }



  async function searchCharacters(characterName: string) { 
    setNameSearch(characterName);
    setLoading(true);
    const asArray = await Object.entries(charLocalList);  
    const arrayValue = asArray.map(([key, value]) =>  value)
    const filtered = await arrayValue.filter(value => value.name.toLowerCase().includes
    (characterName.toLowerCase()))
    await setCharacters(filtered);
    setNumberOfPages(Math.ceil(filtered.length / 15));
    setLoading(false);
  };


 async function searchPageCharacters(page: number){
     if (nameSearch !== "") {
       searchCharacters(nameSearch)
     } else {
       await setCharacters(charLocalList.slice((page-1)*15, page*15)) 
       setLoading(false)
     }
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
                  back to home  
                </a>
              </Nav>
              </>
            ) : (
              <CharactersCards characters={characters} />
            )}
          </>
        )}
      </Container>
          {numberOfPages === 0 ? (
        <Pagination
        numberOfPages={1}
        changePage={searchPageCharacters}
        characterName={nameSearch}
      />
        ) : (
      <Pagination
        numberOfPages={numberOfPages}
        changePage={searchPageCharacters}
        characterName={nameSearch}
      />
      )}
    </>
  );
}