import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react';
import { AppEvent } from '../../../interfaces/event';
import culture from '/categoryImages/culture.jpg';
import drinks from '/categoryImages/drinks.jpg';
import film from '/categoryImages/film.jpg';
import food from '/categoryImages/food.jpg';
import music from '/categoryImages/music.jpg';
import travel from '/categoryImages/travel.jpg';

interface EventDetailedHeaderProps {
  event: AppEvent;
}

const EventDetailedHeader: FC<EventDetailedHeaderProps> = ({ event }) => {
  const eventImageStyle = {
    filter: 'brightness(30%)',
  };

  const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white',
  };

  const imageSrc =
    event.category === 'culture'
      ? culture
      : event.category === 'drinks'
      ? drinks
      : event.category === 'film'
      ? film
      : event.category === 'food'
      ? food
      : event.category === 'music'
      ? music
      : travel;

  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image src={imageSrc} fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={event.title}
                  style={{ color: 'white' }}
                />
                <p>{event.date}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom'>
        <Button>Cancel My Place</Button>
        <Button color='teal'>JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/manage/${event.id}`}
          color='orange'
          floated='right'
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};
export default EventDetailedHeader;
