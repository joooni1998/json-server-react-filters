import { combineReducers } from "redux";
import charactersReducer from "./features/characters/charactersSlice";
import filtersReducer from './features/filters/filtersSlice'
import categoriesInUseReducer from './features/categories/categoriesInUseSlice'
import hamburgerReducer from "./features/hamburgerButton/hamburger";
const rootReducer = combineReducers({

  characters: charactersReducer,
  filters: filtersReducer,
  categoriesInUse: categoriesInUseReducer,
  hamburgerStatus: hamburgerReducer
})

export default rootReducer