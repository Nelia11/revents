import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import EventForm from '../form/EventForm';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={sampleData}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
