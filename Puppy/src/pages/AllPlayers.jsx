import { useState, useEffect } from "react"
import { fetchAllPlayers } from "../API"
import PlayerCard from "../Components/PlayerCard"
import NewPlayerForm from "../Components/NewPlayerForm"

export default function AllPlayers() {
  const [players, setPlayers] = useState([])
  const [filteredPlayers, setFilteredPlayers] = useState([])
  async function fetchData() {
    const data = await fetchAllPlayers()
    setPlayers(data)
    setFilteredPlayers(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    const search = e.target.value
    const filteredPlayers = players.filter((player) => {
      return player.name.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredPlayers(filteredPlayers)
  }
  return (
    <>
      <NewPlayerForm fetchAllPlayers={fetchData}/>
      <section>
        <h1>All Players</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input onChange={handleSubmit} type="text" id="search" />
        </form>
        <main>
          {
            filteredPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                fetchAllPlayers={fetchData}
              />
            ))
          }
        </main>
      </section>
    </>
  )
}