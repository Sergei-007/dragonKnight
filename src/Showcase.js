import DragonNight from "./images/Dragonite.full.3672397.png";
function Showcase() {
  let favPokemon = `DragonNight`;
  const pokeCharacteristics = {
    type: "Dragon",
    move: "Hurricane"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={DragonNight} alt={favPokemon}></img>
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ background: "blue", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ background: "white", color: "orange" }}>
          {pokeCharacteristics.move}
        </span>
        .
      </h2>
    </div>
  );
}

export default Showcase;
