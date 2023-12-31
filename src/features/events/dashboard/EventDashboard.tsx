import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import { sampleData } from '../../../app/api/sampleData';
import { useState } from 'react';
import { AppEvent } from '../../../interfaces/event';

const EventDashboard = () => {
  const [events, _] = useState<AppEvent[]>(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
