import { AppEvent } from '../../../interfaces/event';
import EventListItem from './EventListItem';

interface EventListProps {
  events: AppEvent[];
  selectEvent: (event: AppEvent) => void
}

const EventList: React.FC<EventListProps> = ({ events, selectEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} selectEvent={selectEvent}/>
      ))}
    </>
  );
};
export default EventList;
