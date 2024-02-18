import { IUser } from "../../app/types/user"

export const database = {
  getUsers: async (): Promise<IUser[]> => {
    return [
      { username: "testuser", email: "testmail@gmail.com", balance: 12345, createdAt: 1708241031000 },
      { username: "testuser1", email: "testmail1@gmail.com", balance: 54321, createdAt: 1708241031000 },
      { username: "testuser2", email: "testmail2@gmail.com", balance: 12340, createdAt: 1708241031000 },
      { username: "testuser3", email: "testmail3@gmail.com", balance: 43210, createdAt: 1708241031000 },
      { username: "testuser4", email: "testmail4@gmail.com", balance: 22222, createdAt: 1708241031000 },
      { username: "testuser5", email: "testmail5@gmail.com", balance: 11111, createdAt: 1708241031000 },
      { username: "testuser6", email: "testmail6@gmail.com", balance: 55555, createdAt: 1708241031000 },
      { username: "testuser7", email: "testmail7@gmail.com", balance: 66666, createdAt: 1708241031000 },
      { username: "testuser8", email: "testmail8@gmail.com", balance: 12121, createdAt: 1708241031000 },
      { username: "testuser9", email: "testmail9@gmail.com", balance: 31313, createdAt: 1708241031000 },
    ]
  }
}