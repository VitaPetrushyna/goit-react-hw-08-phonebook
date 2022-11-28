import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginContainer } from './Login.styled';

export default function Login() {
  return (
    <LoginContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </LoginContainer>
  );
}
