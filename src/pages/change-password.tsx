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
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import * as zod from "zod";

export function ChangePassword() {
  const navigate = useNavigate();

  const ChangePasswordInputs = zod.object({
    newPassword: zod.string(),
    newPasswordConfirm: zod.string(),
  });

  type ChangePasswordInputsType = zod.infer<typeof ChangePasswordInputs>;

  const { register, handleSubmit } = useForm<ChangePasswordInputsType>({
    resolver: zodResolver(ChangePasswordInputs),
  });

  function handleCheckNewPassword(data: ChangePasswordInputsType) {
    if (data.newPassword === data.newPasswordConfirm) {
      toast.success("Senha alterada com sucesso!", {
        action: {
            label: "logar",
            onClick: () => {navigate("/")}
        }
      });
    } else {
      toast.error("Senha deve ser igual nos dois campos");
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Alterar senha</CardTitle>
          <CardDescription>Digite sua nova senha</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action=""
            className="flex gap-5 flex-col"
            onSubmit={handleSubmit(handleCheckNewPassword)}
          >
            <Input 
            placeholder="Nova senha" 
            {...register("newPassword")} 
            type="password"
            />
            <Input
              placeholder="Confirme nova senha"
              {...register("newPasswordConfirm")}
               type="password"
            />
            <Button type="submit">Mudar senha</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
