import type { ParkingSession } from "./ParkingSession";

export interface ParkingSessionsResponse {
  parkingSessions: Array<ParkingSession>;
  parkingSessionsTotalCount: number;
}
