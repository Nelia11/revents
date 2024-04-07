import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { sampleData } from '../../app/api/sampleData';
import { AppEvent } from '../../interfaces/event';
import { Timestamp } from 'firebase/firestore';

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
    setEvents: {
      reducer: (state, action: PayloadAction<AppEvent[]>) => {
        state.events = action.payload;
      },
      prepare: (events: any) => {
        const mapped = events.map((e: any) => {
          return {
            ...e,
            date: new Timestamp(
              Number(e.date.seconds),
              Number(e.date.nanoseconds)
            )
              .toDate()
              .toISOString(),
          };
        });
        return { payload: mapped };
      },
    },
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

export const { createEvent, updateEvent, deleteEvent, setEvents } =
  eventsSlice.actions;
