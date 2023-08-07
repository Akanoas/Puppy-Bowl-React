import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import {fetchPlayerById} from "../API";
import { Link } from "react-router-dom";

export default function SinglePlayer(){
    const {id}= useParams();
    const [player, setPlayers] = useState (null);

    useEffect(() =>{
        async function fetchData() {
            const data = await fetchPlayerById(id);
            console.log(data);
            setPlayers(data);
        }
        fetchData();

    },[id]);
    if (!player){
        return <h1>Loading...</h1>
    }
    console.log(player);
    const {name, breed, status,imageUrl, Team}= player;
    
    return(
        <>
            <Link to= '/'>Back to all Player</Link>
            <div>
                <img src={imageUrl} alt={name} />
                <h2>Name : {name}</h2>
                <p>Breed : {breed} </p>
                <p> Position: {status}</p>
                {Team &&
                    <section>   
                        <h3>Team: {Team.name}</h3>
                    </section>
                }
            </div>
        </>
    )
}