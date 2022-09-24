import { createContext, useState } from 'react';

type LoggedInContextObj = {
  isLoggedIn: boolean;
  setLoggedInStatus: (status: boolean) => void;
};

export const LoggedInContext = createContext<LoggedInContextObj | null>(null);
type Props = { children: React.ReactNode };
const LoggedInContextProvider: React.FC<Props> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const setLoggedInStatus = (status: boolean) => {
    setIsLoggedIn(status);
  };

  const contextValue: LoggedInContextObj = {
    isLoggedIn,
    setLoggedInStatus,
  };
  return (
    <LoggedInContext.Provider value={contextValue}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
