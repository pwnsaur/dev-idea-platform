import { createContext, useState } from 'react';
import { Login } from '../interfaces/interfaces';
type LoggedInContextObj = {
  login: Login;
  setLoggedInStatus: (status: boolean, id: string, date?: Date) => void;
};

export const LoggedInContext = createContext<LoggedInContextObj | null>(null);
type Props = { children: React.ReactNode };
const LoggedInContextProvider: React.FC<Props> = (props) => {
  const [login, setLogin] = useState<Login>({
    isLoggedIn: false,
    id: '',
    loggedInAt: new Date(),
  });
  const setLoggedInStatus = (status: boolean, id: string, date?: Date) => {
    setLogin({ isLoggedIn: status, id: id, loggedInAt: date || new Date() });
  };

  const contextValue: LoggedInContextObj = {
    login,
    setLoggedInStatus,
  };
  return (
    <LoggedInContext.Provider value={contextValue}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
