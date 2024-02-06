import { ChangeEvent, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/store/store';
import { useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventsSlice';
import { createId } from '@paralleldrive/cuid2';

const EventForm = () => {
  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initValues = event ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    street: '',
    date: '',
  };

  const [values, setValues] = useState(initValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    id = id ?? createId();
    event
      ? dispatch(updateEvent({ ...event, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id,
            hostedBy: 'bob',
            attendees: [],
            hostPhotoURL: '',
          })
        );
    navigate(`/events/${id}`);
  };

  return (
    <Segment clearing>
      <Header content={event ? 'Update event' : 'Create event'} />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            value={values.title}
            name='title'
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            value={values.category}
            name='category'
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            value={values.description}
            name='description'
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            value={values.city}
            name='city'
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Street'
            value={values.street}
            name='street'
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            value={values.date}
            name='date'
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link}
          to={'/events'}
          type='button'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};
export default EventForm;
