import { Container } from 'semantic-ui-react';
import NavBar from './nav/NavBar';
import { useState } from 'react';
import { AppEvent } from '../../interfaces/event';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  const handleSelectEvent = (event: AppEvent) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setIsFormOpen(true);
  };

  return (
    <>
      <NavBar setIsFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
