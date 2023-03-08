const initialState = {
  name: [],
  lastName: [],
  age: [],
  favoriteColor: [],
  country: [],
  hobbie: [],
};

export default function categoriesInUseReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/addToName": {
      return {
        ...state,
        name: [...state.name, action.payload],
      };
    }
    case "categories/deleteFromName": {
      return {
        ...state,
        name: [...state.name.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addTolastName": {
      return {
        ...state,
        lastName: [...state.lastName, action.payload],
      };
    }
    case "categories/deleteFromlastName": {
      return {
        ...state,
        lastName: [...state.lastName.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addToage": {
      return {
        ...state,
        age: [...state.age, action.payload],
      };
    }
    case "categories/deleteFromage": {
      return {
        ...state,
        age: [...state.age.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addTofavoriteColor": {
      return {
        ...state,
        favoriteColor: [...state.favoriteColor, action.payload],
      };
    }
    case "categories/deleteFromfavoriteColor": {
      return {
        ...state,
        favoriteColor: [
          ...state.favoriteColor.filter((el) => el !== action.payload),
        ],
      };
    }

    case "categories/addTocountry": {
      return {
        ...state,
        country: [...state.country, action.payload],
      };
    }
    case "categories/deleteFromcountry": {
      return {
        ...state,
        country: [...state.country.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addTohobbie": {
      return {
        ...state,
        hobbie: [...state.hobbie, action.payload],
      };
    }
    case "categories/deleteFromhobbie": {
      return {
        ...state,
        hobbie: [...state.hobbie.filter((el) => el !== action.payload)],
      };
    }
    case "categories/clearCategories": {
      return initialState
    }

    default:
      return state;
  }
}
