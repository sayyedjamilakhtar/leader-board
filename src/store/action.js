import { INC, PLAYER_FORM_SUBMIT } from "./actionType";

export const onInc = (value) => {
  return {
    type: INC,
    payload: value,
  };
};

export const onPlayerFormSubmit = (value) => {
  return {
    type: PLAYER_FORM_SUBMIT,
    payload: value,
  };
};
