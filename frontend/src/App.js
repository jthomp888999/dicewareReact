import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import fetchPass from './fetchPass';
import MainContainer from './components/MainContainer';

const App = () => {
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(4);
  const [wordSep, setWordSep] = useState('_');
  const [error, setError] = useState(false);

  var data = { word_count: wordCount, seperator: wordSep };

  const getPass = () => {
    setLoading(true);
    fetchPass(data).then(res => {
      res.text().then(final => {
        setLoading(false);
        if (JSON.parse(final).error) {
          setError(true);
          console.log(error);
        }
        setPass(JSON.parse(final).password);
      });
    });
  };

  return (
    <MainContainer
      error={error}
      countState={setWordCount}
      sepState={setWordSep}
      pass={!loading ? <h1>{pass}</h1> : <h1>Loading...</h1>}
      button={
        <Button onClick={getPass} loading={loading} primary>
          Get Password
        </Button>
      }
    />
  );
};

export default App;
