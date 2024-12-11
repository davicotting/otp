import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { OTPContext } from "@/contexts/otp-context";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function OTP() {
  const navigate = useNavigate();
  const { OTP } = useContext(OTPContext);

  const [otpValue, setOtpValue] = useState("");
  const [otpConfirmed, setOtpConfirmed] = useState(false);

  function handleVerifyOTP(event: any) {
    event.preventDefault();

    if (otpValue === OTP) {
      setOtpConfirmed(true);
    } else {
      toast.error("Código invalido.");
    }

    if (otpConfirmed) {
      toast.success("Código valido!", {
        action: {
          label: "alterar minha senha",
          onClick: () => {
            navigate("/change-password");
          },
        },
      });
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Código de recuperação</CardTitle>
          <CardDescription>Insira seu código de recuperação.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(event) => handleVerifyOTP(event)}>
            <InputOTP maxLength={6} onChange={(value) => setOtpValue(value)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />

                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            <div className="mt-5">
              <Button type="submit">Alterar senha</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
