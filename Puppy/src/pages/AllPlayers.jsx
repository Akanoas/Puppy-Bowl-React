import { fetchAllPlayers } from "../API"
import {useState, useEffect} from  "react"
import PlayerCard from "../Components/PlayerCard"
export default function AllPlayers(){
    const[players, setPlayers] = useState([])
    
    
    useEffect(() =>{
        async function fetchData(){
            const data = await fetchAllPlayers()
            setPlayers(data)
        }

        fetchData()
    }, [])
    
    
    
    return(
        <section>
            <h1>AllPlayers</h1>
            <main>
                {
                    players.map((player) =>(
                            <PlayerCard 
                                key={player.id}
                                player ={player}

                            />
        
                        )
                    )


                }
            </main>
        </section>
        

    )
}