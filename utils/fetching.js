import axios from "axios";

const api = `https://api-feria-web-production.up.railway.app/api/subastas`;

export const getSubastas = async () => {
  try {
    const response = await axios.get(api);
    //console.log(response)
    return response;
  } catch (error) {
    return { error: error };
  }
};

export const getOneSubasta = async (id) => {
  const url = `https://api-feria-web-production.up.railway.app/api/subastas/${id}`;
  try {
    if (id === undefined) return null;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getTransportes = async (idUsuario) => {
  try {
    const { data } = await axios.get(
      "https://api-feria-web-production.up.railway.app/api/transportes/"
    );
    const transportesFiltrados = data.filter(
      (transporte) => transporte.id_usuario === idUsuario
    );
    return transportesFiltrados;
  } catch (error) {
    console.log(error)
  }
};
