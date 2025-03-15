"use client";
import React from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

export const AuthSwitch = () => {
  const [isActive, setIsActive] = React.useState<boolean>(true);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-h-[600px] overflow-y-auto p-4">
        {isActive ? (
          <LoginForm setActive={() => setIsActive(!isActive)} />
        ) : (
          <RegisterForm setActive={() => setIsActive(!isActive)} />
        )}
      </div>
    </div>
  );
};
