import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import NavBar from './nav/NavBar';
import { useState } from 'react';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <NavBar setIsFormOpen={setIsFormOpen} />
      <Container className='main'>
        <EventDashboard isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      </Container>
    </>
  );
};

export default App;
