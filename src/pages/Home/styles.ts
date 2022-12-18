import styled from 'styled-components';
import { colors, fontSize, screenSize } from '../../variables';

type Props = {
  isLightTheme: boolean;
};

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
  position: relative;

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

export const FullContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.isLightTheme
      ? `
        background-color: #fff;
        color: #222;

        div > div > div {
          background-color: #dde;
          color: #222;
        }
        
        h2 {
          color: #222;
        }

        h3 {
          background-color: #222;
          color: #fff;
          border: 1px solid ${colors.highlightColor};
        }

        div > a {
          color: #222;
        }

        div > div > div > div > div > a {
          background-color: #fff;
          border: 1px solid ${colors.highlightColor};
        }

        p {
          color: #222;
        }

        svg {
          filter: brightness(0.6);
        }
      `
      : 'background-color: #000'};
`;

export const ThemeToggle = styled.button<Props>`
  position: absolute;
  left: 8px;
  top: 8px;
  width: 64px;
  height: 16px;
  border: none;
  border-radius: 20px;
  font-size: 9px;

  :active {
    width: 66px;
    height: 18px;
  }

  ${(props) =>
    props.isLightTheme
      ? `
        background-color: #000;
        color: #dde;
      `
      : null}

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 58px;
  }
`;
