export default function PlayerCard(player){
    const {id, name, breed, imageUrl}= player;
    return (
        <div className="playerCard" key={id}>
            <h2>name:{name}</h2>
            <p>breed:{breed} </p>
            <img src = {imageUrl} alt={name} />
        
        </div>
    )

}