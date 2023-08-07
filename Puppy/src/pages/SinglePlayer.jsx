import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { fetchPlayerById } from "../API";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchPlayerById(id);
      setPlayer(data);
    }
    fetchData();
  }, [id]);
  if (!player) {
    return <h1>Loading...</h1>
  }
  console.log(player);
  const { name, breed, imageUrl, status, team } = player;
  return (
    <>
      <Link to='/'>Back to All Players</Link>
      <div className="single-player">
        <img src={imageUrl} alt={name} />
        <h2>Name: {name}</h2>
        <p>Breed: {breed}</p>
        <p>Position: {status}</p>
        { team &&
          <section>
            <h3>Team: {team.name}</h3>
          </section>
        }
      </div>
    </>
  )
}