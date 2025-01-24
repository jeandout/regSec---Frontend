import config from "../config";

const backend = config.API_URL;


const FetchMapData = async (token, endpoint) => {
  try {
console.log(backend+endpoint);
    const response = await fetch(backend+endpoint, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des ${endpoint}`);
    }
    const data = await response.json();
    return data; // Retourne les données récupérées
  } catch (err) {
    console.error(`Erreur dans fetch ${endpoint} :`, err.message);
    throw err; // Propagation de l'erreur
  }
};

export default FetchMapData;
