import { Button, Form, Label } from 'semantic-ui-react';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/store/store';
import { closeModal } from '../../app/common/modals/modalSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../app/config/firebase';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting, isValid, isDirty, errors },
  } = useForm({ mode: 'onTouched' });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      dispatch(closeModal());
    } catch (error: any) {
      setError('root.serverError', {
        type: '400', message: error.message
      });
    }
  };

  
  const handleInputChange = () => {
    clearErrors('root.serverError');
  };

  return (
    <ModalWrapper header='Sign into re-vents'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          defaultValue=''
          placeholder='Email adress'
          {...register('email', {
            required: true,
            pattern:
              /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/,
          })}
          error={
            (errors.email?.type === 'required' && 'Email is required') ||
            (errors.email?.type === 'pattern' && 'Email is invalid')
          }
          onChange={handleInputChange}
        />
        <Form.Input
          type='password'
          defaultValue=''
          placeholder='Password'
          {...register('password', { required: true })}
          error={errors.password && 'Password is required'}
          onChange={handleInputChange}
        />
        {errors.root && (
          <Label 
            basic color='red' 
            style={{ display: 'block', marginBottom: 10 }} 
            content={errors.root.serverError.message}
          />
        )}
        <Button
          loading={isSubmitting}
          disabled={!isValid || !isDirty || isSubmitting}
          type='submit'
          fluid
          size='large'
          color='teal'
          content='Login'
        />
      </Form>
    </ModalWrapper>
  );
};
export default LoginForm;
