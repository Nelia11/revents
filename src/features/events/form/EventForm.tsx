import { FC } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

interface EventFormProps {
  setIsFormOpen: (value: boolean) => void;
}

const EventForm: FC<EventFormProps> = ({ setIsFormOpen }) => {
  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='Event title' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Street' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Date' />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          type='button'
          floated='right'
          content='Cancel'
          onClick={() => setIsFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};
export default EventForm;
