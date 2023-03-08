const initialState = [];

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case "characters/charactersAdded": {
      return [...state, action.payload];
    }
    case "characters/characterShow": {
      const indexToShow = state.findIndex(ele => ele.id === action.payload)
      return state[indexToShow]
    }
    case "characters/characterDeleted": {
      console.log("action.payload  of characterDeleted", action.payload);
      return state.filter((character) => character.id !== action.payload);
    }
    case "characters/charactersLoaded": {
      return action.payload;
    }
    case "characters/newCharacterCreated": {
      console.log('ACTION PAYLOAD IN CREATED ', action.payload)
      return [...state, action.payload];
    }

    case "characters/editCharacter": {
      console.log('first   ', action.payload.id)
      const indexToEdit = state.findIndex(ele => ele.id === parseInt(action.payload.id))
      console.log(state[indexToEdit])
      const newState = [ ...state];
      newState[indexToEdit] = action.payload


      return newState



    }
    default:
      return state;
  }
}

export async function fetchCharacters(dispatch) {
  const response = await fetch("http://localhost:3010/madeuppeople/");
  const res = await response.json();
  dispatch({ type: "characters/charactersLoaded", payload: res });
}

export function deleteharacters(personId) {
  return async function (dispatch) {
    await fetch(`http://localhost:3010/madeuppeople/${personId}`, {
      method: "DELETE",
    });
    return dispatch({ type: "characters/characterDeleted", payload: personId });
  };
}

export function createNewCharacter(body) {
  console.log("body  of SLICE", body);
  return async function (dispatch) {
    console.log("---bodyyyyy----  ", body)

    await fetch(`http://localhost:3010/madeuppeople/`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch((err) => console.error("error ", err));
    return dispatch({ type: "characters/newCharacterCreated", payload: body });
  }; 
}

export function editCharacter(body) {
  console.log("body  of SLICE", body);
  return async function (dispatch) {
    await fetch(`http://localhost:3010/madeuppeople/${body.id}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch((err) => console.error("error", err));
    return dispatch({ type: "characters/editCharacter", payload: body });
  };
}
