import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_WEBSITES = gql`
  {
    websites {
      id
      url
      status
      lastCheckedAt
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_WEBSITES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Website Monitoring</h1>
      <ul>
        {data.websites.map(website => (
          <li key={website.id}>
            {website.url} - Status: {website.status} (Last Checked: {website.lastCheckedAt})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
