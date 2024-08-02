export interface SubEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

export interface DistrictEvent {
  id: number;
  district: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  location: string;
  attendees: number;
  type: string;
  description: string;
  organizer: string;
  ticketPrice: string;
  website: string;
  tags: string[];
  b2bEvents: SubEvent[];
  districtEvents: DistrictEvent[];
}
