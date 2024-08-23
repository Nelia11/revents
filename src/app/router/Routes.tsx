import { Routes, Route } from 'react-router-dom';
import App from '../layout/App';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import EventDetailedPage from '../../features/events/details/EventDetailedPage';
import EventForm from '../../features/events/form/EventForm';

export const router = (
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='events' element={<EventDashboard />} />
      <Route path='events/:id' element={<EventDetailedPage />} />
      <Route path='manage/:id' element={<EventForm />} />
      <Route path='createEvent' element={<EventForm key='create' />} />
    </Route>
  </Routes>
);
