import { router } from "next/router";
export const validacion = (rol) => {
  if (rol === 2) {
    return router.push("/productor/");
  } else if (rol === 3) {
    return router.push("/cliente-externo/");
  } else if (rol === 4) {
    return router.push("/cliente-local/");
  } else if (rol === 5) {
    return router.push("/transportista/");
  } else {
    return console.log("Algo está mal");
  }
};
