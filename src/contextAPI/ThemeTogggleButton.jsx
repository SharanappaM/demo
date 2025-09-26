import React, { useContext } from 'react'
import {   ThemeConext } from './ThemeContext'


const ThemeTogggleButton = () => {
    const {theme, toggleTheme} = useContext(ThemeConext)
  return (
    <div>
      <button onClick={toggleTheme}>Switch to {theme==="ligth"?"dark" :"ligth"}</button>
    </div>
  )
}

export default ThemeTogggleButton
