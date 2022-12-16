import styled from 'styled-components';
import { fontSize, screenSize } from '../../variables';

export const ScreenContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 980px;
  margin: 8px;

  @media only screen and (max-width: ${screenSize.tablet}) {
    width: 100%;
  }

  @media only screen and (max-width: ${screenSize.smartL}) {
    gap: 20px;
  }
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  margin-bottom: 20px;
  gap: 12px;

  @media only screen and (max-width: ${screenSize.tablet}) {
    width: 268px;
    font-size: ${fontSize.smallest};
  }

  @media only screen and (max-width: ${screenSize.smartL}) {
    width: 248px;
  }

  @media only screen and (max-width: ${screenSize.smartM}) {
    width: 220px;
  }

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 140px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 620px;

  @media only screen and (max-width: ${screenSize.tablet}) {
    width: 480px;
  }

  @media only screen and (max-width: ${screenSize.smartL}) {
    width: 300px;
  }

  @media only screen and (max-width: ${screenSize.smartM}) {
    width: 240px;
  }

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 200px;
  }
`;

export const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #000;
`;
