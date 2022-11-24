import { HomeContainer, HomeTitle, HomeText } from './Home.styled';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to Phonebook!</HomeTitle>

      <HomeText>
        To use the program you need to register{' '}
        <Link to="/register">Register</Link> or log in{' '}
        <Link to="/login">Log in</Link>
      </HomeText>
    </HomeContainer>
  );
}
