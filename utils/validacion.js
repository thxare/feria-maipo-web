import { router } from "next/router";
export const validacion = (rol, setShowAlert) => {
  switch (rol) {
    case 2:
      router.push("/productor/");
      break;
    case 3:
      router.push("/cliente-externo/");
      break;
    case 4:
      router.push("/cliente-local/");
      break;
    case 5:
      router.push("/transportista/");
      break;
    default:
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      break;
  }
};
