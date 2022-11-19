import { HomeContainer, HomeTitle } from './Home.styled';

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitle>
    </HomeContainer>
  );
}
