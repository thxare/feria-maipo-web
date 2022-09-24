import React from "react";
import Image from "next/image";

export const LoginLogo = () => {
  return (
    <div className="mx-auto w-44 h-44 my-2">
      <Image
        width="200"
        height="200"
        src="/feria-logo.png"
        alt="Logo Feria Maipo Grande"
      />
    </div>
  );
};
