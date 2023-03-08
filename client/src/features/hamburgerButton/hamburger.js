
const initialState = {
  isActive: false
};

export default function hamburgerReducer(state = initialState, action) {
  switch (action.type) {

    case 'hamburger/isActive': {
      return {
        isActive: action.payload
      }
    }

    default:
      return state;
  }
}
