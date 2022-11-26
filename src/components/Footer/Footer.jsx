import { VscAccount } from 'react-icons/vsc';
import { FooterBar, FooterText, FooterIcon } from './Footer.styled';

export function Footer() {
  return (
    <FooterBar>
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
    </FooterBar>
  );
}
