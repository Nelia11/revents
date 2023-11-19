import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import NavBar from './nav/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  );
};

export default App;
