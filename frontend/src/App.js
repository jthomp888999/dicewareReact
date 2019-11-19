import React, { useEffect, useState } from 'react';
import fetchPass from './fetchPass';

const App = () => {
  const [pass, setPass] = useState('');
  var data = { word_count: 4, seperator: '_' };

  useEffect(() => {
    fetchPass(data).then(res => {
      res.text().then(data => {
        setPass(JSON.parse(data).password);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>{pass}</h1>
    </div>
  );
};

export default App;
