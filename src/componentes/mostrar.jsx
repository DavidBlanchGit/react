import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mostrar.css'

const API_KEY = 'ts=1&apikey=3418a71db70f7eee5e6c7c910e41bec7&hash=a0b7109949f204ce6a7be56e4fa3ae54';
const API_URL = `https://gateway.marvel.com/v1/public/characters?${API_KEY}`;

function Mostrar() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!characters) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {characters.map(character => (
        <div key={character.id} className="card">
          <h2>{character.name}</h2>
          <img src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default Mostrar;