import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import logo from '/logo.png'

const HomePage = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            src={logo}
            size='massive'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button size='huge' inverted as={Link} to='/events'>
          Get started
          <Icon name='caret right' />
        </Button>
      </Container>
    </Segment>
  );
};
export default HomePage;
