import Head from "next/head";
import { Login } from "../components/loginCard/Login";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Maipo Grande - Login</title>
      </Head>
      <Login />
    </>
  );
}
