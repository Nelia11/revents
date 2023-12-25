import { ChangeEvent, FC, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

interface EventFormProps {
  setIsFormOpen: (value: boolean) => void;
}

const EventForm: FC<EventFormProps> = ({ setIsFormOpen }) => {
  const initValues = {
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
    console.log(values);
  };

  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            value={values.title}
            name='title'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            value={values.category}
            name='category'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            value={values.description}
            name='description'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            value={values.city}
            name='city'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Street'
            value={values.street}
            name='street'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            value={values.date}
            name='date'
            onChange={(e) => handleInputChange(e)}
          />
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
