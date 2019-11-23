import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const MainContainer = children => {
  return (
    <Container textAlign='center'>
      <Grid centered columns={4}>
        <Grid.Column>{children}</Grid.Column>
      </Grid>
    </Container>
  );
};

export default MainContainer;
