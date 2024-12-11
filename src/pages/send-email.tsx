import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as zod from "zod";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OTPContext } from "@/contexts/otp-context";

export function Email() {
  const { OTP } = useContext(OTPContext);
  const navigate = useNavigate();
  const changeEmailInputs = zod.object({
    email: zod.string().email(),
  });

  type changeEmailInputsType = zod.infer<typeof changeEmailInputs>;

  const { register, handleSubmit } = useForm<changeEmailInputsType>({
    resolver: zodResolver(changeEmailInputs),
  });

  async function handleSendEmail(data: changeEmailInputsType) {
    const templateParams = {
      email: data.email,
      code: OTP,
    };

    try {
      await emailjs.send(
        "service_w00zak3",
        "template_dv5oloh",
        templateParams,
        "k5pQZ4EoyeSLjN769"
      );

      console.log(templateParams);
      toast.success("Email enviado com sucesso", {
        action: {
          label: "Inserir Código",
          onClick: () => {
            navigate("/otp");
          },
        },
      });
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Recuperação da senha</CardTitle>
          <CardDescription>
            Digite seu e-mail para recuperar sua senha.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSendEmail)}>
            <Input placeholder="E-mail" {...register("email")} />
            <Button type="submit" className="mt-5">
              Enviar codigo
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
