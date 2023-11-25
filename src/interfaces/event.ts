export interface AppEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  city: string;
  venue: string;
  hostedBy: string;
  hostPhotoURL: string;
  attendees: Attendee[];
}

export interface Attendee {
  id: string;
  name: string;
  photoURL: string;
}
