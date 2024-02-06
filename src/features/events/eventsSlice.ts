import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from '../../app/api/sampleData';
import { AppEvent } from '../../interfaces/event';

interface Events {
  events: AppEvent[];
}

const initialState: Events = {
  events: sampleData,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent: (state, action) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action) => {
      state.events[
        state.events.findIndex((evt) => evt.id === action.payload.id)
      ] = action.payload;
    },
    deleteEvent: (state, action) => {
      state.events.splice(
        state.events.findIndex((evt) => evt.id === action.payload),
        1
      );
    },
  },
});

export const { createEvent, updateEvent, deleteEvent } = eventsSlice.actions;
