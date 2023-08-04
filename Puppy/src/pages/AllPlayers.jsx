import { fetchAllPlayers } from "../API"
import {useState, useEffect} from  "react"

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
        <div>
            <h1>AllPlayers</h1>

            {
                players.map(player => {
                    <div key={ player.key}>
                        <h2>name:{player.name}</h2>
                        <p>breed:{player.breed} </p>
                        <img src = {player.image} alt={players[0].name} />
                    </div>
                })


            }

        </div>

    )
}