import { Button, MenuItem } from 'semantic-ui-react';

const SignedOutButtons = () => {
  return (
    <MenuItem position='right'>
      <Button basic inverted content='Login' />
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
