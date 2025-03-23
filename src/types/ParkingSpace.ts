export interface ParkingSpace {
  parkingSpaceId: number;
  isOccupied: boolean;
  occupancy:	number;
  capacity: number
  vehicleType: 'car' | 'motor' | null,
}
