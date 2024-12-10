import { Button } from "@/components/ui/button";
import { useContext } from "react";
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

import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export function OTP() {
  const { OTP } = useContext(OTPContext);

  const OTPInputs = zod.object({
    OTPInput_1: zod.string().min(1).max(1),
    OTPInput_2: zod.string().min(1).max(1),
    OTPInput_3: zod.string().min(1).max(1),
    OTPInput_4: zod.string().min(1).max(1),
    OTPInput_5: zod.string().min(1).max(1),
    OTPInput_6: zod.string().min(1).max(1),
  })

  type OTPInputsType = zod.infer<typeof OTPInputs>

  const { register, handleSubmit } = useForm<OTPInputsType>({
    resolver: zodResolver(OTPInputs)
  })

  function handleVerifyOTP(data: OTPInputsType){
    console.log(data)
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Código de recuperação</CardTitle>
          <CardDescription>Insira seu código de recuperação.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleVerifyOTP)}>
            <InputOTP maxLength={6} >
              <InputOTPGroup >
                <InputOTPSlot index={0} {...register("OTPInput_1")}/>
                <InputOTPSlot index={1} {...register("OTPInput_2")}/>
                <InputOTPSlot index={2} {...register("OTPInput_3")} />

                <InputOTPSlot index={3} {...register("OTPInput_4")}/>
                <InputOTPSlot index={4} {...register("OTPInput_5")}/>
                <InputOTPSlot index={5} {...register("OTPInput_6")}/>
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
