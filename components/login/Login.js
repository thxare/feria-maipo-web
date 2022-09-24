import React from "react";

import { LoginForm } from "./LoginForm";
import { LoginLogo } from "./LoginLogo";

export const Login = () => {
  return (
    <div className="flex justify-center bg-gray-200 h-screen">
      <div className="block md:p-8 md:pt-4 p-6 rounded-lg shadow-lg bg-white sm:w-8/12 md:w-6/12 lg:w-4/12 w-10/12 my-auto h-auto">
        <LoginLogo />
        <LoginForm />
      </div>
    </div>
  );
};
