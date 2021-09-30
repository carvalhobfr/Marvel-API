import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from "./styles/GlobalStyles";

export function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}
