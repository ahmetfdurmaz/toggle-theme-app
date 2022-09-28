import React from "react";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("dark");
  const [text, setText] = useLocalStorage("Light Theme");

  const switchTheme = () => {
    // nasil girdiginin bir onemi yok newcolor daki gibi de olur ama bu daha iyi .
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    const newText = text === "Light Theme" ? "Dark Theme" : "Light Theme";
    setText(newText);
  };

  return (
    <div className="App" data-theme={theme}>
      <button onClick={switchTheme}>Click Here</button>
      <h2>{text}</h2>
    </div>
  );
}

export default App;
