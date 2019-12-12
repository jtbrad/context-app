import React, { useContext, useState, } from 'react';
import { Button, Card, } from 'semantic-ui-react';
import UserForm from './UserForm';
import { UserContext, } from '../providers/UserProvider';

const UserInfo = () => {
  const [edit, setEdit] = useState(false);
  const { firstName, lastName, email, } = useContext(UserContext);

  return (
    <Card>
      <Card.Content>
        {
          edit ? <UserForm /> 
          : 
          <>
            <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
            <Card.Meta>{email}</Card.Meta>
          </>
        }
      </Card.Content>
      <Card.Content>
        <Button onClick={() => setEdit(!edit)}>Edit</Button>
      </Card.Content>
    </Card>
  );
}; 

export default UserInfo;