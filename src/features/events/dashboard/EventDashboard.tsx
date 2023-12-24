import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import EventForm from '../form/EventForm';
import { sampleData } from '../../../app/api/sampleData';
import { FC, useEffect, useState } from 'react';
import { AppEvent } from '../../../interfaces/event';

interface EventDashboardProps {
  isFormOpen: boolean;
  setIsFormOpen: (value: boolean) => void;
}

const EventDashboard: FC<EventDashboardProps> = ({
  isFormOpen,
  setIsFormOpen,
}) => {
  const [events, setEvents] = useState<AppEvent[]>([]);
  useEffect(() => {
    setEvents(sampleData);
  }, []);
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && <EventForm setIsFormOpen={setIsFormOpen} />}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
