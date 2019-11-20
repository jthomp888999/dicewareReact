import React, { useState } from 'react';
import fetchPass from './fetchPass';

const App = () => {
  const [pass, setPass] = useState('');
  const [fetching, setFetching] = useState(false);

  var data = { word_count: 4, seperator: '_' };

  const getPass = () => {
    setFetching(true);
    fetchPass(data).then(res => {
      res.text().then(data => {
        setFetching(false);
        setPass(JSON.parse(data).password);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <div>
      {!fetching ? <h1>{pass}</h1> : <h1>Loading...</h1>}
      <button onClick={getPass}>Get Password</button>
    </div>
  );
};

export default App;
