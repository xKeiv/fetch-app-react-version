import styled from '@emotion/styled';

//Styling

const EvenColumns = styled.div`
display: grid;
gap: 1rem;
`

const Frames = styled.section`
border: 1px solid black;
border-radius: 5px;
padding: 5px;
margin: 5px;
max-width: 170px;
`

//General

const CharacterTile = () => {
  return (
    <EvenColumns>
        <Frames>
        Name: Luke Skywalker<br />
        Hair Colour: None<br />
        Eyes Colour: None<br />
        Planet: None<br />
        Vehicles: None<br />
        Starships: None<br />
        Movies: None<br />
        </Frames>

        <Frames>
        Name: Leia Skywalker<br />
        Hair Colour: None<br />
        Eyes Colour: None<br />
        Planet: None<br />
        Vehicles: None<br />
        Starships: None<br />
        Movies: None<br />
        </Frames>

        <Frames>
        Name: Leia Skywalker<br />
        Hair Colour: None<br />
        Eyes Colour: None<br />
        Planet: None<br />
        Vehicles: None<br />
        Starships: None<br />
        Movies: None<br />
        </Frames>
    </EvenColumns>
  )
}

export default CharacterTile


// const styling = {
//     border: "1px solid black",
//     borderRadius: "5px",
//     padding: "5px",
//     margin: "5px",
//     maxWidth: "170px",
// }

// const even_columns = {
//   display: "grid",
//   gap: "1rem",
// }

