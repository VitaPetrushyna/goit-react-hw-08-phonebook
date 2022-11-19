import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../../hooks/UseAuth';
import { WrapperUser, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperUser>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </WrapperUser>
  );
};
