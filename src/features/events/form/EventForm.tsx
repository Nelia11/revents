import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/store/store';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { categoryOptions } from './categoryOptions';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { createId } from '@paralleldrive/cuid2';
import { createEvent, updateEvent } from '../eventsSlice';

const EventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: 'onTouched' });

  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === id)
  );

  const onSubmit = (data: FieldValues) => {
    id = id ?? createId();
    event
      ? dispatch(updateEvent({ ...event, ...data, data: data.date.toString() }))
      : dispatch(
          createEvent({
            ...data,
            id,
            hostedBy: 'bob',
            attendees: [],
            hostPhotoURL: '',
            data: data.date.toString(),
          })
        );
    navigate(`/events/${id}`);
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
        <Controller
          name='category'
          control={control}
          rules={{ required: 'Category is required' }}
          defaultValue={event?.category}
          render={({ field }) => (
            <Form.Select
              options={categoryOptions}
              placeholder='Category'
              clearable
              {...field}
              onChange={(_, d) =>
                setValue('category', d.value, { shouldValidate: true })
              }
              error={errors.category && errors.category.message}
            />
          )}
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
        <Form.Field>
          <Controller
            name='date'
            control={control}
            rules={{ required: 'Date is required' }}
            defaultValue={(event && new Date(event.date)) || null}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(value) =>
                  setValue('date', value, { shouldValidate: true })
                }
                showTimeSelect
                timeCaption='time'
                dateFormat='MMM d, yyyy h:mm aa'
                placeholderText='Event date and time'
              />
            )}
          />
        </Form.Field>
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
