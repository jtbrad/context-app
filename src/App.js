import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Container>
      <Switch>
        <Route exact path="/" render={ () => <div>Home</div> } />
        <Route exact path="/user" render={ () => <UserInfo /> } />
      </Switch>
    </Container>
  </>
);

export default App;
