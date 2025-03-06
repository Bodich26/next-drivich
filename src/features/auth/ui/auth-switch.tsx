"use client";
import React from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { Button } from "@/shared";

export const AuthSwitch = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(true);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-h-[600px] overflow-y-auto p-4">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <Button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          variant="link"
          className="h-[24px] mt-1"
        >
          {isLogin ? "Create account" : "Login account"}
        </Button>
      </div>
    </div>
  );
};
