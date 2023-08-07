import { useState } from "react"
import { createNewPlayer } from "../API"

export default function NewPlayerForm({ fetchAllPlayers }) {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [status, setStatus] = useState('field')
  const [teamId, setTeamId] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    const newPlayer = {
      name,
      breed,
      imageUrl,
      status,
      teamId
    }
    await createNewPlayer(newPlayer)
    setName('')
    setBreed('')
    setImageUrl('')
    setStatus('field')
    setTeamId('')
    fetchAllPlayers()
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Player Form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="breed">Breed</label>
      <input
        type="text"
        id="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <label htmlFor="imageUrl">Image URL</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="field">Field</option>
        <option value="bench">Bench</option>
      </select>
      <label htmlFor="team">Team ID</label>
      <input
        type="text"
        id="team"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}