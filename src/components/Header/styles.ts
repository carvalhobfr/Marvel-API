import styled from 'styled-components';

export const Container = styled.header`
  height: 64px;
  padding: 0 24px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
