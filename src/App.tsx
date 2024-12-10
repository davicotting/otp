
import { Router } from "./routes";
import { Toaster } from "sonner";
import { OTPContextProvider } from "./contexts/otp-context"; 

export function App() {

  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-900 text-muted">
     <OTPContextProvider>
      <Router/>
      <Toaster />
      </OTPContextProvider>
    </div>
  )
}

