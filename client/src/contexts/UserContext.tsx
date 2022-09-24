import { createContext, useState } from 'react';
import { User } from '../interfaces/interfaces';

type UsersContextObj = {
  items: User[];
  addUser: (users: User[]) => void;
};

export const UsersContext = createContext<UsersContextObj>({
  items: [],
  addUser: (users: User[]) => {},
});
type Props = { children: React.ReactNode };
const UsersContextProvider: React.FC<Props> = (props) => {
  const [users, setUsers] = useState<User[]>([]);
  const addUserHandler = (users: User[]) => {
    const newUsers: User[] = users;
    setUsers((prevUsers) => {
      return (prevUsers = [...prevUsers, ...newUsers]);
    });
  };
  const contextValue: UsersContextObj = {
    items: users,
    addUser: addUserHandler,
  };
  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
