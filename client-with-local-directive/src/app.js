import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const characters = gql`
  query testQuery2 {
    characters {
      results {
        id
        name
        gender
        image
        origin {
          id
        }
      }
    }
  }
`;

export default function App() {
  return (
    <Query query={characters}>
      {({ data, loading, error }) => {
        return (
          <div>
            <h1>Hello!</h1>
          </div>
        );
      }}
    </Query>
  );
}
