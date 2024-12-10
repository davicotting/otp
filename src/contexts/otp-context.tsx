import { ReactNode } from "react";
import { createContext } from "react";

interface OTPContextProps {
  OTP: string;
}

export const OTPContext = createContext({} as OTPContextProps);

interface OTPContextProviderProps {
  children: ReactNode;
}

export function OTPContextProvider({ children }: OTPContextProviderProps) {
  const randomNumber = Math.floor(Math.random() * 90000 + 10000);

  const OTP = randomNumber.toString();

  return (
  <OTPContext.Provider value={{ OTP }}>
    {children}
    </OTPContext.Provider>
  )
}
