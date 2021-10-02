import { SetStateAction, useEffect, useState } from "react";
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
  const [characters, setCharacters] = useState<any[]>([]);
  let [charLocalList, setCharLocalList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    renderCharactersList()
  }, []);

//função para pegar dados da api:
  async function renderCharactersList() {
    if (localStorage.getItem('characterLocal') && localStorage.getItem('numberOfPages') && localStorage.getItem('numberOfPages') !== "0") {
      const localStorageCharacter =  localStorage.getItem('characterLocal') as  any
      const localNumberOfPages =  localStorage.getItem('numberOfPages') as  any
      setNumberOfPages(+localNumberOfPages)
      console.log("number of pages local storage", numberOfPages)
      setCharLocalList(JSON.parse(localStorageCharacter))

    } else {
      let charApi:any[] = []
      let totalNumberApi = 0;

      for (let i = 0; i <= 3; i++) {
        await api.get(`characters?offset=${i*100}`)
        // eslint-disable-next-line no-loop-func
        .then(result => {
        charApi = charApi.concat(result.data.data.results);
        totalNumberApi= (Math.ceil(result.data.data.total / 15))
      });
    }
    setCharacters(charApi) 
    setNumberOfPages(totalNumberApi)
    localStorage.setItem("numberOfPages", JSON.stringify(numberOfPages))
    console.log("totalNumberApi", totalNumberApi , "numberOfPages:" , numberOfPages )

      localStorage.setItem("characterLocal", JSON.stringify(charLocalList))
    }

    console.log("character List render:", characters)
    setNumberOfPages(Math.ceil(charLocalList.length / 15));
    setLoading(false) 
  };

  
  // async function renderCharacters(characters: [] | SetStateAction<any[]>) {
  //       await renderCharactersList();
  //       setNumberOfPages(Math.ceil(charLocalList.length / 100));
  // };

  


  async function searchCharacters(characterName: string) { 
    setNameSearch(characterName);
    setLoading(true);
    const asArray = await Object.entries(characters);  
    const arrayValue = asArray.map(([key, value]) =>  value)
    const filtered = await arrayValue.filter(value => value.name.toLowerCase().includes(characterName.toLowerCase()))
    await setCharacters(filtered);
    setNumberOfPages(Math.ceil(filtered.length / 15));
  };


 async function searchPageCharacters(page: number){
    // setLoading(true);
    // if (nameSearch !== "") {
    //   searchCharacters(nameSearch)
    // } else {
    //   setNumberOfPages(Math.ceil(charLocalList.length / 15));
    //   console.log("characters.slice" ,typeof(characters))
    //   await setCharacters(characters.slice((page-1)*15, page*15)) 
    //   setLoading(false)
    //   // setNumberOfPages(Math.ceil(characters.length / 100)); 
    // }
     api.get(`characters?${nameSearch !== '' ? `nameStartsWith=${nameSearch}` : ''}&offset=${page * 15 - 15}`)
       .then(result => {
         setCharacters(result.data.data.results);
          setNumberOfPages(Math.ceil(result.data.data.total / 15));
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
          <Pagination
            numberOfPages={numberOfPages}
            changePage={searchPageCharacters}
            characterName={nameSearch}
          />
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

      <Pagination
        numberOfPages={numberOfPages}
        changePage={searchPageCharacters}
        characterName={nameSearch}
      />
    </>
  );
}