import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import { useState } from 'react';
import SignedOutButtons from './SignedOutButtons';
import logo from '/logo.png'

const NavBar = () => {
  const [auth, setAuth] = useState(true);

  return (
    <Menu inverted={true} fixed='top'>
      <Container>
        <MenuItem header as={NavLink} to='/'>
          <img src={logo} alt='logo' />
          Re-vents
        </MenuItem>
        <MenuItem name='Events' as={NavLink} to='/events' />
        <MenuItem>
          <Button
            as={NavLink}
            to='/createEvent'
            floated='right'
            positive={true}
            inverted={true}
            content='Create event'
          />
        </MenuItem>
        {auth ? (
          <SignedInMenu setAuth={setAuth} />
        ) : (
          <SignedOutButtons setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
};
export default NavBar;
