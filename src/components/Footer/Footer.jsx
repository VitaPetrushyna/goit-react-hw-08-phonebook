import { VscAccount } from 'react-icons/vsc';
import { FooterContainer, FooterText, FooterIcon } from './Footer.styled';

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        © 2022 | Developed by
        <FooterIcon
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/VitaPetrushyna"
        >
          <VscAccount size={30} />
        </FooterIcon>
      </FooterText>
    </FooterContainer>
  );
}
