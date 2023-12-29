import { AppEvent } from '../../../interfaces/event';
import EventListItem from './EventListItem';

interface EventListProps {
  events: AppEvent[];
  selectEvent: (event: AppEvent) => void;
  deleteEvent: (eventId: string) => void;
}

const EventList: React.FC<EventListProps> = ({
  events,
  selectEvent,
  deleteEvent,
}) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
};
export default EventList;
