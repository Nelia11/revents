import { Button, MenuItem } from 'semantic-ui-react';
import { useAppDispatch } from '../../store/store';
import { openModal } from '../../common/modals/modalSlice';

const SignedOutButtons = () => {
  const dispatch = useAppDispatch();

  return (
    <MenuItem position='right'>
      <Button
        basic
        inverted
        content='Login'
        onClick={() => dispatch(openModal({ type: 'LoginForm' }))}
      />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '0.5em' }}
        onClick={() => dispatch(openModal({ type: 'RegisterForm' }))}
      />
    </MenuItem>
  );
};
export default SignedOutButtons;
