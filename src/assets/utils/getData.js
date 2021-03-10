const API = 'https://rickandmortyapi.com/api/character/'

const GET_DATA = async (id) => {
  const API_URL = id ? `${API}${id}` : API

  try {
    const RESPONSE = await fetch(API_URL),
          DATA = await RESPONSE.json()
    
    return DATA
  } catch (error) {
    console.error('ERROOOOOOOOOOR: ', error)
  }
} 

export default GET_DATA