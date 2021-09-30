import styled from "styled-components";

export const Container = styled.main`
  max-width: 1188px;
  min-height: calc(100vh - 64px - 64px) /* view - header - footer */;
  margin: 0 auto;
  padding: 40px 24px;

  h2 {
    margin-top: 40px;

    strong {
      color: var(--red);
    }
  }
`;

export const Nav = styled.nav`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  text-align: center;

  a {
    transition: color 0.3s;
  }

  a:hover {
    color: var(--red);
  }
`;