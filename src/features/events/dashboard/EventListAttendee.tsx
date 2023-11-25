import { Image, List } from 'semantic-ui-react';
import { Attendee } from '../../../interfaces/event';

interface EventListAttendeeProps {
  attendee: Attendee;
}

const EventListAttendee: React.FC<EventListAttendeeProps> = ({ attendee }) => {
  return (
    <List.Item>
      <Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  );
};
export default EventListAttendee;
