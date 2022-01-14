import React from 'react';
import { useGetShowsQuery } from './store/queries/shows';

function App() {
  const { data } = useGetShowsQuery(3); // 3 is id of the show
  console.log('data', data);

  return <div className="App">App</div>;
}

export default App;
