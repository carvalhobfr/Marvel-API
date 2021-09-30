import loadingGif from '../../assets/loading.gif';

import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <img src={loadingGif} alt="Loading..." />
    </Container>
  )
}