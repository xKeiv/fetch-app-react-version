import React, { useState, useEffect } from 'react'
import { json, useParams } from 'react-router-dom';
import Button from './Button'
import styled from '@emotion/styled'

const Frames = styled.section`
background: inherit;
border: 2px solid #8f8846;
border-radius: 5%;
color: #464D8F;
padding: 5px;
margin: 5px;
width: 250px;
`

const LearnMore = ( setFrame ) => {

    const { id } = useParams()
    const [button, setButton] = useState(true)
    const [planet, setPlanet] = useState(false)

if ( button ) {

  return (
    <div>
        <button onClick={
           (e) => {
                fetch(`https://swapi.py4e.com/planets/${id}/`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setButton(false);
                        setPlanet(result.name);
                        setFrame(<Frames>
                        <strong>Orbital Period:</strong> {result.orbital_period}<br />
                        <strong>Diameter:</strong> {result.diameter}<br />
                        <strong>Climate:</strong> {result.climate}<br />
                        <strong>Gravity:</strong> {result.gravity}<br />
                        <strong>Terrain:</strong> {result.terrain}<br />
                        <strong>Surface Water:</strong> {result.surface_water}<br />
                        <strong>Population:</strong> {result.population}<br />
                      </Frames>)
                    }
                )
            }
        }>Learn More</button>
    </div>
  )
    }

    return (
        <div>
            { planet }
        </div>
    )
}

export default LearnMore