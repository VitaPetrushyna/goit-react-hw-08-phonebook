import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin: 20px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border-top: 1px solid #2a363b;
`;

export const FooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  color: #5389e6;
  margin-right: 5px;
`;

export const FooterIcon = styled.a`
  margin: 0 10px;
  color: black;

  &:hover {
    color: #881a0c;
    transform: scale(1.3);
  }
`;
