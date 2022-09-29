import { router } from "next/router";
export const validacion = async (rol) => {
   switch (rol) {
    case 2:
      await router.push("/productor/");
      break;
    case 3:
      await router.push("/cliente-externo/");
      break;
    case 4:
      await router.push("/cliente-local/");
      break;
    case 5:
      await router.push("/transportista/");
      break;
    default:
      await console.log("Algo está mal");
      break;
  }
};
