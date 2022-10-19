import Head from "next/head";
import { useEffect } from "react";
import { Login } from "../components/login/Login";

export default function LoginPage() {

  useEffect(() => {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button";
    window.onhashchange = function () {
      window.location.hash = "no-back-button";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Maipo Grande - Login</title>
      </Head>
      <Login />
    </>
  );
}
