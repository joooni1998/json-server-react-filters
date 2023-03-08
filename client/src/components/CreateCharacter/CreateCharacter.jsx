import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createNewCharacter } from "../../features/characters/charactersSlice";
import "../../css/index.css";
import { useEffect, useState } from "react";

const CreateCharacter = ({ createNewCharacter, isActive }) => {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    lastName: "",
    age: "",
    favoriteColor: "",
    country: "",
    hobbie: "",
    image: "",
    id: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    isActive(false);
    const hamburgerButton = document.getElementsByClassName("buttonHamburger");
    hamburgerButton[0].style.display = "none";
  }, []);

  const basicProfilePictures = [
    "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_1_bigger.png",
    "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_2_bigger.png",
    "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3_bigger.png",
    "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_4_bigger.png",
    "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_5_bigger.png",
    "https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_6_bigger.png",
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setNewCharacter({
      ...newCharacter,
      [e.target.name]:
        e.target.name === "age" ? parseInt(e.target.value) : e.target.value,
    });
    console.log("eeEEEEEEeeeee", e.target.id);
  };

  useEffect(() => {
    const imageIndex = Math.round(
      Math.random() * (basicProfilePictures.length - 1)
    );
    const id = Date.now();
    const image = basicProfilePictures[imageIndex];

    let obj = { ...newCharacter };
    obj.id = id;
    obj.image = image;
    setNewCharacter(obj);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();


    createNewCharacter(newCharacter);

    setTimeout(() => {
      navigate(`/character/${newCharacter.id}`);
    },  "250");
  };

  return (
    <div className="createCharacter">
      <div className="createContainer">
        <h1 className="createTitle">Create a new Character</h1>
        <div className="characterForm">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              required="required"
              className="createField"
              onChange={(e) => handleChange(e)}
              value={newCharacter.name}
              placeholder="Name"
              type="text"
              name="name"
              id="name"
            />
            <br />

            <input
              required="required"
              className="createField"
              onChange={(e) => handleChange(e)}
              value={newCharacter.lastName}
              placeholder="Last Name"
              type="text"
              name="lastName"
              id="lastName"
            />
            <br />

            <input
              required="required"
              className="createField"
              onChange={(e) => handleChange(e)}
              value={newCharacter.age}
              placeholder="Age"
              name="age"
              type="text"
              id="age"
            />
            <br />

            <input
              required="required"
              className="createField"
              onChange={(e) => handleChange(e)}
              value={newCharacter.favoriteColor}
              placeholder="Favorite Color"
              type="text"
              name="favoriteColor"
              id="favoriteColor"
            />
            <br />

            <input
              required="required"
              className="createField"
              onChange={(e) => handleChange(e)}
              value={newCharacter.country}
              placeholder="Country"
              type="text"
              name="country"
              id="country"
            />
            <br />

            <input
              required="required"
              className="createField"
              onChange={(e) => handleChange(e)}
              value={newCharacter.hobbie}
              placeholder="Hobbie"
              type="text"
              name="hobbie"
              id="hobbie"
            />
            <br />

            <input className="submitButton" type="submit" value="Create" />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewCharacter: (body) => dispatch(createNewCharacter(body)),
    isActive: (payload) => dispatch({ type: "hamburger/isActive", payload }),
  };
};

export default connect(null, mapDispatchToProps)(CreateCharacter);
