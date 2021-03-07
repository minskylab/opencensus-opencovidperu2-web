// types
import { COVID, PREVENTION } from "#root/constants/modes";
const SET_REGION = "profile/SET_REGION";
const SET_PROVINCIA = "profile/SET_PROVINCIA";
const SET_MODO = "profile/SET_MODO";

interface SetRegionAction {
  type: typeof SET_REGION;
  payload: string;
}

interface SetProvinciaAction {
  type: typeof SET_PROVINCIA;
  payload: string;
}

interface SetModoAction {
  type: typeof SET_MODO;
  payload: string;
}

export interface ProfileReduxState {
  provincia: string;
  region: string;
  modo: typeof COVID | typeof PREVENTION | "";
}

type ActionTypes = SetRegionAction | SetProvinciaAction | SetModoAction;

const INITIAL_STATE: ProfileReduxState = {
  provincia: "",
  region: "",
  modo: "",
};

// reducer
const profileReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case SET_PROVINCIA:
      return { ...state, provincia: action.payload };
    case SET_REGION:
      return { ...state, region: action.payload };
    case SET_MODO:
      return { ...state, modo: action.payload };
    default:
      return state;
  }
};

export default profileReducer;

// actions
export const setProvincia = (payload: string): ActionTypes => {
  return { payload, type: SET_PROVINCIA };
};

export const setRegion = (payload: string): ActionTypes => {
  return { payload, type: SET_REGION };
};

export const setModo = (payload: string): ActionTypes => {
  return { payload, type: SET_MODO };
};
