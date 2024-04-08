import { FC } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface LoadingProps {
  inverted?: boolean;
  content?: string;
}

const LoadingComponent: FC<LoadingProps> = ({
  inverted = true,
  content = 'Loading...',
}) => {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content={content} />
    </Dimmer>
  );
};
export default LoadingComponent;
