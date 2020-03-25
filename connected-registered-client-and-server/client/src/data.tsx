import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { WHO_AM_I_QUERY } from './queries/queries';
import { WhoAmI } from './types/WhoAmI';
import { QueryResult } from '@apollo/react-common';

export const Data = () => {
  const { loading, error, data }: QueryResult<WhoAmI> = useQuery(
    WHO_AM_I_QUERY,
  );

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: '128px' }}>
          {loading && 'Loading...'}
          {error && 'Error!'}
          {data && data.me && data.me.firstName}
          {/* {data && data.me && `@${data.me.firstName}${data.me.lastName}`} */}
        </p>
      </header>
    </div>
  );
};

export default Data;
