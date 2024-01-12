import { FC } from 'react';
import { Button, MenuItem } from 'semantic-ui-react';

interface SignedOutButtonsProps {
  setAuth: (value: boolean) => void;
}

const SignedOutButtons: FC<SignedOutButtonsProps> = ({ setAuth }) => {
  return (
    <MenuItem position='right'>
      <Button basic inverted content='Login' onClick={() => setAuth(true)} />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '0.5em' }}
      />
    </MenuItem>
  );
};
export default SignedOutButtons;
