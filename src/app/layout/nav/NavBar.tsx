import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutButtons from './SignedOutButtons';
import logo from '/logo.png';
import { useAppSelector } from '../../store/store';
import { sampleData } from '../../api/sampleData';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const NavBar = () => {
  const { authenticated } = useAppSelector((state) => state.auth);

  const seedData = () => {
    sampleData.forEach(async (event) => {
      const { id, ...rest } = event;
      await setDoc(doc(db, 'events', id), { ...rest });
    });
  };

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
        {import.meta.env.DEV && (
          <MenuItem>
            <Button content='Seed data' onClick={() => seedData()} />
          </MenuItem>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutButtons />}
      </Container>
    </Menu>
  );
};
export default NavBar;
