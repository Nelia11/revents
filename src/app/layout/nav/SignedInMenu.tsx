import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

const SignedInMenu = () => {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced src='/user.png' />
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create event'
            icon='plus'
          />
          <Dropdown.Item to='/createEvent' text='My profile' icon='user' />
          <Dropdown.Item to='/createEvent' text='Sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};
export default SignedInMenu;
