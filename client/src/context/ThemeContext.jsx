import React, { useEffect, useState } from "react";

const { Provider, Consumer } = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  useEffect(() => {
    let el = document.querySelector(":root");

    if (theme === "dark") {
      el.classList.add("theme-dark");
    } else el.classList.remove("theme-dark");
  });

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "light");
    }
    setTheme(window.localStorage.getItem("theme"));
  };

  return (
    <Provider value={{ theme: theme, toggle: toggleTheme }}>
      {children}
    </Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };

// import React, { Component } from "react";

// const { Provider, Consumer } = React.createContext();

// class ThemeContextProvider extends Component {
//   state = {
//     theme: 'light'
//   }
//   componentDidUpdate(prevState) {
//     let el = document.querySelector(':root')

//     if (this.state.theme !== prevState.theme) {
//       el.classList.toggle('theme-dark');

//     }

//   }
//   toggleTheme = () => {
//     this.setState(prevState => {
//       return {
//         theme: prevState.theme === 'light' ? 'dark' : 'light'
//       }
//     })
//   }
//   render() {
//     return <Provider value={{theme: this.state.theme, toggle: this.toggleTheme}}>
//             {this.props.children}
//         </Provider>;
//   }
// }

// export { ThemeContextProvider, Consumer as ThemeContextConsumer };
