import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import { useAppSelector } from '../../../app/store/store';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/nav/LoadingComponent';
import { actions } from '../eventsSlice';
import { useFirestore } from '../../../app/hooks/firestore/useFirestore';

const EventDashboard = () => {
  const { data: events, status } = useAppSelector((state) => state.events);
  const { loadCollection } = useFirestore('events');

  useEffect(() => {
    loadCollection(actions);
  }, [loadCollection]);

  if (status === 'loading') return <LoadingComponent />;

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
