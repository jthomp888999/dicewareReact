import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';

const MainContainer = props => {
  const { button, pass } = props;
  return (
    <Container center textAlign='center' fluid className='password-box'>
      <Grid celled='internally' centered>
        <Grid.Row>
          <Segment raised padded='very'>
            <Segment padded>{pass}</Segment>
            <Grid.Row>{button}</Grid.Row>
          </Segment>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MainContainer;
