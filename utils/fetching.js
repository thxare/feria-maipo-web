import axios from "axios";

const api = `https://api-feria-web-production.up.railway.app/api/subastas`;

export const getSubastas = async () => {
  try {
    const response = await axios.get(api);
    //console.log(response)
    return response
  } catch (error) {
    return { error: error };
  }
};
