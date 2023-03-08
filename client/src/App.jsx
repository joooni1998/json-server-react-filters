import { useState } from "react";
import "./css/index.css";
import React from "react";
import { connect } from "react-redux";
import ListCards from "./components/ListCards/ListCards";
import "./css/index.css"
import FiltersSection from "./components/FiltersSection/FiltersSection";
import store from "./store";
import { fetchCharacters } from "./features/characters/charactersSlice";
store.dispatch(fetchCharacters);
import { Route, Routes } from "react-router-dom";
import ShowCharacter from "./components/ShowCharacter/ShowCharacter";
import EditCharacter from "./components/EditCharacter/EditCharacter";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import HeaderContent from "./components/HeaderContent/HeaderContent";
export const App = ({ characters }) => {

  return (

    <div className={`main`}>
    <header>
        <HeaderContent/>
      </header>
    
    <div className='container'>
      {characters.length > 0 ? (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
             
                <FiltersSection />
                <ListCards />
              </>
            }
          />
          <Route
            exact
            path="create-new-character"
            element={<CreateCharacter />}
          />
          <Route path="character/:id" element={<ShowCharacter />} />
          <Route path="character/:id/edit" element={<EditCharacter />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      ) : (
        <h1>No characters to show</h1>
      )} 
    </div>
  </div>
      )}


const mapStateToProps = (state) => {
  return { characters: state.characters };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
