import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from '../../app/api/sampleData';
import { AppEvent } from '../../interfaces/event';

interface Events {
  events: AppEvent[];
}

const initialState: Events = {
  events: sampleData,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export default eventsSlice;
