import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';

const MainContainer = props => {
  const { button, pass } = props;
  return (
    <Container textAlign='center'>
      <Grid.Column>
        <Segment raised padded='very' inverted color='teal'>
          <Segment inverted padded color='blue'>
            {pass}
          </Segment>
          {button}
        </Segment>
      </Grid.Column>
    </Container>
  );
};

export default MainContainer;
