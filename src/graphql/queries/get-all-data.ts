import { gql } from '@apollo/client';

export const GET_ALL_DATA = gql`
  query {
    educations(first: 100) {
      company
      start
      end
      role
    }
    experiences(first: 100) {
      company
      start
      end
      role
    }
    technologies(first: 100) {
      techTags
    }
    posts(first: 100) {
      title
      content
      createdAt
    }
  }
`;
