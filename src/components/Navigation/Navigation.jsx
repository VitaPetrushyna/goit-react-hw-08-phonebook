import { useAuth } from 'hooks';
import { WrapperLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <WrapperLink to="/">Home</WrapperLink>
      {isLoggedIn && <WrapperLink to="/contacts">Contacts</WrapperLink>}
    </nav>
  );
};
