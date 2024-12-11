import { Email } from "@/pages/send-email";
import { Login } from "@/pages/login";
import { OTP } from "@/pages/otp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChangePassword } from "@/pages/change-password";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/change-password" element={<ChangePassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}
