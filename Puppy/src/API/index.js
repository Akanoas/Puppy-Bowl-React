

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a`;

export async function fetchAllPlayers(){
    try {
        const response = await fetch(
           `${API_URL}/players`  
         );
        const result = await response.json();
        return (result.data.players);
      } catch (err) {
        console.error(err);
      }

}
export async function fetchPlayerById(id){
  try {
      const response = await fetch(
         `${API_URL}/players/${id}`  
       );
      const result = await response.json();
      return (result.data.players);
    } catch (err) {
      console.error(err);
    }

}