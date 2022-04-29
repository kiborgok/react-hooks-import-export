import React from "react";
import howManyParks from "./parks/howManyParks";
import { elevation, trees, wildlife } from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  console.log(trees);
  wildlife();
  elevation();
  howManyParks(); // => "42 parks!"

  return (
    <>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </>
  );
}

export default ColoradoStateParks;
