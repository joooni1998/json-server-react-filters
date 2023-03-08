const initialState = [];

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/filtersInUse": {
      return action.payload;
    }
    case "filters/clearFilters": {
      return initialState;
    }

    default:
      return state;
  }
}
