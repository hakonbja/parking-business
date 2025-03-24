export interface ParkingSession {
  parkingSessionId: string;
  parkingSpaceId: number;
  isSessionEnded: boolean;
  sessionLengthInHoursMinutes: number;
  sessionStartedAt: string;
  sessionEndedAt: string;
  vehicleLicensePlate: string;
  vehicleType: 'CAR' | 'MOTOR';
}
