import {
  Button,
  Icon,
  Item,
  ItemGroup,
  List,
  Segment,
  SegmentGroup,
} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { AppEvent } from '../../../interfaces/event';

interface EventListItemProps {
  event: AppEvent;
  selectEvent: (event: AppEvent) => void;
}

const EventListItem: React.FC<EventListItemProps> = ({
  event,
  selectEvent,
}) => {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image
              size='tiny'
              circular
              src={event.hostPhotoURL || './user.png'}
            />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>Hosted by : {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.street}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          color='teal'
          floated='right'
          content='View'
          onClick={() => selectEvent(event)}
        />
      </Segment>
    </SegmentGroup>
  );
};
export default EventListItem;
