import { createContext, useState, useMemo } from 'react';
import { User } from '../interfaces/interfaces';

type UsersContextObj = {
  items: User[];
  addUser: (users: User[]) => void;
  findUserById: (id: string) => User;
};

export const UsersContext = createContext<UsersContextObj | null>(null);
type Props = { children: React.ReactNode };
const UsersContextProvider: React.FC<Props> = (props) => {
  const [users, setUsers] = useState<User[]>([]);
  const addUserHandler = (users: User[]) => {
    const newUsers: User[] = users;
    setUsers(newUsers);
  };
  const findUserById = (id: string) => {
    return users.filter((user) => user._id === id)[0];
  };
  const contextValue = useMemo(
    () => ({
      items: users,
      addUser: addUserHandler,
      findUserById,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [users],
  );
  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
