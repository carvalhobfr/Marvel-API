import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 5rem 3rem 2rem 3rem;

  @media screen and (max-width: 600px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }
`;

export const Content = styled.article`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  h2 {
    margin: 6rem 0 3rem 0;
    padding: 1rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3.75rem;
    text-align: center;
    background: url('/background.png') center center no-repeat;
  }
`;

export const ContentHeader = styled.header`
  width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  div {
    h1 {
      padding-bottom: 1rem;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 4.5rem;
      text-align: center;
      text-transform: uppercase;
      border-bottom: solid 0.5rem var(--red);
    }

    p {
      margin: 2.5rem 0;
      padding: 0 3rem;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.75rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 900px) {
    width: 90%;

    div {
      h1 {
        font-size: 3rem;
      }

      p {
        margin-top: 2.5rem;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    div {
      p {
        padding: 0;
      }
    }
  }
`;

export const ContainerMidia = styled.section`
  margin: 3rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
`;

export const MidiaBox = styled.div`
  position: relative;
  width: calc(20% - 1rem);
  margin: 0 auto;
  background: var(--black);
  color: #fff;
  transition: all 0.3s;

  @media screen and (max-width: 1100px) {
    width: calc(25% - 1rem);
  }

  @media screen and (max-width: 900px) {
    width: calc(33% - 1rem);
  }

  @media screen and (max-width: 820px) {
    width: calc(50% - 1rem);
  }

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    background: var(--red);
    transition: height 0.5s;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: var(--dark-snow);
    border-style: solid;
    border-width: 1rem 1rem 0 0;
  }

  header {
    position: relative;
    height: 21rem;
    border-bottom: solid 0.4rem var(--red);
    overflow: hidden;
    z-index: 100;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(0.9);
      transition: all 0.3s;
    }
  }

  div {
    position: relative;
    padding: 1rem 1.5rem 1.5rem 1.5rem;

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.7rem;
      line-height: 1.05rem;
    }
  }

  &:hover {
    &::before {
      height: 100%;
    }

    header img {
      margin-top: -10%;
      height: 120%;
      filter: grayscale(0);
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 0;
    display: flex;

    header {
      width: 80px;
      min-width: 80px;
      height: 80px;
      border-bottom: none;
      border-right: solid 0.4rem var(--red);

      img {

      }
    }

    div {
      position: relative;
      padding: 0 0 0 0.5rem;
      display: flex;
      align-items: center;

      h2 {
        margin-bottom: 0;
      }

      p {
        display: none;
      }
    }
  }
`;

export const Nav = styled.nav`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  text-align: start;

  a {
    transition: color 0.3s;
  }

  a:hover {
    color: var(--red);
  }
`;