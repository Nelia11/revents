import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { signOut } from '../../../features/auth/authSlice';
import user from '/user.png';

const SignedInMenu = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/');
  };
  return (
    <Menu.Item position='right'>
      <Image avatar spaced src={user} />
      <Dropdown pointing='top left' text={currentUser?.email || ''}>
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
