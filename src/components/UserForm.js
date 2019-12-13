import React, { useContext, useState, } from 'react';
import { Form, } from 'semantic-ui-react';
import { UserContext, } from '../providers/UserProvider';

const UserForm = () => {
  const user = useContext(UserContext);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    user.updateUser({ firstName, lastName, email});
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Input 
        label="First Name"
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e, { value, }) => setFirstName(value)}
      />
      <Form.Input 
        label="Last Name"
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e, { value, }) => setLastName(value)}
      />
      <Form.Input 
        label="Email"
        name="email"
        type="text"
        value={email}
        onChange={(e, { value, }) => setEmail(value)}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  );
};

export default UserForm;