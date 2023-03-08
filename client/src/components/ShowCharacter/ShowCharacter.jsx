import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "../../css/index.css";
const ShowCharacter = ({ characters, isActive }) => {
  const { id } = useParams();
  // console.log("IDDDDDDD", id);

  const navigate = useNavigate();
  console.log(characters);
  const indexOfChar = characters.findIndex((ele) => ele.id === parseInt(id));

  useEffect(() => {
    // setCharacterInfo(characters)
    isActive(false);
    const hamburgerButton = document.getElementsByClassName("buttonHamburger");
    console.log("hamburgerButton  ", hamburgerButton[0]);
    hamburgerButton[0].style.display = "none";
  }, []);

  // useEffect(() => {
  //   // fetchCharacters(parseInt(id));
  //   setCharacterInfo(characterInfo)
  //   // navigate(0);

  // }, []);

  // useEffect(() => {
  //   setCharacterInfo(characterInfo)

  // }, [characters]);
  return (
    <div id={id} className="showCharacterDiv">
      <Link to="edit">
        <button className="updateButton">Update</button>
      </Link>

      <div className="fullName">
        <h1>{`${characters[indexOfChar].name} ${characters[indexOfChar].lastName}`}</h1>
      </div>
      <div className="otherCharacterInfo">
        <p>Age: {characters[indexOfChar].age}</p>
        <p>favorite Color: {characters[indexOfChar].favoriteColor}</p>
        <p>Country: {characters[indexOfChar].country}</p>
        <p>Hobbie: {characters[indexOfChar].hobbie}</p>
        <img className="imgShowCharacter" src={characters[indexOfChar].image} />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    isActive: (payload) => dispatch({ type: "hamburger/isActive", payload }),
  };
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    filters: state.filters,
    categoriesInUse: state.categoriesInUse,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCharacter);
