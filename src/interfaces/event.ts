export interface AppEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  city: string;
  street: string;
  hostedBy: string;
  hostPhotoURL: string;
  isCancelled: boolean;
  attendees: Attendee[];
}

export interface Attendee {
  id: string;
  name: string;
  photoURL: string;
}
