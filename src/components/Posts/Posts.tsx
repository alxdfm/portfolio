import React from "react";
import { formatDateTime } from "../../utils/formatDateTime";
import { Container, Title } from "../styles";
import { Content, Header, User, Post, PostsContainer, Picture, ContentUser, CreatedAt, UserName, TitlePost } from "./styles";

export type PostType = {
  title: string;
  content: string;
  createdAt: string;
};

export type Props = {
  title?: string;
  posts: PostType[]
};

const Posts = (props: Props) => {
  const renderPosts = () => {
    return !props.posts ? "Não há posts por enquanto!" : props.posts.map((post, index) => (
      <Post key={index}>
        <User> 
          <Picture url={'https://github.com/alxdfm.png'}/>
          <ContentUser>
            <UserName>
              Alexandre Machado
            </UserName>
            <CreatedAt>
              {formatDateTime(post.createdAt)}
            </CreatedAt>
          </ContentUser>
        </User>
        <TitlePost>&#x1F4A1; {post.title}</TitlePost>
        <Content>{post.content}</Content>
      </Post>
    ));
  }

  return (
    <Container>
      <Header>
        <Title>{props.title || "Meus posts"}</Title>
      </Header>
      <PostsContainer>
        {renderPosts()}
      </PostsContainer>
    </Container>
  );
};

export default Posts;
