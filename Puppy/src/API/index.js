

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-A'

export async function fetchAllPlayers(){
    try {
        const response = await fetch( `${API_URL}/players`  );
        const result = await response.json();
        return (result.data.players);
      } catch (err) {
        console.error(err);
      }

}