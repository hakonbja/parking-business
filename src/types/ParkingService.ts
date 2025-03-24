import type { ParkingSessionsResponse } from "./ParkingSessionsResponse";
import type { ParkingSpace } from "./ParkingSpace";

export interface ParkingService {
  getSpaces: () => Promise<Array<ParkingSpace>>;
  getSessions: () => Promise<ParkingSessionsResponse>;
  endSession: (id: string) => Promise<void>;
}
