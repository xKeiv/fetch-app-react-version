import React, { useState, useEffect } from 'react';
import CharacterTile from '../molecules/CharacterTile.js';
import { useParams } from 'react-router-dom';

const Character = () => {

const { id } = useParams()
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
      },
      
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, )

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <CharacterTile
      characterData={ data } />

    );
  }

  // return (
  //   <>
  //   <CharacterTile />
  //    {id}
  //   </>
  // )
}

export default Character