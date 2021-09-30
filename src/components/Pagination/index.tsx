import { useEffect, useState } from 'react';
import { Container } from './styles';
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface PaginationProps {
  numberOfPages: number;
  changePage: Function;
  characterName: string;
}

export function Pagination({ numberOfPages, changePage, characterName }: PaginationProps) {

  const [page, setPage] = useState<number>(Number(1));
  const [newPage, setNewPage] = useState<number>(Number(1));
  const [buttonsPage, setButtonsPage] = useState<number[]>([]);

  useEffect(() => {
    setPage(1);
    setNewPage(1);
  }, [characterName]);

  useEffect(() => {
    let indexes: number[] = [];

    if (numberOfPages > 5) {
      if (newPage < 4) {
        for (let i = 1; i < 6; i++) {
          indexes.push(i);
        }
      }

      if (newPage > 3 && newPage < numberOfPages - 2) {
        for (let i = newPage - 2; i < newPage + 3; i++) {
          indexes.push(i);
        }
      }

      if (newPage > numberOfPages - 3) {
        for (let i = numberOfPages - 4; i < numberOfPages + 1; i++) {
          indexes.push(i);
        }
      }
    } else {
      for (let i = 1; i < numberOfPages + 1; i++) {
        indexes.push(i);
      }
    }

    setButtonsPage(indexes);

    if (newPage !== page) {
      setPage(newPage);
      changePage(newPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPage, numberOfPages]);

  return (
    <Container>
      {page > 2 && (
        <CgChevronDoubleLeft onClick={() => setNewPage(1)} />
      )}

      {page > 1 && (
        <BiChevronLeft onClick={() => setNewPage(page - 1)} />
      )}

      {buttonsPage.map(index => (
        <button
          type="button"
          key={index}
          onClick={() => setNewPage(index)}
          className={page === index ? 'active' : ''}
          disabled={page === index}
        >
          {index}
        </button>
      ))}

      {page < numberOfPages && (
        <BiChevronRight onClick={() => setNewPage(page + 1)} />
      )}

      {page < numberOfPages - 1 && (
        <CgChevronDoubleRight onClick={() => setNewPage(numberOfPages)} />
      )}
    </Container>
  );
}
