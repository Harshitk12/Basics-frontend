import React from "react";
import { ThemeProvider } from "./Contexts/ThemeContext";
import ThemeToggler from './Components/ThemeToggler';
function App() {

  return (
    <ThemeProvider>
    <ThemeToggler/>
    </ThemeProvider>
  )
}

export default App
