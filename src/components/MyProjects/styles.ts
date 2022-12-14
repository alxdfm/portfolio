import styled from "styled-components";
import { colors, fontSize } from "../../variables";

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const SeeAll = styled.a`
  margin-left: auto;
  width: 200px;
  height: 28px;
  display: flex;
  justify-content: right;
  align-items: center;
  color: ${colors.colorFont};
  font-size: ${fontSize.small};
  cursor: pointer;
  text-decoration: none;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  width: 100%;
  height: 200px;
  overflow-y: hidden;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 284px;
  height: 72px;
  border: 1px solid ${colors.highlightColor};
  border-radius: 4px;
  font-size: 12px;
  padding: 8px;
`;

export const Name = styled.div`
  font-weight: 800;
`;

export const Link = styled.a`
  color: ${colors.highlightColor};
  background: ${colors.backgroundSecondary};
  cursor: pointer;
  text-decoration: none;
  margin-left: auto;
  border: 1px solid;
  border-radius: 2px;
  margin-top: auto;
  padding: 2px;
  height: 14px;
`;

export const Description = styled.div`
  height: 28px; 
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
`;

export const Language = styled.div`
  margin-left: auto;
`;
