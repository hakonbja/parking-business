export interface UserService {
  isUserLoggedIn: () => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}
