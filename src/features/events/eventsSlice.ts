import { PayloadAction } from '@reduxjs/toolkit';
import { AppEvent } from '../../interfaces/event';
import { Timestamp } from 'firebase/firestore';
import {
  GenericActions,
  GenericState,
  createGenericSlice,
} from '../../app/store/genericSlice';

interface Events {
  data: AppEvent[];
}

const initialState: Events = {
  data: [],
};

export const eventsSlice = createGenericSlice({
  name: 'events',
  initialState: initialState as GenericState<AppEvent[]>,
  reducers: {
    success: {
      reducer: (state, action: PayloadAction<AppEvent[]>) => {
        state.data = action.payload;
        state.status = 'finished';
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

export const actions = eventsSlice.actions as GenericActions<AppEvent[]>;
