const CharacterTile = () => {
  return (
    <div style={even_columns}>
        <section style={styling}>
        Name: Luke Skywalker<br />
        Hair Colour: None<br />
        Eyes Colour: None<br />
        Planet: None<br />
        Vehicles: None<br />
        Starships: None<br />
        Movies: None<br />
        </section>

        <section style={styling}>
        Name: Leia Skywalker<br />
        Hair Colour: None<br />
        Eyes Colour: None<br />
        Planet: None<br />
        Vehicles: None<br />
        Starships: None<br />
        Movies: None<br />
        </section>

        <section style={styling}>
        Name: Leia Skywalker<br />
        Hair Colour: None<br />
        Eyes Colour: None<br />
        Planet: None<br />
        Vehicles: None<br />
        Starships: None<br />
        Movies: None<br />
        </section>
    </div>
  )
}

const styling = {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px",
    margin: "5px",
    maxWidth: "170px",
}

const even_columns = {
    display: "grid",
    gap: "1rem",
}

export default CharacterTile