import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Digite seu e-mail e senha para entrar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </div>
          <div className="flex items-center justify-end mt-2">
            <Link to="/email" className="text-xs hover:underline">
              Esqueci minha senha
            </Link>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Logar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
