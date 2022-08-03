import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import './styles/global.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}