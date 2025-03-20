import { httpClient } from '@/axios';
import type { UserService } from '@/types/UserService';

export const userService: UserService = {
  isUserLoggedIn: function(): Promise<boolean> {
    return new Promise((resolve) => {
      httpClient.get('v1/auth/me')
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false)
      })
    });
  },
  login: function(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      httpClient.post('v1/auth/password', {
        email,
        password,
      })
        .then(response => {
          const authToken =  'Bearer ' + response.data.data.auth.accessToken;
          localStorage.setItem('authToken', authToken);
          httpClient.defaults.headers.common['Authorization'] = authToken;
          resolve(true)
        })
        .catch(() => {
          resolve(false)
        })
    });
  },
  logout: function(): void {
    localStorage.removeItem('authToken')
    httpClient.defaults.headers.common['Authorization'] = null;
  }
}
