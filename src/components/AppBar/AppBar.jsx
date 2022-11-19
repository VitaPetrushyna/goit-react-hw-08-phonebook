import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/UseAuth';
import { HeaderBar } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderBar>
  );
};
