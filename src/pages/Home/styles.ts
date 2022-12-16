import styled from 'styled-components';
import { fontSize, screenSize } from '../../variables';

export const ScreenContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 980px;
  gap: 58px;
  margin: 8px;

  @media only screen and (max-width: ${screenSize.tablet}) {
    width: 100%;
    justify-content: center;
  }

  @media only screen and (max-width: ${screenSize.smartL}) {
    gap: 36px;
  }
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  gap: 12px;

  @media only screen and (max-width: ${screenSize.tablet}) {
    width: 228px;
    font-size: ${fontSize.smallest};
  }

  @media only screen and (max-width: ${screenSize.smartM}) {
    width: 200px;
  }

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 120px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 580px;

  @media only screen and (max-width: ${screenSize.tablet}) {
    width: 440px;
  }

  @media only screen and (max-width: ${screenSize.smartL}) {
    width: 280px;
  }

  @media only screen and (max-width: ${screenSize.smartM}) {
    width: 220px;
  }

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 180px;
  }
`;

export const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #000;
`;
