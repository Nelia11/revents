import { Grid } from 'semantic-ui-react';
import EventsList from './EventList';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../../app/config/firebase';
import { AppEvent } from '../../../interfaces/event';
import { setEvents } from '../eventsSlice';

const EventDashboard = () => {
  const { events } = useAppSelector((state) => state.events);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const q = query(collection(db, 'events'));
    const unsubscribe = onSnapshot(q, {
      next: (querySnapshot) => {
        const events: AppEvent[] = [];
        querySnapshot.forEach((doc) => {
          events.push({ id: doc.id, ...doc.data() } as AppEvent);
        });
        dispatch(setEvents(events));
      },
      error: (err) => console.log(err),
    });
    return () => unsubscribe();
  }, [dispatch]);

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
