import React from "react";
import useLocalStorage from "use-local-storage";

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const [text, setText] = useLocalStorage("Light Theme")
  const [color, setColor] = useLocalStorage('color' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    const newText = text === "Light Theme" ? "Dark Theme" : "Light Theme";
    setText(newText);
    const newColor = color === 'light' ? 'dark' : 'light';
    setColor(newColor);
  }

  

  return ( 
    <div className="App" data-theme={theme}>
      <button onClick={switchTheme} data-color={color} >Click Here</button>
      <h2>{text}</h2>
    </div>
  );
}

export default App;
