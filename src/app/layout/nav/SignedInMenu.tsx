import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { useAppSelector } from '../../store/store';
import user from '/user.png';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const SignedInMenu = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth)
    navigate('/');
  };
  return (
    <Menu.Item position='right'>
      <Image avatar spaced src={user} />
      <Dropdown pointing='top left' text={currentUser?.email as string}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create event'
            icon='plus'
          />
          <Dropdown.Item to='/createEvent' text='My profile' icon='user' />
          <Dropdown.Item
            onClick={handleSignOut}
            to='/createEvent'
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};
export default SignedInMenu;
