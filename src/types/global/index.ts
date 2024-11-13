export interface CalendarEvent {
  id?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  title: string;
  description?: string;
  location?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface Options {
  label: string;
  value: string;
}
export interface Additional {
  item: string;
  quantity: number;
}

export interface Reservation {
  observation: string;
  userId: string;
  reservationTime: number;
  reservationDate: string;
  workstationId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  vehiclePlate: string;
  location: {
    locationName: string;
    id: string;
  };
  locker: {
    lockerName: string;
    id: string;
  };
  lockerReservationId: string;
  room: {
    roomName: string;
    id: string;
  };
  garage: {
    garageName: string;
    id: string;
  };
  workstation: {
    stationName: string;
    id: string;
  };
  additionals: Additional[];
  lockerId: string;
}
export interface Reservations {
  data: Reservation[];
  hasNextPage: boolean;
}
