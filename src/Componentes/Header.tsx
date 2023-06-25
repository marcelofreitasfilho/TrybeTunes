import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';

function Header() {
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    image: '',
    description: '',
  });
  const { name, email, image, description } = user;
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const myUsr = async () => {
      setCarregando(true);
      const usuario = await getUser();
      setUser(usuario);
      setCarregando(false);
    };
    myUsr();
  }, []);

  if (carregando) {
    return (
      <p>Carregando...</p>
    );
  }
  return (
    <header data-testid="header-component">
      <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
      <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
      <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      <h2 data-testid="header-user-name">{ name }</h2>
    </header>
  );
}

export default Header;
