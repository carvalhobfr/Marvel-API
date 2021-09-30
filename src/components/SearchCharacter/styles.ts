import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'PT Sans Caption', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--dark-smoke);

    @media screen and (max-width: 600px) {
      font-size: 24px;
      text-align: center;
    }
  }
`;

export const Search = styled.form`
  width: 295px;
  margin-top: 16px;

  label {
    font-family: 'PT Sans Caption', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--dark-smoke);
    display: flex;
    flex-direction: column;

    div {
      margin-top: 8px;
      position: relative;
      display: flex;

      input {
        width: 100%;
        padding: 8px 48px 8px 16px;
        font-family: 'PT Sans', sans-serif;
        font-size: 14px;
        font-style: italic;
        color: var(--smoke);
        border: 1px solid #E5E5E5;
        border-radius: 4px;
      }

      svg {
        position: absolute;
        top: calc(50% - 8px);
        right: 16px;
        color: var(--smoke);
      }
    }
  }

  span {
    margin-top: 16px;
    line-height: 16px;
    
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 24px;

    label {
      font-size: 14px;
      text-align: center;
    }
  }
`;
