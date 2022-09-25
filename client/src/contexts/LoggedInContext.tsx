import { createContext, useState } from 'react';

type LoggedInContextObj = {
  isLoggedIn: boolean;
  id: string;
  loggedInAt: Date;
  setLoggedInStatus: (status: boolean, id: string) => void;
};

export const LoggedInContext = createContext<LoggedInContextObj | null>(null);
type Props = { children: React.ReactNode };
const LoggedInContextProvider: React.FC<Props> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [loggedInAt, setLoggedInAt] = useState<Date>(new Date());
  const setLoggedInStatus = (status: boolean, id: string) => {
    setIsLoggedIn(status);
    setId(id);
    setLoggedInAt(new Date());
  };

  const contextValue: LoggedInContextObj = {
    isLoggedIn,
    id,
    loggedInAt,
    setLoggedInStatus,
  };
  return (
    <LoggedInContext.Provider value={contextValue}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
