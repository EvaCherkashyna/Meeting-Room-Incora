interface devices {
  deviceId: number;
  name: string;
}
export interface Rooms {
  roomId: number;
  name: string;
  floor: number;
  capacity: number;
  office_FK: number;
  devices: Array<devices>;
}
export interface InitialStateRooms {
  filter: null | string;
  floors: Array<number>;
  roomSoonestBookingsDays: any;
  roomsByFloor: Array<Array<Rooms>>;
  statuses: object;
  rooms: Array<Rooms>;
  timeStatusUdated: number;
  statusUpdatedCounter: number;
  location: string;
}
const Rooms = [
  {
    roomId: 1,
    name: "Silver room",
    floor: 1,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 2,
    name: "Golden room",
    floor: 1,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 3,
    name: "My room",
    floor: 1,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 4,
    name: "My room",
    floor: 1,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 5,
    name: "My room",
    floor: 1,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 6,
    name: "My room",
    floor: 1,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 7,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 8,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
    ],
  },
  {
    roomId: 9,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
    ],
  },
  {
    roomId: 10,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 11,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 12,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
    ],
  },
  {
    roomId: 13,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
    ],
  },
  {
    roomId: 14,
    name: "My room",
    floor: 2,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 15,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
    ],
  },
  {
    roomId: 16,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 17,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 18,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 19,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
  {
    roomId: 20,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    
    ],
  },
  {
    roomId: 21,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },

    ],
  },
  {
    roomId: 22,
    name: "My room",
    floor: 3,
    capacity: 12,
    office_FK: 1,
    devices: [
      { deviceId: 1, name: "screen" },
      { deviceId: 2, name: "board" },
      { deviceId: 3, name: "conditioner" },
      { deviceId: 4, name: "projector" },
    ],
  },
];
