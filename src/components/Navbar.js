import React, { useContext, } from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import { UserContext, } from '../providers/UserProvider';

const Navbar = () => {
  const {firstName, lastName} = useContext(UserContext);

  return (
    <Menu>
      <Menu.Item as={Link} to="/">Home</Menu.Item>
      <Menu.Item as={Link} to="/user">{`${firstName} ${lastName}`}</Menu.Item>
    </Menu>
  );
};

export default Navbar;