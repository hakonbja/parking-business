import { httpClient } from '@/axios';
import { useUserStore } from '@/stores/user';
import type { UserService } from '@/types/UserService';

export const userService: UserService = {
  isUserLoggedIn: function(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      httpClient.get('v1/auth/me')
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        if (error.status === 401) {
          resolve(false)
        }

        reject(error);
      })
    });
  },
  login: function(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      httpClient.post('v1/auth/password', {
        email,
        password,
      })
        .then(response => {
          const authToken =  'Bearer ' + response.data.data.auth.accessToken;
          localStorage.setItem('authToken', authToken);
          httpClient.defaults.headers.common['Authorization'] = authToken;
          useUserStore().isAuthenticated = true;
          resolve(true)
        })
        .catch((error) => {
          if (error.status === 401) {
            resolve(false)
          }

          reject(error)
        })
    });
  },
  logout: function(): void {
    localStorage.removeItem('authToken')
    httpClient.defaults.headers.common['Authorization'] = null;
    useUserStore().isAuthenticated = false;
  }
}
