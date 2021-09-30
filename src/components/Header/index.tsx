import logoImg from '../../assets/logo.svg';
import { Container, Logo} from './styles';

export function Header() {
  return (
    <Container>
      <Logo>
        <a href="/">
          <img src={logoImg} alt="Marvel logo" />
        </a>
      </Logo>
    </Container>
  )
}