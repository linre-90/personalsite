import React, { ReactElement, createContext, useState } from "react";
import { CookieContextType, ChildrenProps } from "../types";

// Initialise cookie context
export const CookieContext = createContext<CookieContextType>({
  cookieAccepted: false,
  acceptCookies: () => {},
});

/**
 * provides cookies accepted context to children.
 * @param param0
 * @returns
 */
export const CookieContextProvider = ({
  children,
}: ChildrenProps): ReactElement => {
  const [cookieAccepted, setCookieAccepted] = useState<boolean>(
    window.sessionStorage.getItem("videocookie") ? true : false
  );

  const acceptCookies = () => {
    window.sessionStorage.setItem("videocookie", "ok");
    setCookieAccepted(true);
  };

  return (
    <CookieContext.Provider value={{ cookieAccepted, acceptCookies }}>
      {children}
    </CookieContext.Provider>
  );
};
