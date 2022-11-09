import React, { useState, useEffect } from 'react';
import CharacterTile from '../organisms/CharacterTile.js';
import { useParams } from 'react-router-dom';
import Loader from '../atoms/Loader.js';
import styled from '@emotion/styled';


const Character = () => {

const CharacterBg = styled.div`
background: #DBDBD7;
color: #464D8F;
width: 100vw;
height: 100vh;`

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
  }, [id])

  if (error) {
    return <CharacterBg>
      Error: {error.message}
      </CharacterBg>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <CharacterBg>
        <CharacterTile
        characterData={ data }
        />
      </CharacterBg>
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