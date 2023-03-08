import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import "../../css/index.css";

export const ListCards = ({ characters, filters, categoriesInUse, isActive, hamburgerStatus }) => {
  const limitsOfCardsPerPage = 20;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);



  const handleClick = () => {
    if (hamburgerStatus.isActive) {
      isActive(false);
    }
  };



  useEffect(() => {
    setNumberOfPages(filters.length ?Math.ceil(filters.length / limitsOfCardsPerPage) :Math.ceil(characters.length / limitsOfCardsPerPage))
  })
  // if you enter a page and then get back to the list the button will stay hidden, with this effect on mount the button will appear only on this page
  useEffect(() => {
    const hamburgerButton = document.getElementsByClassName("buttonHamburger");
    hamburgerButton[0].style.display = "block";
    
  }, []);

  const goToFirstPage = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    isActive(false)
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    isActive(false)
  };

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    isActive(false)
  };
  const goToLastPage = () => {
    setCurrentPage(numberOfPages);
    window.scrollTo({ top: 0, behavior: "smooth" });
    isActive(false)
  };


  const areCategoriesInUse = () => {
    const { name, lastName, age, favoriteColor, country, hobbie } =
      categoriesInUse;

    if (
      name.length ||
      lastName.length ||
      age.length ||
      favoriteColor.length ||
      country.length ||
      hobbie.length
    ) {
      return true;
    } else return false;
  };

  const paginate = () => {
    const items = areCategoriesInUse() === true ? filters : characters;
    const startIndex = limitsOfCardsPerPage * (currentPage - 1);
    const endIndex = startIndex + limitsOfCardsPerPage;
    const totalPages = Math.ceil(items.length / limitsOfCardsPerPage);

    const paginatedItems = items.slice(startIndex, endIndex);

    return paginatedItems;
  };
  console.log("numberOfPages  ", numberOfPages);
  console.log("currentPage  ", currentPage);

  
  
  useEffect(() => {
  if (currentPage > numberOfPages && numberOfPages !== 0) {
    setCurrentPage(PrevState =>PrevState -1)
    } 
  })
  return (
    <>
      {areCategoriesInUse() && !paginate().length ? (
        <div className="noData">No results found</div>
      ) : (
        <div onClick={handleClick} className="listCardsContainer">
          <Card characterOrFilter={paginate()} />
          <div className="navButtons">
            <button
              className={`goToFirstPage navPages  ${
                currentPage === 1 ? "hideButton" : null
              }`}
              onClick={goToFirstPage}
            >
              {"<<"}
            </button>

            <button
              className={`goToPreviousPage navPages ${
                currentPage === 1 ? "hideButton" : undefined
              }`}
              onClick={goToPreviousPage}
            >
              {"<"}
            </button>
            <button className="currentPage ">{currentPage}</button>
            <button
              className={`goToNextPage navPages  ${
                currentPage === numberOfPages ? "hideButton" : undefined
              }`}
              onClick={goToNextPage}
            >
              {">"}
            </button>

            <button
              className={`goToLastPage navPages  ${
                currentPage === numberOfPages ? "hideButton" : undefined
              }`}
              onClick={goToLastPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      )}
    </>
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
    isActive: (payload) => dispatch({ type: "hamburger/isActive", payload})
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListCards);
