
import { Link } from "react-router-dom";
export default function PlayerCard(player){
    const {id, name, breed, imageUrl}= player;
    return (
        <div className="playerCard" key={id}>
            <h2>name:{name}</h2>
            <p>breed:{breed} </p>
            <img src = {imageUrl} alt={name} />
            <div>
                <Link className="linkButton" to = {'./players/${id}'}> View Player </Link>
                <button>Delete Player</button>
            </div>
        
        </div>
    )

}