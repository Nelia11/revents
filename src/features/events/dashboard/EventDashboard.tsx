import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={sampleData}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Right column</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
