import { Link } from "react-router-dom";

import logoImg from '../../assets/logo.svg';
import { Container, Logo} from './styles';

export function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logoImg} alt="Marvel logo" />
        </Link>
      </Logo>
    </Container>
  )
}