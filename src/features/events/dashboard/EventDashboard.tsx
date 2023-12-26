import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import EventForm from '../form/EventForm';
import { sampleData } from '../../../app/api/sampleData';
import { FC, useState } from 'react';
import { AppEvent } from '../../../interfaces/event';

interface EventDashboardProps {
  isFormOpen: boolean;
  setIsFormOpen: (value: boolean) => void;
}

const EventDashboard: FC<EventDashboardProps> = ({
  isFormOpen,
  setIsFormOpen,
}) => {
  const [events, setEvents] = useState<AppEvent[]>(sampleData);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  const addEvent = (event: AppEvent) => {
    setEvents((prevState) => {
      return [...prevState, event];
    });
    setIsFormOpen(false);
  };

  const handleSelectEvent = (event: AppEvent) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={events} selectEvent={handleSelectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && (
          <EventForm
            setIsFormOpen={setIsFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent?.id || 'create'}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
