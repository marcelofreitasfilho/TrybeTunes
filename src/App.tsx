import { Routes, Route } from 'react-router-dom';
import { Login } from './Componentes/Login';
import { Search } from './Componentes/Search';
import Album from './Componentes/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
    </Routes>
  );
}

export default App;
