import { INC, PLAYER_FORM_SUBMIT } from "./actionType";

export const initState = {
  counter: 0,
  players: [
    {
      name: "Atul",
      score: 25,
    },
  ],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, counter: state.counter + action.payload };
    case PLAYER_FORM_SUBMIT:
      return { ...state, players: [...state.players, action.payload] };
    default:
      return state;
  }
};
