import React, { useState } from 'react';
import { Button, Segment, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './app.css';

import fetchPass from './fetchPass';
import MainContainer from './components/MainContainer';

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
  };
  return (
    <MainContainer>
      <Segment raised padded='very' inverted color='teal'>
        <Segment inverted padded color='blue'>
          {!loading ? <h1>{pass}</h1> : <h1>Loading...</h1>}
        </Segment>
        <Button onClick={getPass} loading={loading} primary>
          Get Password
        </Button>
      </Segment>
    </MainContainer>
  );
};

export default App;
