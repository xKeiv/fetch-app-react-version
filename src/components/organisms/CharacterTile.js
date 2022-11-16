import styled from '@emotion/styled';
import Button from '../molecules/Button';
import LearnMore from '../molecules/LearnMore';
//Styling

const EvenColumns = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: space-between;
align-content: center;`

const Wrap = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;`

const Frames = styled.section`
background: inherit;
border: 2px solid #8f8846;
border-radius: 5%;
color: #464D8F;
padding: 5px;
margin: 5px;
width: 250px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;`



//General

const CharacterTile = ({ characterData }) => {

  return (
    <div>
        <Wrap>
          <Column><div><h4>General Information:</h4>
        <Frames>
          <strong>Name:</strong> { characterData.name }<br />
          <strong>Gender:</strong> { characterData.gender}<br />
          <strong>Birth Year:</strong> { characterData.birth_year}<br />
          <strong>Movies:</strong> <Button /><br />
          {/* { characterData.films }<br /> */}
        </Frames>
          </div>

        <div><h4>Appearance:</h4>
        <Frames>
          <strong>Hair Colour:</strong> { characterData.hair_color }<br />
          <strong>Eyes Colour:</strong> { characterData.eye_color }<br />
          <strong>Height:</strong> { characterData.height } cm<br />
          <strong>Mass:</strong> {characterData.mass} kg<br />
        </Frames>
        </div>
        </Column>

        <div><h4>Species Data:<Button /></h4>
        <Frames>
          <strong>Name: </strong><br />
          <strong>Classification:</strong><br />
          <strong>Designation:</strong><br />
          <strong>Average Height:</strong><br />
          <strong>Skin Colors:</strong><br />
          <strong>Hair Colors:</strong><br />
          <strong>Eye Colors:</strong><br />
          <strong>Average Lifespan:</strong><br />
          <strong>Language:</strong><br />
        </Frames>
        </div>
        </Wrap>

        <Wrap>
        <div><h4>Transportation:</h4>
        <Frames>
          Vehicles: <br />
          <Button />
          { characterData.vehicles }<br /><br />
          Starships: <br />
          <Button />
          {/* { characterData.starships }<br /> */}
        </Frames>
        </div>

        <div><h4>Homeworld: <Button /></h4>
        <LearnMore />
        </div>
        </Wrap>
    </div>
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

