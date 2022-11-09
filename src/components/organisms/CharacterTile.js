import styled from '@emotion/styled';
import Button from '../molecules/Button';
//Styling

const EvenColumns = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
align-content: center;
`

const Wrap = styled.div`
flex-wrap: wrap;
flex-direction: column;`

const Frames = styled.section`
background: inherit;
border: 2px solid #8f8846;
border-radius: 5%;
color: #464D8F;

padding: 5px;
margin: 5px;

width: 250px;
`



//General

const CharacterTile = ({ characterData }) => {

  return (
    <EvenColumns>
        <Wrap>
          <h4>General Information:</h4>
        <Frames>
          Name: { characterData.name }<br />
          Birth Year: { characterData.birth_year}<br />
          Planet: <Button /><br/>
          {/* { characterData.homeworld }<br /> */}
          Movies: <Button /><br />
          {/* { characterData.films }<br /> */}
        </Frames>

        <h4>Appearance:</h4>
        <Frames>
          <strong>Species:</strong> { characterData.species }<br />
          <strong>Hair Colour:</strong> { characterData.hair_color }<br />
          <strong>Eyes Colour:</strong> { characterData.eye_color }<br />
          <strong>Height:</strong> { characterData.height } cm<br />
          <strong>Mass:</strong> {characterData.mass} kg<br />
        </Frames>

        <h4>Transportation:</h4>
        <Frames>
          Vehicles: <br />
          <Button />
          {/* { characterData.vehicles }<br /> */}<br />
          Starships: <br />
          <Button />
          {/* { characterData.starships }<br /> */}
        </Frames>
        </Wrap>

        <Wrap>
        <h4>Species Data:</h4>
        <Frames>
          <strong>Name: </strong>Human,<br />
          <strong>Classification: </strong>Mammal,<br />
          <strong>Designation: </strong>Sentient<br />
          <strong>Average Height: </strong>180,<br />
          <strong>Skin Colors: </strong>Caucasian, Black, Asian, Hispanic<br />
          <strong>Hair Colors: </strong>Blonde, Brown, Black, Red",<br />
          <strong>Eye Colors: </strong>Brown, Blue, Breen, Hazel, Grey, Amber",<br />
          <strong>Average Lifespan: </strong>120,<br />
          <strong>Homeworld: </strong><Button /><br />
          <strong>Language: </strong>Galactic Basic,<br />
        </Frames>
        
        <h4>Homeplanet Data: PlName</h4>
        <Frames>
          <strong>Orbital Period:</strong><br />
          <strong>Diameter:</strong><br />
          <strong>Climate:</strong><br />
          <strong>Gravity:</strong><br />
          <strong>Terrain:</strong><br />
          <strong>Surface Water:</strong><br />
          <strong>Population:</strong><br />
          

        </Frames>

        </Wrap>
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

