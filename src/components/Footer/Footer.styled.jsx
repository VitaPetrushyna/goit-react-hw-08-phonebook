import styled from 'styled-components';

export const FooterBar = styled.div`
  position: fixed;

  bottom: 0;
  width: 1000px;
  margin-left: 100px;
  min-height: 40px;
  padding: 20px 0;

  border-top: 1px solid;
  border-image: linear-gradient(to right, #2e151b, #1c3334, #376e6f, #2e151b)
    47% 0%;
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
