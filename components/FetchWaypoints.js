import config from "../config";

const backend = config.API_URL;


const FetchWaypoint = async (token) => {
  try {
    // const response = await fetch(`${backend}/itineraries/waypoints`);
    const response = await fetch(`${backend}/itineraries/waypoints`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des points');
    }
    const data = await response.json();
    return data; // Retourne les données récupérées
  } catch (err) {
    console.error('Erreur dans FetchWaypoint :', err.message);
    throw err; // Propagation de l'erreur
  }
};

export default FetchWaypoint;
