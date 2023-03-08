import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/index.css";

const FiltersSection = ({
  clearFilters,
  characters,
  hamburgerStatus,
  filtersInUse,
  categoriesInUse,
  addToNameDispatch,
  deleteFromNameDispatch,
  addTolastNameDispatch,
  deleteFromlastNameDispatch,
  addToageDispatch,
  deleteFromageDispatch,
  addTofavoriteColorDispatch,
  deleteFromfavoriteColorDispatch,
  addTocountryDispatch,
  deleteFromcountryDispatch,
  addTohobbieDispatch,
  deleteFromhobbieDispatch,
}) => {
  const [names, setNames] = useState([]);
  const [lastNames, setLastNames] = useState([]);
  const [ages, setAges] = useState([]);
  const [favoriteColors, setfavoriteColors] = useState([]);
  const [countries, setcountries] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [IsfilterMobileButtonOpen, setisfilterMobileButtonOpen] =
    useState(false);
  
  const [isfilterBoxOpen, setisfilterBoxOpen] = useState({
    name: false,
    lastName: false,
    age: false,
    favoriteColor: false,
    country: false,
    hobbie: false,
  });

  useEffect(() => {
    //for loop to look up for the categories to filter
    for (let i = 0; i < characters.length; i++) {
      if (!names.includes(characters[i].name)) {
        setNames([...names, characters[i].name]);
      }
      if (!lastNames.includes(characters[i].lastName)) {
        FiltersSection;
        setLastNames([...lastNames, characters[i].lastName]);
      }

      if (!ages.includes(characters[i].age)) {
        setAges([...ages, characters[i].age]);
      }

      if (!favoriteColors.includes(characters[i].favoriteColor)) {
        setfavoriteColors([...favoriteColors, characters[i].favoriteColor]);
      }

      if (!countries.includes(characters[i].country)) {
        setcountries([...countries, characters[i].country]);
      }

      if (!hobbies.includes(characters[i].hobbie)) {
        setHobbies([...hobbies, characters[i].hobbie]);
      }
    }
  }, [names]);

  const addOrDeleteFilter = (addOrDelete, categoryName, id) => {
    console.log("----THEEEEEEE ID ISSSS-----", id);
    if (addOrDelete === "add") {
      if (categoryName === "name") addToNameDispatch(id);

      if (categoryName === "lastName") addTolastNameDispatch(id);
      if (categoryName === "age") addToageDispatch(id);
      if (categoryName === "favoriteColor") addTofavoriteColorDispatch(id);
      if (categoryName === "country") addTocountryDispatch(id);
      if (categoryName === "hobbie") addTohobbieDispatch(id);
    } else {
      if (categoryName === "name") deleteFromNameDispatch(id);
      if (categoryName === "lastName") deleteFromlastNameDispatch(id);
      if (categoryName === "age") deleteFromageDispatch(id);
      if (categoryName === "favoriteColor") deleteFromfavoriteColorDispatch(id);
      if (categoryName === "country") deleteFromcountryDispatch(id);
      if (categoryName === "hobbie") deleteFromhobbieDispatch(id);
    }
  };

  const filterCategories = (characters, categoriesInUse) => {
    console.log("categories in USESSS", categoriesInUse);
    const filterKeys = Object.keys(categoriesInUse);
    console.log("FILTEREDDD KEYSSSS", filterKeys);
    return characters.filter((obj1) => {
      return filterKeys.every((key) => {
        if (!categoriesInUse[key].length) return true;

        return categoriesInUse[key].includes(obj1[key]);
      });
    });
  };

  useEffect(() => {
    if (
      !categoriesInUse.name.length &&
      !categoriesInUse.lastName.length &&
      !categoriesInUse.age.length &&
      !categoriesInUse.favoriteColor.length &&
      !categoriesInUse.country.length &&
      !categoriesInUse.hobbie.length
    ) {
      clearFilters();
    } else {
      const filtered = filterCategories(characters, categoriesInUse);
      filtersInUse(filtered);
    }
  }, [categoriesInUse, characters]);

  const handleClickName = (e) => {
    console.log("EEE IS  ", e.target.checked);
    const id = e.target.id;
    const checked = e.target.checked;

    if (checked) {
      addOrDeleteFilter("add", "name", id);
    } else {
      addOrDeleteFilter("delete", "name", id);
    }
  };

  const handleClickLastName = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (checked) {
      addOrDeleteFilter("add", "lastName", id);
    } else {
      addOrDeleteFilter("delete", "lastName", id);
    }
  };

  const handleClickAge = (e) => {
    const id = parseInt(e.target.id);
    const checked = e.target.checked;
    if (checked) {
      addOrDeleteFilter("add", "age", id);
    } else {
      addOrDeleteFilter("delete", "age", id);
    }
  };

  const handleClickfavoriteColor = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (checked) {
      addOrDeleteFilter("add", "favoriteColor", id);
    } else {
      addOrDeleteFilter("delete", "favoriteColor", id);
    }
  };

  const handleClickCountry = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    if (checked) {
      addOrDeleteFilter("add", "country", id);
    } else {
      addOrDeleteFilter("delete", "country", id);
    }
  };

  const handleClickHobbie = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    if (checked) {
      addOrDeleteFilter("add", "hobbie", id);
    } else {
      addOrDeleteFilter("delete", "hobbie", id);
    }
  };

  const filtersByName = names.map((name) => (
    <li key={name}>
      <div className="filterBy">
        {React.createElement("input", {
          id: name,
          onChange: handleClickName,
          type: "checkbox",
          checked: categoriesInUse["name"].includes(name) ? true : false,
        })}
        <label htmlFor={name} className="labelCategoryTitle">
          <span className="liFilterName">{name}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByLastName = lastNames.map((lastName) => (
    <li key={lastName}>
      <div className="filterBy">
        {React.createElement("input", {
          id: lastName,
          onChange: handleClickLastName,
          type: "checkbox",
          checked: categoriesInUse["lastName"].includes(lastName)
            ? true
            : false,
        })}
        <label htmlFor={lastName} className="labelCategoryTitle">
          <span className="liFilterName">{lastName}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByAge = ages.map((age) => (
    <li key={age}>
      <div className="filterBy">
        {React.createElement("input", {
          id: age,
          onChange: handleClickAge,
          type: "checkbox",
          checked: categoriesInUse["age"].includes(age) ? true : false,
        })}
        <label htmlFor={age} className="labelCategoryTitle">
          <span className="liFilterName">{age}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByfavoriteColor = favoriteColors.map((favoriteColor) => (
    <li key={favoriteColor}>
      <div className="filterBy">
        {React.createElement("input", {
          id: favoriteColor,
          onChange: handleClickfavoriteColor,
          type: "checkbox",
          checked: categoriesInUse["favoriteColor"].includes(favoriteColor)
            ? true
            : false,
        })}
        <label htmlFor={favoriteColor} className="labelCategoryTitle">
          <span className="liFilterName">{favoriteColor}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByCountries = countries.map((country) => (
    <li key={country}>
      <div className="filterBy">
        {React.createElement("input", {
          id: country,
          onChange: handleClickCountry,
          type: "checkbox",
          checked: categoriesInUse["country"].includes(country) ? true : false,
        })}
        <label htmlFor={country} className="labelCategoryTitle">
          <span className="liFilterName">{country}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByHobbies = hobbies.map((hobbie) => (
    <li key={hobbie}>
      <div className="filterBy">
        {React.createElement("input", {
          id: hobbie,
          onChange: handleClickHobbie,
          type: "checkbox",
          checked: categoriesInUse["hobbie"].includes(hobbie) ? true : false,
        })}{" "}
        <label htmlFor={hobbie} className="labelCategoryTitle">
          <span className="liFilterName">{hobbie}</span>
        </label>
      </div>
    </li>
  ));

  const handleClickButton = (key) => {
    if (isfilterBoxOpen[key] === false) {
      // console.log(key);
      setisfilterBoxOpen({
        ...isfilterBoxOpen,
        [key]: true,
      });
      setisfilterMobileButtonOpen(true);
    } else {
      setisfilterMobileButtonOpen(false);
      setisfilterBoxOpen({
        ...isfilterBoxOpen,
        [key]: false,
      });
    }
  };

  return (
    <div
      className={`scroller filtersSection  ${
        hamburgerStatus.isActive ? " opened" : ""
      }`}
    >
      <Link to="/create-new-character">
        <button className="createCharacterButton">Create New Character</button>
      </Link>

      <button
        onClick={() => handleClickButton("name")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Name{" "}
          <div
            className={`caret ${isfilterBoxOpen.name ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.name ? "filterBoxIsOpenName" : ""
        }`}
      >
        <ul>{filtersByName}</ul>
      </div>
      <button
        onClick={() => handleClickButton("lastName")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Last Name{" "}
          <div
            className={`caret ${isfilterBoxOpen.lastName ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.lastName ? "filterBoxIsOpenLastName" : ""
        }`}
      >
        <ul>{filtersByLastName}</ul>
      </div>
      <button
        onClick={() => handleClickButton("age")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Age{" "}
          <div
            className={`caret ${isfilterBoxOpen.age ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.age ? "filterBoxIsOpenAge" : ""
        }`}
      >
        <ul>{filtersByAge}</ul>
      </div>
      <button
        onClick={() => handleClickButton("favoriteColor")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by favorite Color{" "}
          <div
            className={`caret ${
              isfilterBoxOpen.favoriteColor ? "rotateCaret" : ""
            }`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.favoriteColor ? "filterBoxIsOpenFavoriteColor" : ""
        }`}
      >
        <ul>{filtersByfavoriteColor}</ul>
      </div>
      <button
        onClick={() => handleClickButton("country")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Country{" "}
          <div
            className={`caret ${isfilterBoxOpen.country ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.country ? "filterBoxIsOpenCountry" : ""
        }`}
      >
        <ul>{filtersByCountries}</ul>
      </div>
      <button
        onClick={() => handleClickButton("hobbie")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Hobbie{" "}
          <div
            className={`caret ${isfilterBoxOpen.hobbie ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.hobbie ? "filterBoxIsOpenHobbie" : ""
        }`}
      >
        <ul>{filtersByHobbies}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    filters: state.filters,
    categoriesInUse: state.categoriesInUse,
    hamburgerStatus: state.hamburgerStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filtersInUse: (payload) =>
      dispatch({ type: "filters/filtersInUse", payload }),

    addToNameDispatch: (payload) =>
      dispatch({ type: "categories/addToName", payload }),
    deleteFromNameDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromName", payload }),

    addTolastNameDispatch: (payload) =>
      dispatch({ type: "categories/addTolastName", payload }),
    deleteFromlastNameDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromlastName", payload }),

    addToageDispatch: (payload) =>
      dispatch({ type: "categories/addToage", payload }),
    deleteFromageDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromage", payload }),

    addTofavoriteColorDispatch: (payload) =>
      dispatch({ type: "categories/addTofavoriteColor", payload }),
    deleteFromfavoriteColorDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromfavoriteColor", payload }),

    addTocountryDispatch: (payload) =>
      dispatch({ type: "categories/addTocountry", payload }),
    deleteFromcountryDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromcountry", payload }),

    addTohobbieDispatch: (payload) =>
      dispatch({ type: "categories/addTohobbie", payload }),
    deleteFromhobbieDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromhobbie", payload }),
    clearFilters: () => dispatch({ type: "filters/clearFilters" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
