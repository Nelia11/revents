import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import NavBar from './nav/NavBar';
import { useState } from 'react';
import { AppEvent } from '../../interfaces/event';

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
        <EventDashboard
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={handleSelectEvent}
        />
      </Container>
    </>
  );
};

export default App;
