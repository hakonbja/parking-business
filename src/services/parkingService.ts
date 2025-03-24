import { httpClient } from "@/axios";
import type { ParkingService } from "@/types/ParkingService";
import type { ParkingSessionsResponse } from "@/types/ParkingSessionsResponse";
import type { ParkingSpace } from "@/types/ParkingSpace";

export const parkingService: ParkingService = {
  getSpaces: function(): Promise<Array<ParkingSpace>> {
    return new Promise((resolve, reject) => {
      httpClient.get('v1/parking/spaces/list')
        .then(response => {
          resolve(response.data.data.parkingSpaces as Array<ParkingSpace>)
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  getSessions: function(): Promise<ParkingSessionsResponse> {
    const params = new URLSearchParams({ limit: "9999" });
    return new Promise((resolve, reject) => {
      httpClient.get('v1/parking/sessions/list', { params })
        .then(response => {
          resolve(response.data.data)
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  endSession: function(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      httpClient.post('v1/parking/session/end', { parkingSession: { id } })
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
}
