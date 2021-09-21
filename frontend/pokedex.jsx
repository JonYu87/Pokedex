import React from "react";
import ReactDOM from "react-dom";
import { fetchAllPokemon } from "./util/api_util";
import { receiveAllPokemon } from "./actions/pokemon_actions";


document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hello Poke-World</h1>, root);

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
});
