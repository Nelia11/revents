import { AppEvent } from '../../../interfaces/event';
import EventListItem from './EventListItem';

interface EventListProps {
  events: AppEvent[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};
export default EventList;
