import { Email } from "@/pages/forgot-email";
import { Login } from "@/pages/login";
import { OTP } from "@/pages/otp";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </BrowserRouter>
  );
}
