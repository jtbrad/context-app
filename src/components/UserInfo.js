import React from 'react';
import { Card, } from 'semantic-ui-react';

const UserInfo = () => (
  <Card>
    <Card.Content>
      <Card.Header>firstName lastName</Card.Header>
      <Card.Meta>email</Card.Meta>
    </Card.Content>
  </Card>
);

export default UserInfo;