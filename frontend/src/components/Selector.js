import React from 'react';
import { Grid, Form } from 'semantic-ui-react';

const Selector = props => {
  const { countState, sepState, error } = props;

  return (
    <Grid centered columns={3} divided>
      <Grid.Column>
        <Form.Input
          error={error}
          type='number'
          min={1}
          onChange={e => countState(e.target.value)}
          label='Password word count: '
          placeholder='Amount of words in your password'
        />
      </Grid.Column>
      <Grid.Column>
        <Form.Input
          onChange={e => sepState(e.target.value)}
          label='Password seperator: '
          placeholder='Any seperator to go between words'
        />
      </Grid.Column>
    </Grid>
  );
};

export default Selector;
