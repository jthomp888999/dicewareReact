import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';

import Selector from './Selector';

const MainContainer = props => {
  const { button, pass, countState, sepState, error } = props;

  return (
    <Container center textAlign='center'>
      <Grid celled='internally' centered>
        <Grid.Row>
          <Segment raised padded='very'>
            <Selector
              error={error}
              countState={countState}
              sepState={sepState}
            />
            <Segment padded>{pass}</Segment>
            <Grid.Row>{button}</Grid.Row>
          </Segment>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MainContainer;
