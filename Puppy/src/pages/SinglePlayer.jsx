import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"


export default function SinglePlayer(){
    const {id}= useParams();
    const [player, setPlayers] = useState ({});

    useEffect(() =>{
        async function fetchData() {
            const data = await fetchPlayerById(id);
            console.log(data);
            setPlayers(data);
        }
        fetchData();

    },[id]);
    const {name, breed, status,imageUrl, Team}= player;
    
    return(
        <div>
            <img src={imageUrl} alt={name} />
            <h2>Name : {name}</h2>
            <p>Breed : {breed} </p>
            <p> Position: {status}</p>
            <section>
                <h3>Team: {Team.name}</h3>
            </section>
        </div>

    )
}