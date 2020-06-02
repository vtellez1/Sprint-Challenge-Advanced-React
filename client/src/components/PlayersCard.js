import React from 'react';

const PlayersCard = props => {

console.log(props.players);

return( 
    <div className="PlayersCardContainer">
        
        <div className="PlayersCard">
       {props.players.map(person => (
           <div key={person.id}>
               <h3 data-testid="name">Name: {person.name}</h3>
               <p>Country: {person.country}</p>
               <p>Searches: {person.searches}</p>
            </div>
       ))}
        </div>
    </div>
    )
}
export default PlayersCard;