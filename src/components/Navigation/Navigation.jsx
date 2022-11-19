import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { WrapperLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <WrapperLink to="/">Home</WrapperLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
