import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterContainer } from './Register.styled';

export default function Register() {
  return (
    <RegisterContainer>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </RegisterContainer>
  );
}
