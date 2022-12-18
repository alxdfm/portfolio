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
    transform: translate(-0.5px, -0.5px);
    width: 64.5px;
    height: 16.5px;
  }

  @keyframes anim {
    0% {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(43, 43, 43, 1) 10%,
        rgba(147, 147, 147, 1) 25%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    25% {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(43, 43, 43, 1) 20%,
        rgba(147, 147, 147, 1) 35%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    50% {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(43, 43, 43, 1) 45%,
        rgba(147, 147, 147, 1) 60%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    75% {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(43, 43, 43, 1) 65%,
        rgba(147, 147, 147, 1) 80%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    100% {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(43, 43, 43, 1) 74%,
        rgba(147, 147, 147, 1) 90%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }

  ${(props) =>
    props.isLightTheme
      ? `
        background: #fff;
        color: #000;
        :hover {
          animation: anim 0.2s linear ;
          background: #000;
          color: #dde;
        }
      `
      : `
        background: #000;
        color: #dde;
        :hover {
          animation: anim 0.2s linear reverse;
          background: #fff;
          color: #000;
        }
      `}

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 58px;
  }
`;
