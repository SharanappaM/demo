import { createContext, useState } from "react";

export const ThemeConext = createContext();


export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("ligth")
    const toggleTheme = ()=>{
        setTheme((prev)=>(prev==="ligth" ? "dark" :"ligth"));
    }
    return (
        <ThemeConext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeConext.Provider>
    )
}