import { Link, useParams } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/store/store';
import { FieldValues, useForm } from 'react-hook-form';

const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: 'onTouched' });

  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === id)
  );

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // id = id ?? createId();
    // event
    //   ? dispatch(updateEvent({ ...event, ...values }))
    //   : dispatch(
    //       createEvent({
    //         ...values,
    //         id,
    //         hostedBy: 'bob',
    //         attendees: [],
    //         hostPhotoURL: '',
    //       })
    //     );
    // navigate(`/events/${id}`);
  };

  return (
    <Segment clearing>
      <Header content='Event details' sub color='teal' />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          placeholder='Event title'
          defaultValue={event?.title || ''}
          {...register('title', { required: 'Title is required' })}
          error={errors.title && errors.title.message}
        />
        <Form.Input
          placeholder='Category'
          defaultValue={event?.category || ''}
          {...register('category', { required: 'Category is required' })}
          error={errors.category && errors.category.message}
        />
        <Form.TextArea
          placeholder='Description'
          defaultValue={event?.description || ''}
          {...register('description', { required: 'Description is required' })}
          error={errors.description && errors.description.message}
        />
        <Header sub content='Location details' color='teal' />
        <Form.Input
          placeholder='City'
          defaultValue={event?.city || ''}
          {...register('city', { required: 'City is required' })}
          error={errors.city && errors.city.message}
        />
        <Form.Input
          placeholder='Street'
          defaultValue={event?.street || ''}
          {...register('street', { required: 'Street is required' })}
          error={errors.street && errors.street.message}
        />
        <Form.Input
          type='date'
          placeholder='Date'
          defaultValue={event?.date || ''}
          {...register('date', { required: 'Date is required' })}
          error={errors.date && errors.date.message}
        />
        <Button
          loading={isSubmitting}
          disabled={!isValid}
          type='submit'
          floated='right'
          positive
          content='Submit'
        />
        <Button
          disabled={isSubmitting}
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
