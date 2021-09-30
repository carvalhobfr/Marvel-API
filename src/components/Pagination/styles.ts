import styled from 'styled-components';

export const Container = styled.nav`
  padding: 32px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  button {
    padding: 8px 16px;
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    border: 1px solid var(--dark-snow);
    border-radius: 3px;
    background: var(--snow);
    transition: all 0.3s;

    &.active {
      color: #fff;
      background: var(--dark-blue);
    }

    &:hover:not(:disabled) {
      color: #fff;
      border: 1px solid var(--dark-smoke);
      background: var(--dark-smoke);
    }
  }

  svg {
    color: var(--smoke);
    cursor: pointer;
    
    &:hover {
      color: var(--dark-red);
    }
  }

  @media screen and (max-width: 600px) {
    gap: 8px;

    button {
      padding: 8px 12px;
      font-size: 14px;
    }

    svg {
      min-width: 20px;
      min-height: 20px;
    }
  }
`;
