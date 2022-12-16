import styled from 'styled-components';
import { colors, fontSize } from '../../variables';

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

type UrlImage = {
  url: string;
};

export const Picture = styled.div<UrlImage>(
  ({ url }) => `
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid ${colors.highlightColor};
  background-image: url('${url}');
  background-size: cover;
`
);

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 2px solid ${colors.highlightColor};
  font-size: 12px;
  padding: 8px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  height: 28px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContentUser = styled.div`
  height: 100%;
`;

export const UserName = styled.div`
  font-weight: 800;
`;

export const CreatedAt = styled.div`
  margin-top: 2px;
  font-size: 10px;
`;

export const TitlePost = styled.div`
  font-weight: 600;
  width: fit-content;
  margin-bottom: 4px;
  border-bottom: 0.5px solid ${colors.highlightColor};
`;
