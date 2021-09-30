import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
  height: 64px;
  padding: 0 24px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Logo = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
    img {
      width: 100px;
      object-fit: contain;
    }
`;
