import React, { useState } from "react";
import { connect } from "react-redux";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContextConsumer } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";


const HeaderContent = ({ hamburgerStatus, isActive, clearCategories, clearFilters }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (!hamburgerStatus.isActive) {
      isActive(true);
    } else {
      isActive(false);
    }
  };

  const handleClickTitle = () => {
    clearCategories()
    clearFilters()
    isActive(false)
    navigate('/')
    
  }


  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="headerContent" onClick={console.log(context)}>
          <button
            onClick={handleClick}
            className={`buttonHamburger${
              hamburgerStatus.isActive ? " opened" : ""
            }`}
          >
            <svg className="hamburger" viewBox="0 0 100 100" width="2.1875em">
              <rect
                className="line  top"
                width="80"
                height="10"
                x="10"
                y="30"
                rx="5"
              ></rect>
              <rect
                className="line  middle"
                width="80"
                height="10"
                x="10"
                y="50"
                rx="5"
              ></rect>
              <rect
                className="line bottom"
                width="80"
                height="10"
                x="10"
                y="70"
                rx="5"
              ></rect>
            </svg>
          </button>
          <div className="headerTitle">
            <h1 onClick={handleClickTitle}>Filters React</h1>
          </div>
            
          {context.theme === "dark" ? (
            <button
              onClick={context.toggle}
              className={`sunButton theme-${context.theme} `}
            >
              <MdOutlineLightMode className="sunIcon" />
            </button>
          ) : (
            <button
              onClick={context.toggle}
              className={`moonButton  theme-${context.theme} `}
            >
              <MdOutlineDarkMode className="moonIcon" />
            </button>
          )}
        </div>
      )}
    </ThemeContextConsumer>
  );
};

const mapStateToProps = (state) => {
  return {
    hamburgerStatus: state.hamburgerStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isActive: (payload) => dispatch({ type: "hamburger/isActive", payload }),
    clearCategories: () => dispatch({type: "categories/clearCategories"}),
    clearFilters: () => dispatch({type: 'filters/clearFilters'})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
