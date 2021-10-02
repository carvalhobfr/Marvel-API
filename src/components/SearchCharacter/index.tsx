import { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoWarningOutline } from 'react-icons/io5';
import { Container, Search } from './styles';

interface SearchCharacterProps {
  onSearchCharacter: (value: string) => void;
}

export function SearchCharacter({ onSearchCharacter }: SearchCharacterProps) {
  const [searchCharacter, setSearchCharacter] = useState('');
  const [erro, setErro] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (searchCharacter.length > 2) {
      setErro(false);
      setSearchCharacter('');
      onSearchCharacter(searchCharacter);
    } else {
      setErro(true);
    }
  }

  return (
    <Container>

      <Search onSubmit={handleSubmit}>
        <label htmlFor="search">
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search a character"
              value={searchCharacter}
              onChange={event => {
                setSearchCharacter(event.target.value);
                setErro(false);
              }}
            />
            <FaSearch />
          </div>
        </label>

        {erro && (
          <span>
            <IoWarningOutline size={24} />
            Must be at least 3 characters long.
          </span>
        )}
      </Search>
    </Container>
  )
}