import { Grid } from 'semantic-ui-react';
import EventsList from './EventsList';
import EventForm from '../form/EventForm';

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
