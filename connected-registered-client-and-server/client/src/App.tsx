import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import './App.css';
import Data from './data';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
});

const client = new ApolloClient({
  cache: cache,
  link: link,
  name: 'my-test',
  version: '1.0',
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Data />
    </ApolloProvider>
  );
};

export default App;
