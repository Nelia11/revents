import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import EventForm from '../form/EventForm';
import { sampleData } from '../../../app/api/sampleData';
import { FC, useState } from 'react';
import { AppEvent } from '../../../interfaces/event';

interface EventDashboardProps {
  isFormOpen: boolean;
  setIsFormOpen: (value: boolean) => void;
  selectedEvent: AppEvent | null;
  selectEvent: (event: AppEvent | null) => void;
}

const EventDashboard: FC<EventDashboardProps> = ({
  isFormOpen,
  setIsFormOpen,
  selectedEvent,
  selectEvent,
}) => {
  const [events, setEvents] = useState<AppEvent[]>(sampleData);

  const addEvent = (event: AppEvent) => {
    setEvents((prevState) => {
      return [...prevState, event];
    });
    setIsFormOpen(false);
  };

  const updateEvent = (updatedEvent: AppEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    selectEvent(null)
    setIsFormOpen(false)
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={events} selectEvent={selectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && (
          <EventForm
            setIsFormOpen={setIsFormOpen}
            updateEvent={updateEvent}
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
