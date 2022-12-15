import styled from "styled-components";

export const ScreenContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 980px;
  gap: 58px;
  margin: 8px;
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  gap: 12px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 580px;
`;

export const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #000;
`;
