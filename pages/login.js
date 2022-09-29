import Head from "next/head";
import { useEffect } from "react";
import { Login } from "../components/login/Login";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { asPath } = useRouter();

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
