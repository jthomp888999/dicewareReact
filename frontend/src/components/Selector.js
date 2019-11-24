import React, { useState } from 'react';
import { Container, Segment, Grid, Form } from 'semantic-ui-react';

const Selector = props => {
  const [wordNum, setWordNum] = useState();
  const [seperator, setSeperator] = useState();

  const { countState, sepState } = props;

  return (
    <Grid centered columns={3} divided>
      <Grid.Column>
        <Form.Input
          type='number'
          min={1}
          value={wordNum}
          onChange={e => countState(e.target.value)}
          label='Password word count: '
          placeholder='Amount of words in your password'
        />
      </Grid.Column>
      <Grid.Column>
        <Form.Input
          value={seperator}
          onChange={e => sepState(e.target.value)}
          label='Password seperator: '
          placeholder='Any seperator to go between words'
        />
      </Grid.Column>
    </Grid>
  );
};

export default Selector;
