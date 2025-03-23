import { httpClient } from "@/axios";
import type { ParkingSpace } from "@/types/ParkingSpace";

export const parkingService = {
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
  }
}
