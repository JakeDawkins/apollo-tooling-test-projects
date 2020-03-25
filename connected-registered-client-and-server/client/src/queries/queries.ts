import gql from 'graphql-tag';

export const WHO_AM_I_QUERY = gql`
  query WhoAmI {
    me {
      firstName
      lastName
      name
    }
  }
`;
