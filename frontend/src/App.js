import React, { useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './app.css';
import fetchPass from './fetchPass';

const App = () => {
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  var data = { word_count: 4, seperator: '_' };

  const getPass = () => {
    setLoading(true);
    fetchPass(data).then(res => {
      res.text().then(data => {
        setLoading(false);
        setPass(JSON.parse(data).password);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <Container fluid textAlign={'center'}>
      {!loading ? <h1>{pass}</h1> : <h1>Loading...</h1>}
      <Button onClick={getPass} loading={loading} primary>
        Get Password
      </Button>
    </Container>
  );
};

export default App;
