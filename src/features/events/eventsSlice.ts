import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppEvent } from '../../interfaces/event';
import { Timestamp } from 'firebase/firestore';

interface Events {
  events: AppEvent[];
}

const initialState: Events = {
  events: [],
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
        let eventArr: AppEvent[] = [];
        Array.isArray(events) ? (eventArr = events) : eventArr.push(events);
        const mapped = eventArr.map((e: any) => {
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
  },
});

export const { setEvents } = eventsSlice.actions;
